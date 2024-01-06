"use client";
import React, { useState, useEffect } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { HiOutlinePlusSm } from "react-icons/hi";
import { IoStar } from "react-icons/io5";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const images = [
    "https://i.pinimg.com/564x/05/dd/45/05dd450a1f34dbd870b1953da5e63b38.jpg",
    "https://i.pinimg.com/564x/05/dd/45/05dd450a1f34dbd870b1953da5e63b38.jpg",
    "https://i.pinimg.com/564x/05/dd/45/05dd450a1f34dbd870b1953da5e63b38.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % images?.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="h-screen overflow-hidden bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: `radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%), url(${images[activeSlide]})`,
      }}
    >
      <div className="relative h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            // className={`duration-700 ease-in-out ${
            //   index === activeSlide ? "" : "hidden"
            // }`}
            // style={{ backgroundImage: `url(${image})` }}
          >
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Inventore officia corporis quasi doloribus iure architecto
                  quae voluptatum
                </p>

                <div className="mt-8 space-x-8 flex items-center">
                  <button
                    type="button"
                    className="flex items-center justify-between py-3 px-6 shadow-2xl shadow-red-600 focus:outline-none rounded-full text-gray-100 bg-red-600"
                  >
                    <FaPlay className="" />
                    <p className="font-semibold text-sm uppercase ml-3">
                      Watch
                    </p>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-between py-3 px-6  focus:outline-none rounded-full text-gray-100 bg-black"
                  >
                    <FaPlus className="" />
                    <p className="font-semibold text-sm uppercase ml-3">
                      Add list
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`bg-red-400 h-1 w-10 rounded ${
              index === activeSlide
                ? 'aria-current="true"'
                : 'aria-current="false"'
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
