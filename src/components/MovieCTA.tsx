import React from "react";
import { IoEye, IoStar } from "react-icons/io5";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FaPlay, FaPlus } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

export default function MovieCTA() {
  return (
    <section className="mt-4 rounded-xl h-screen overflow-hidden bg-[url(https://i.pinimg.com/564x/66/c1/fc/66c1fc0f4662cd9837828c7a5cfdf0a4.jpg)] bg-cover bg-top bg-no-repeat">
      <div className="relative bg-black/60 h-full p-8 md:p-12 lg:p-24 ">
        <div className="space-y-6 font-semibold ">
          <span className="inline-flex items-center justify-center rounded-md bg-yellow-500 text-white p-1">
            <p className="whitespace-nowrap text-sm">13</p>
            <HiOutlinePlusSm />
          </span>
          <p>Duration: 2h 08m</p>
          <div className="flex items-center justify-between">
            <p className="inline-flex items-center text-sm text-gray-400 ">
              <span className="">
                <IoStar className="text-xl text-yellow-500" />
              </span>
              <span className="px-2 text-xl text-white">
                {(830 / 100).toFixed(1)}
              </span>
              Action | Adventure | Sci-Fi
            </p>
          </div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Jusrassic world: Fallen Kingdom
          </h2>

          <p className="max-w-xl py-3 font-medium text-white leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
          </p>

          <div className="mt-8 space-x-8 flex items-center">
            <button
              type="button"
              className="flex items-center justify-between py-3 px-6 shadow-2xl shadow-primary focus:outline-none rounded-full text-gray-100 bg-primary"
            >
              <FaPlay className="" />
              <p className="font-semibold text-sm uppercase ml-3">Watch</p>
            </button>
            <button
              type="button"
              className="flex items-center justify-between py-3 px-6  focus:outline-none rounded-full text-gray-100 bg-black"
            >
              <FaPlus className="" />
              <p className="font-semibold text-sm uppercase ml-3">Add list</p>
            </button>
          </div>

          <div className="absolute bottom-4 right-4 flex mt-8 items-center justify-end">
            <ul className="flex items-center space-x-6">
              <li className="px-3 uppercase text-sm">General Informations</li>
              <li className="px-3 uppercase text-sm">Watch tailer</li>
              <li className="px-3 uppercase text-sm">Similar</li>
              <li className="px-3 uppercase text-sm">Reviews & details</li>
              <li>
                <AiFillHeart className="text-3xl" />
              </li>
              <li>
                <IoEye className="text-3xl" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
