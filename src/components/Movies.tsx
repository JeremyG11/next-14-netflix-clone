"use client";
import React, { useState } from "react";
import { IoStar } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdLocalMovies, MdMovieFilter } from "react-icons/md";

import { Movie } from "../../types";
import MovieCard from "./MovieCard";
import { BarIcon } from "./BarIcon";
import MovieCTA from "./MovieCTA";

interface MoviesProps {
  movies: Movie[];
}
export default function Movies({ movies }: MoviesProps) {
  const tabs = [{ name: "Movies" }, { name: "Series" }, { name: "Actions" }];

  const [activeTab, setActiveTab] = useState("Movies");
  const isActive = (tabname: string) =>
    tabs.some((tab) => tab.name === tabname);

  return (
    <div className="sm:px-16 px-8 py-8 ">
      <div className="border-b-2 border-gray-500 py-4 text-gray-500">
        <ul className="flex movies-center justify-between">
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
              icon: (
                <BsFillCollectionPlayFill className="text-2xl font-bold pl-2" />
              ),
            },
          ].map((tab, index) =>
            activeTab === tab.name ? (
              <li
                key={index}
                onClick={() => setActiveTab(tab.name)}
                className="py-1 text-2xl font-medium text-white flex items-center"
              >
                <MdMovieFilter className="text-3xl" />
                <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-red-600 before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
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
      <div className="my-10 flex justify-between flex-nowrap">
        {[3, 6, 8, 9, 7, 0, 4].map((index) => (
          <button
            key={index}
            type="button"
            className="py-[8px] px-6 text-sm font-medium focus:outline-none rounded-full text-gray-100 bg-gray-800 "
          >
            Alternative
          </button>
        ))}
      </div>
      <div className="my-10 flex items-center justify-between flex-nowrap">
        <div className="w-1/2 flex items-center space-x-6">
          <p className="text-gray-500 font-semibold">Sort by:</p>
          <button
            type="button"
            className="py-[6px] px-8 text-sm font-semibold focus:outline-none rounded-full text-gray-100 bg-red-500 "
          >
            Latest
          </button>
          <button
            type="button"
            className="flex items-center justify-between py-[6px] px-5 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
          >
            <p className="text-sm font-semibold">Year</p>
            <BiChevronDown className="text-xl" />
          </button>
          <button
            type="button"
            className="flex items-center justify-between py-[6px] px-4 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
          >
            <p className="text-sm font-semibold"> A-Z</p>
            <BiChevronDown className="text-xl" />
          </button>
        </div>
        <div className="flex items-center">
          <IoStar className="text-yellow-500 text-base" />
          <div className=" h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div className="h-5  rounded" style={{ width: 208 }}></div>
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400"></span>
          5.6
        </div>
      </div>
      <section className="mt-4 grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {movies?.map((movie: Movie, index: number) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </section>
      <MovieCTA />
    </div>
  );
}
