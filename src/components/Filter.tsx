"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";

export const Search = () => {
  const search = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    search ? search.get("q") : ""
  );
  const router = useRouter();

  useEffect(() => {
    const searchDebounce = setTimeout(() => {
      if (typeof searchQuery !== "string" || searchQuery === undefined) {
        router.push(`/movies`);
        return;
      }

      const encodedQuery = encodeURI(searchQuery);
      router.push(`/movies?q=${encodedQuery}`);
    }, 300);

    return () => clearTimeout(searchDebounce);
  }, [searchQuery, search, router]);

  return (
    <form className="sm:flex justify-between w-full rounded-full border border-gray-200">
      <div className="">
        <input
          type="text"
          value={searchQuery || ""}
          placeholder="Search here ..."
          className="w-96 bg-transparent p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="group rounded-full mt-4 flex w-full items-center justify-center bg-rose-600 p-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
      >
        <IoSearchSharp className="text-xl font-bold" />
      </button>
    </form>
  );
};
