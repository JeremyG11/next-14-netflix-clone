"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pages: number;
}

export default function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(pages / 10); // Assuming 10 items per page

  const handlePageChange = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // const getPaginationGroup = () => {
  //   let start = Math.floor((currentPage - 1) / 5) * 5;
  //   return new Array(5).fill().map((_, idx) => start + idx + 1);
  // };

  return (
    <div className=" mt-5">
      <ol className="flex justify-center gap-1 space-x-2 text-xs font-medium">
        {/* {currentPage !== 1 && (
          <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#" onClick={() => handleClick(currentPage - 1)}>
              Prev
            </a>
          </li>
        )} */}
        {/* {getPaginationGroup().map((item, index) => (
          <li
            key={index}
            className="w-10 h-10 border rounded-full flex items-center justify-center"
          >
            {item < totalPages ? (
              <a href="#" onClick={() => handleClick(item)}>
                {item}
              </a>
            ) : (
              "..."
            )}
          </li>
        ))}
        {currentPage !== totalPages && (
          <li className="w-10 h-10 border rounded-full flex items-center justify-center">
            <a href="#" onClick={() => handleClick(currentPage + 1)}>
              Next
            </a>
          </li>
        )} */}
        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <a href="#">
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

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <button onClick={(event) => handlePageChange(event, 1)}>1</button>
        </li>

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <button onClick={(e) => handlePageChange(e, 2)}>2</button>
        </li>

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <button onClick={(e) => handlePageChange(e, 3)}>3</button>
        </li>

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <button onClick={(e) => handlePageChange(e, 4)}>4</button>
        </li>

        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
          <a href="#">
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
