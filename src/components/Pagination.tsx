"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageChange = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <ol className="flex justify-center gap-1 text-xs font-medium">
        <li>
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <button
            onClick={(event) => handlePageChange(event, 1)}
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
          >
            1
          </button>
        </li>

        <li>
          <button
            onClick={(e) => handlePageChange(e, 2)}
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
          >
            2
          </button>
        </li>

        <li>
          <button
            onClick={(e) => handlePageChange(e, 3)}
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
          >
            3
          </button>
        </li>

        <li>
          <button
            onClick={(e) => handlePageChange(e, 4)}
            className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
          >
            4
          </button>
        </li>

        <li>
          <a
            href="#"
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
          >
            <span className="sr-only">Next Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ol>
    </div>
  );
}
