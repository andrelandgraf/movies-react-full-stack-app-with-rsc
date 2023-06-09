"use client"

import type { ImgHTMLAttributes, SyntheticEvent } from 'react';
import { useRef } from 'react';
import { FilteredMoviesAPIConfiguration } from './movies-api.server';

function findBestSize(
  widthSizes: string[], // ["w92", "w154", "w185", "w342", "w500", "w780", original]
  widthInPixels: number
): string {
  const widthBasedSizes = widthSizes.filter((size) => size[0] === 'w');
  const bestSize = widthBasedSizes.reduce((current, size) => {
    const sizeInPixels = parseInt(size.slice(1), 10);
    if (sizeInPixels >= widthInPixels) {
      return size;
    }
    return current;
  }, widthBasedSizes[0]);
  return bestSize;
}

export function useMoviesImageProps(
  configData: FilteredMoviesAPIConfiguration | undefined,
  path: string | undefined,
  widthInPixels: number
): ImgHTMLAttributes<HTMLImageElement> | null {
  const retries = useRef(0);

  if (!configData || !path) {
    return null;
  }

  const {
    secure_base_url: baseUrl,
    poster_sizes: posterSizes,
    backdrop_sizes: backdropSizes,
  } = configData.images;

  const bestPosterWidth = findBestSize(posterSizes, widthInPixels);
  const bestBackdropWidth = findBestSize(backdropSizes, widthInPixels);

  const widthPosterSizes = posterSizes.filter((size) => size[0] === 'w');
  const srcSet = widthPosterSizes
    .map((size) => `${baseUrl}${size}${path} ${size.slice(1)}w`)
    .join(', ');
  const sizes = widthPosterSizes
    .map((size) => `(max-width: ${size.slice(1)}px) ${size.slice(1)}px`)
    .join(', ');

  const backdropImage = `${baseUrl}${bestBackdropWidth}${path}`;
  return {
    src: `${baseUrl}${bestPosterWidth}${path}`,
    srcSet,
    sizes,
    onError: (event: SyntheticEvent<HTMLImageElement>) => {
      if (retries.current > 2) {
        return;
      }
      retries.current += 1;
      const img = event.currentTarget;
      img.src = backdropImage;
    },
    style: {
      backgroundImage: `url(${backdropImage})`,
    },
  };
}
