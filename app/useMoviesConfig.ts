"use client"

import invariant from 'tiny-invariant';
import type { FilteredMoviesAPIConfiguration } from './movies-api.server';
import { useContext } from 'react';
import { MoviesConfigContext } from '~/app/page';

export function useMoviesConfig() {
  const data = useContext(MoviesConfigContext);
  invariant(
    data && typeof data === 'object' && 'moviesConfig' in data,
    'Missing moviesAPIConfig in root loader data'
  );
  return data.moviesConfig as FilteredMoviesAPIConfiguration;
}
