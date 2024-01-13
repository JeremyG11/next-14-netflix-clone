"use client";
import React from "react";
import { HiChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pages: number;
}

export default function Pagination({ pages }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = pages;

  const handlePageChange = (event: React.MouseEvent, page: number | string) => {
    event.preventDefault();
    let newPageNumber: number;
    if (page === "Prev") {
      newPageNumber = Math.max(1, currentPage - 1);
    } else if (page === "Next") {
      newPageNumber = Math.min(totalPages, currentPage + 1);
    } else {
      newPageNumber = Number(page);
    }
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const getPaginationGroup = () => {
    let start = Math.max(1, currentPage - 4);
    if (currentPage > totalPages - 5) {
      start = totalPages - 5;
    }
    return Array.from({ length: 6 }, (_, idx) => start + idx);
  };

  return (
    <div className=" mt-8">
      <ol className="flex justify-center gap-1 space-x-2 text-xs font-medium">
        <>
          <li>
            <button
              onClick={(event) => handlePageChange(event, "Next")}
              className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-primary hover:border-none"
              disabled={currentPage === 1}
            >
              <HiOutlineChevronLeft />
            </button>
          </li>
          {getPaginationGroup().map((item, index) => (
            <li key={index}>
              {item <= totalPages ? (
                <button
                  onClick={(event) => handlePageChange(event, item)}
                  className={`w-8 h-8 border rounded-full flex items-center justify-center hover:bg-primary hover:border-none ${
                    item === currentPage
                      ? "bg-primary border-none text-white"
                      : ""
                  }}`}
                >
                  {item}
                </button>
              ) : null}
            </li>
          ))}
          {currentPage < totalPages - 5 && (
            <>
              <li className="flex items-center justify-center space-x-1">
                <span className="p-px bg-white rounded-full"></span>
                <span className="p-px bg-white rounded-full"></span>
                <span className="p-px bg-white rounded-full"></span>
              </li>

              <li>
                <button
                  onClick={(event) => handlePageChange(event, totalPages - 1)}
                  className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-primary hover:border-none"
                >
                  {totalPages - 1}
                </button>
              </li>
              <li>
                <button
                  onClick={(event) => handlePageChange(event, totalPages)}
                  className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-primary hover:border-none"
                >
                  {totalPages}
                </button>
              </li>
            </>
          )}
        </>
        <li>
          <button
            onClick={(event) => handlePageChange(event, "Next")}
            className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-primary hover:border-none"
            disabled={currentPage === totalPages}
          >
            <HiChevronRight />
          </button>
        </li>
      </ol>
    </div>
  );
}
