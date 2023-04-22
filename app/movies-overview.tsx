"use server"

import { fetchConfiguration, fetchMovies } from './movies-api.server';
import { MoviesGrid } from './movies-grid';

export async function MoviesOverview() {
  const [moviesConfig, popularMovies, nowPlayingMovies, topRatedMovies, upcomingMovies] =
  await Promise.all([
    fetchConfiguration(),
    fetchMovies('popular'),
    fetchMovies('now_playing'),
    fetchMovies('top_rated'),
    fetchMovies('upcoming'),
  ]);

  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8">
      <MoviesGrid movies={popularMovies} moviesConfig={moviesConfig}>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Popular Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={nowPlayingMovies} moviesConfig={moviesConfig}>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Now Playing
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={topRatedMovies} moviesConfig={moviesConfig}>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Top Rated Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={upcomingMovies} moviesConfig={moviesConfig}>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Upcoming Movies
        </h2>
      </MoviesGrid>
    </div>
  );
}


