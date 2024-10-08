"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";

export const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState<string | null>(
    searchParams ? searchParams.get("q") : ""
  );
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    const searchDebounce = setTimeout(() => {
      if (
        typeof searchQuery === "string" &&
        searchQuery !== "" &&
        searchQuery !== undefined
      ) {
        params.set("q", searchQuery);
        router.push(`${pathname}?${params.toString()}`);
      } else {
        params.delete("q");
        router.push(`${pathname}?${params.toString()}`);
      }
    }, 300);

    return () => clearTimeout(searchDebounce);
  }, [searchQuery, searchParams, router]);

  return (
    <form className="flex justify-between w-full rounded-full border border-gray-500">
      <div className="">
        <input
          type="text"
          value={searchQuery || ""}
          autoFocus
          placeholder={`${placeholder}`}
          className=" bg-transparent px-6 py-2 text-gray-500 shadow-sm transition placeholder:text-gray-600 placeholder:tracking-wide focus:border-white focus:outline-none md:w-96"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="group rounded-full ml-2 flex items-center justify-center bg-primary py-2 px-2.5 text-white transition focus:outline-none sm:mt-0 sm:w-auto"
      >
        <IoSearchSharp className="text-xl font-bold" />
      </button>
    </form>
  );
};
