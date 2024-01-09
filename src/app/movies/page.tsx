import { Suspense } from "react";
import { Search } from "@/components/Filter";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { filterMovies } from "@/libs/api/getMovies";
import { Movie } from "../../../types";
import { MdMovieFilter } from "react-icons/md";
import SortByButtons from "@/components/SortByButton";
import Pagination from "@/components/Pagination";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    sort_by?: string;
    page?: string;
    primary_release_year?: string;
  };
}) {
  console.log(searchParams?.page);
  const page = Number(searchParams?.page) || 1;
  const year = Number(searchParams?.primary_release_year);

  const searchResult = await filterMovies(
    searchParams?.q!,
    page,
    searchParams?.sort_by!,
    year!
  );

  return (
    <section
      className="relative bg-cover bg-no-repeat  bg-top bg-fixed h-full min-h-full"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
      }}
    >
      <div className="absolute z-0 inset-0 bg-gradient-to-br from-black/95 via-black/95 to-black/100"></div>

      <div className="reltive z-20 relative h-full">
        <Navbar />

        <div className="space-y-6 md:space-y-0 px-6 pt-8 md:pt-16 md:mx-auto md:px-24 w-full md:flex md:justify-between">
          <div className="py-1 md:w-1/2 text-4xl font-medium text-white flex items-center">
            <MdMovieFilter className="text-5xl" />
            <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-primary before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
              Movies
            </p>
          </div>
          <div className="w-full md:w-1/2 flex gap-4 justify-center items-end flex-col">
            <div className="flex w-full lg:pl-[148px]">
              <SortByButtons />
            </div>
          </div>
        </div>
        <div className="mt-4 px-8 flex items-center md:justify-end md:px-24 md:mr-10">
          <div className="w-full mt-4 flex md:w-96">
            <Search placeholder="Search movie" />
          </div>
        </div>
        <div className="sm:px-24 px-8 py-8 h-full ">
          <section className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 min-h-96">
            <Suspense
              key={searchParams?.q}
              fallback={<h2 className="text-3xl">loading</h2>}
            >
              {searchResult?.results?.length === 0 ? (
                <h2 className="col-span-2 text-xl text-center font-bold">
                  No search found
                </h2>
              ) : (
                searchResult?.results?.map((movie: Movie, index: number) => (
                  <MovieCard key={movie.id} movie={movie} index={index} />
                ))
              )}
            </Suspense>
          </section>
          {/* <Pagination /> */}
        </div>
      </div>
    </section>
  );
}
