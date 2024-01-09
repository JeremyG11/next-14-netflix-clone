"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { IoMdFilm } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdMovieFilter } from "react-icons/md";
import { BsFillCollectionPlayFill } from "react-icons/bs";

import MovieCTA from "./MovieCTA";
import { GenreWithMovies, Movie } from "../../types";
import MovieCard from "./MovieCard";
import { BarIcon } from "./BarIcon";
import SortByButtons from "./SortByButton";

interface MoviesProps {
  movies: Movie[];
  generesWithMovies: GenreWithMovies[];
}
export default function Movies({ movies, generesWithMovies }: MoviesProps) {
  const tabs = [{ name: "Movies" }, { name: "Series" }, { name: "Actions" }];

  const [activeTab, setActiveTab] = useState("Movies");
  const isActive = (tabname: string) =>
    tabs.some((tab) => tab.name === tabname);

  return (
    <div className="sm:px-16 px-8 py-6 ">
      <div className="border-b-2 border-gray-500 py-4 text-gray-500">
        <ul className="block md:flex movies-center justify-between">
          {[
            {
              name: "Movies",
              icon: (
                <BsFillCollectionPlayFill className="text-2xl font-bold pl-2" />
              ),
            },
            {
              name: "Series",
              icon: (
                <BsFillCollectionPlayFill className="text-2xl font-bold pl-2" />
              ),
            },
            {
              name: "Actions",
              icon: <IoMdFilm className="text-2xl font-bold pl-2" />,
            },
          ].map((tab, index) =>
            activeTab === tab.name ? (
              <li
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className="py-1 text-2xl font-medium text-white flex items-center"
              >
                <MdMovieFilter className="text-3xl" />
                <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-primary before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
                  {tab.name}
                </p>
              </li>
            ) : (
              <BarIcon
                key={index}
                onClick={() => setActiveTab(tab.name)}
                icon={tab.icon}
                title={`${tab.name}`}
              />
            )
          )}
          <BarIcon
            icon={<FiSearch className="text-2xl font-bold pl-2" />}
            title="Search"
          />
        </ul>
      </div>
      <div className="my-10 flex overflow-hidden justify-between flex-nowrap">
        {generesWithMovies?.slice(4, 12).map((genre, index) => (
          <button
            key={index}
            className={`mr-6 py-[8px] px-6 text-sm font-medium focus:outline-none rounded-full text-gray-100 ${
              !genre.hasMovies ? "bg-gray-800" : "bg-primary"
            } `}
          >
            {genre.genre_name}
          </button>
        ))}
      </div>
      <div className="my-10 w-full block space-y-3 md:space-y-0 md:flex items-center justify-between flex-nowrap">
        <SortByButtons />

        <div className="flex items-center">
          <IoStar className="text-yellow-500 text-base" />
          <div className="hidden h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div className="h-5  rounded" style={{ width: 208 }}></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400"></span>
          5.6
        </div>
      </div>
      <section className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {movies?.slice(0, 15).map((movie: Movie, index: number) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </section>
      <MovieCTA />
      <section className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {movies?.slice(15, 20).map((movie: Movie, index: number) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </section>
    </div>
  );
}
