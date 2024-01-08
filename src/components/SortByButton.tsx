"use client";
import React, { useCallback } from "react";
import { BiChevronDown } from "react-icons/bi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SortByButtons() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <div className="w-full flex items-center space-x-6">
      <p className="text-gray-500 font-semibold">Sort by:</p>
      <button
        onClick={() => {
          router.push(
            pathname + "?q" + createQueryString("sort_by", "popularity.asc")
          );
        }}
        className="py-[6px] px-8 text-sm font-semibold focus:outline-none rounded-full text-gray-100 bg-red-500 "
      >
        Latest
      </button>
      <button
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("primary_release_year", "2010")
          );
        }}
        className="flex items-center justify-between py-[6px] px-5 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
      >
        <p className="text-sm font-semibold">Year</p>
        <BiChevronDown className="text-xl" />
      </button>
      <button
        onClick={() => {
          router.push(
            pathname + "?" + createQueryString("sort_by", "popularity.asc")
          );
        }}
        className="flex items-center justify-between py-[6px] px-4 w-24 focus:outline-none rounded-full text-gray-100 bg-gray-900 "
      >
        <p className="text-sm font-semibold"> A-Z</p>
        <BiChevronDown className="text-xl" />
      </button>
    </div>
  );
}
