import { Suspense } from "react";
import { MoviesOverview } from "./movies-overview";
import { MoviesOverviewSkeleton } from "./movies-overview-fallback";

export default async function Component() {
  return (
    <main className="w-full p-2 lg:p-8">
      <div className="text-center mb-2 lg:mb-8">
        <h1 className="font-semibold text-xl lg:text-3xl">Full-Stack React</h1>
        <p className="text-sm">
          Built with Remix. Powered by the Movie DB API.
        </p>
      </div>
      <Suspense fallback={<MoviesOverviewSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <MoviesOverview />
      </Suspense>
    </main>
  );
}