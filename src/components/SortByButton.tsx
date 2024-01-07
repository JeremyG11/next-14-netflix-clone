"use client";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

export default function SortByButtons() {
  return (
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
  );
}
