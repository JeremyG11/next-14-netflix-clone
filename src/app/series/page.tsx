import { BsFillCollectionPlayFill } from "react-icons/bs";

import { TVseries } from "../../../types";
import Navbar from "@/components/Navbar";
import { Search } from "@/components/Filter";
import Pagination from "@/components/Pagination";
import SortByButtons from "@/components/SortByButton";
import { filterSeries, seriesDetails } from "@/libs/api/getSeries";
import { MovieCTA, SeriesCTA } from "@/components/MovieCTA";
import { SeriesCard } from "@/components/Cards";

export default async function Series({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    sort_by?: string;
    page?: string;
    first_air_date_year?: string;
    with_genres?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;
  const year = Number(searchParams?.first_air_date_year);

  const searchResult = await filterSeries(
    searchParams?.q || "",
    page,
    searchParams?.sort_by,
    year!,
    searchParams?.with_genres
  );
  const randomIndex = Math.floor(Math.random() * 8) + 1;

  const seletedSeries = await seriesDetails(
    searchResult.results[randomIndex].id
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
            <BsFillCollectionPlayFill className="text-5xl" />
            <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-primary before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
              TV Series
            </p>
          </div>
          <div className="w-full md:w-1/2 flex gap-4 justify-center items-end flex-col">
            <div className="flex w-full xl:pl-[148px]">
              <SortByButtons />
            </div>
          </div>
        </div>
        <div className="mt-4 px-8 flex items-center md:justify-end md:px-24 md:mr-10">
          <div className="w-full mt-4 flex md:w-96">
            <Search placeholder="Search series" />
          </div>
        </div>

        <div className="sm:px-24 px-8 py-8 h-full ">
          <section className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {searchResult?.results
              ?.slice(0, 8)
              .map((movie: TVseries, index: number) => (
                <SeriesCard key={movie.id} series={movie} index={index} />
              ))}
          </section>
          <SeriesCTA
            series={searchResult.results[randomIndex]}
            seriesDetials={seletedSeries}
          />
          <section className="mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {searchResult?.results
              ?.slice(10, 14)
              .map((movie: TVseries, index: number) => (
                <SeriesCard key={movie.id} series={movie} index={index} />
              ))}
          </section>
          <Pagination pages={100} />
        </div>
      </div>
    </section>
  );
}
