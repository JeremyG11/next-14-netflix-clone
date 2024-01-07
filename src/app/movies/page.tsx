import { Search } from "@/components/Filter";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import { filterMovies } from "@/libs/api/getMovies";
import { Movie } from "../../../types";
import { MdMovieFilter } from "react-icons/md";
import SortByButtons from "@/components/SortByButton";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string | undefined };
}) {
  const searchResult = await filterMovies(searchParams.q!);
  console.log(searchResult);
  return (
    <section
      className="relative bg-cover bg-no-repeat bg-top bg-fixed"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
      }}
    >
      <div className="absolute z-0 inset-0 bg-gradient-to-br from-black/95 via-black/95 to-black/100"></div>

      <div className="z-20 relative h-full">
        <Navbar />

        <div className=" mx-auto pt-16 px-24 w-full flex items-center justify-between">
          <div className="py-1 text-4xl font-medium text-white flex items-center">
            <MdMovieFilter className="text-5xl" />
            <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-red-600 before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
              Movies
            </p>
          </div>
          <div className="flex w-full flex-col-reverse bg-fuchsia-700">
            {/* <SortByButtons />
            <Search /> */}
          </div>
        </div>
        <div className="sm:px-24 px-8 py-8 h-screen ">
          {/* <Movies movies={searchResult.results} /> */}
          <section className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {searchResult?.results?.map((movie: Movie, index: number) => (
              <MovieCard key={movie.id} movie={movie} index={index} />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
