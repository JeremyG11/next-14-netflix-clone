"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BiChevronDown } from "react-icons/bi";
import { IoNotifications, IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const isActive = (pathname: string) => currentPath === pathname;

  return (
    <header className="bg-transparent border-b border-gray-700">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10">
        <div className="py-6 flex items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-14">
            <Link href="/" className="block xl:pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="276.742"
                viewBox="0 0 1024 276.742"
                className="h-5 w-auto "
              >
                <path
                  d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"
                  fill="#d81f26"
                />
              </svg>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav className="hidden md:block">
              <ul className="flex items-center gap-6 space-x-10 text-sm">
                {[
                  { path: "/", title: "Home" },
                  { path: "/movies", title: "Movies" },
                  { path: "/series", title: "Series" },
                  {
                    path: "/mylist",
                    title: "My list",
                    icons: <BiChevronDown className="text-xl mx-1" />,
                  },
                ].map((link, index) => (
                  <li key={index} className="px-2">
                    <Link
                      href={link.path}
                      className={`relative text-gray-300 flex transition hover:text-gray-500/75 ${
                        isActive(link.path)
                          ? "text-white before:content-[''] before:bg-primary before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-5 before:transform before:-translate-x-1/2 before:-translate-y-1/2"
                          : ""
                      }`}
                    >
                      {link.title}
                      {link?.icons}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex items-center space-x-12 sm:gap-4">
                <Link href="/movies">
                  <IoSearchSharp className="text-xl font-bold" />
                </Link>

                <div className="hidden sm:flex">
                  <div className="hidden sm:flex">
                    <IoNotifications />
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center bg-primary rounded-full w-8 h-8 ">
                  <div className="hidden sm:flex">G </div>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
