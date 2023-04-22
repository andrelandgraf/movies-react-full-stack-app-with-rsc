import { MoviesGrid } from './movies-grid';

export function MoviesOverviewSkeleton() {
  return (
    <div className="w-full flex flex-col gap-4 lg:gap-8">
      <MoviesGrid movies={[]} isLoading>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Popular Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={[]} isLoading>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Now Playing
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={[]} isLoading>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Top Rated Movies
        </h2>
      </MoviesGrid>
      <MoviesGrid movies={[]} isLoading>
        <h2 className="text-center text-xl lg:text-2xl font-semibold">
          Upcoming Movies
        </h2>
      </MoviesGrid>
    </div>
  );
}

export function ErrorBoundary() {
    return (
      <div className="flex flex-col items-center justify-center m-2 md:m-4 lg:m-8 gap-4 lg:gap-8">
        <h1 className="font-semibold text-xl lg:text-3xl">Error</h1>
        <p className="text-lg">
          Something went wrong while fetching movies. Please try again later.
        </p>
      </div>
    );
  }