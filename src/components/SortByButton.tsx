"use client";
import { BiChevronDown } from "react-icons/bi";
import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortByButtons() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sortOption, setSortOption] = useState({
    name: "",
    value: "",
  });

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams();
    params.set(sortOption.name, sortOption.value);

    return params.toString();
  }, [sortOption]);

  useEffect(() => {
    router.push(`${pathname}?${createQueryString()}`);
  }, [sortOption, searchParams, createQueryString, pathname, router]);

  return (
    <div className="space-y-4  overflow-x-auto lg:flex items-center md:justify w-full">
      <p className="text-xl pr-6 pt-3 font-bold text-gray-100 md:text-sm md:font-semibold ">
        Sort by:
      </p>

      <div className=" flex spce-y-2 items-center justify-between md:space-x-6 md:space-y-0 md:justify-evenly">
        <button
          onClick={() => {
            setSortOption({ name: "sort_by", value: "popularity.desc" });
            router.push(`${pathname}?${createQueryString()}`);
          }}
          className="py-[6px] px-4 md:px-8 text-sm font-medium focus:outline-none rounded-full text-gray-100 bg-primary "
        >
          Popular
        </button>
        <button
          onClick={() => {
            setSortOption({ name: "primary_release_year", value: "2010" });
            router.push(`${pathname}?${createQueryString()}`);
          }}
          className="flex items-center justify-between py-[6px] px-5 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
        >
          <p className="text-sm font-semibold">Year</p>
          <BiChevronDown className="text-xl" />
        </button>
        <button
          onClick={() => {
            setSortOption({ name: "sort_by", value: "popularity.asc" });
            router.push(`${pathname}?${createQueryString()}`);
          }}
          className="flex items-center justify-between py-[6px] px-4 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
        >
          <p className="text-sm font-semibold"> A-Z</p>
          <BiChevronDown className="text-xl" />
        </button>
      </div>
    </div>
  );
}
