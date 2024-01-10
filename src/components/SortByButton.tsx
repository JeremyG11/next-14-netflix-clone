"use client";
import { BiChevronDown } from "react-icons/bi";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortByButtons() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sortOption, setSortOption] = useState({
    name: "",
    value: "",
  });

  const handleSortBy = (name: string, value: string) => {
    setSortOption({ name, value });
    return router.replace(`${pathname}?${createQueryString()}`);
  };

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set(sortOption.name, sortOption.value);

    return params.toString();
  }, [sortOption, searchParams]);

  const sortOptionRef = useRef(sortOption);

  useEffect(() => {
    if (
      sortOptionRef.current.name !== sortOption.name ||
      sortOptionRef.current.value !== sortOption.value
    ) {
      router.replace(`${pathname}?${createQueryString()}`);
      sortOptionRef.current = sortOption;
    }
  }, [sortOption, createQueryString, pathname, router]);

  return (
    <div className="space-y-4  overflow-x-auto lg:flex items-center md:justify w-full">
      <p className="text-xl pr-6 pt-3 font-bold text-gray-100 md:text-sm md:font-semibold ">
        Sort by:
      </p>

      <div className=" flex spce-y-2 items-center justify-between md:space-x-6 md:space-y-0 md:justify-evenly">
        <button
          onClick={() => handleSortBy("sort_by", "popularity.desc")}
          className="py-[6px] px-4 md:px-8 text-sm font-medium focus:outline-none rounded-full text-gray-100 bg-primary "
        >
          Popular
        </button>
        <button
          onClick={() => handleSortBy("primary_release_year", "2010")}
          className="flex items-center justify-between py-[6px] px-5 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
        >
          <p className="text-sm font-semibold">Year</p>
          <BiChevronDown className="text-xl" />
        </button>
        <button
          onClick={() => handleSortBy("sort_by", "original_title.asc")}
          className="flex items-center justify-between py-[6px] px-4 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
        >
          <p className="text-sm font-semibold"> A-Z</p>
          <BiChevronDown className="text-xl" />
        </button>
      </div>
    </div>
  );
}
