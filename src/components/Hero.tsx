"use client";
import { IoStar } from "react-icons/io5";
import { FaPlay, FaPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";

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
      <Navbar />
      <div className="relative h-full overflow-hidden">
        <div>
          <div className="relative p-8 md:p-12 lg:px-32 lg:py-12 ">
            <div className="space-y-6 font-semibold ">
              <p>Duration: 2h 08m</p>
              <div className="flex items-center justify-between">
                <p className="inline-flex items-center text-sm ">
                  <span className="">
                    <IoStar className="text-xl text-yellow-500" />
                  </span>
                  <span className="px-2 text-xl text-white">
                    {(830 / 100).toFixed(1)}
                  </span>
                  Season <span className="px-1 text-primary">8</span> - Episode
                  <span className="px-1 text-primary">14</span> - Still gotta
                  means something
                </p>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                The walking dead
              </h2>

              <p className="max-w-xl py-3 font-medium text-white leading-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore officia corporis quasi doloribus iure architecto quae
                voluptatum
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
                  <p className="font-semibold text-sm uppercase ml-3">
                    Add list
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={` h-1 w-10 rounded ${
              index === activeSlide ? "bg-primary" : "bg-red-900"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
