"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AiFillFire, AiOutlinePlus } from "react-icons/ai";
import { IoStar } from "react-icons/io5";
import { IoMdTrendingUp } from "react-icons/io";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import { TrandingMediasCard } from "./Cards";
import { GenreWithMovies, TrendingMedias } from "../../types";
import { BarIcon } from "./BarIcon";
import useMount from "../../hooks/mount-hook";

interface MoviesCarouselProp {
  medias: TrendingMedias[];
  generesWithMovies: GenreWithMovies[];
}

export const MoviesCarousel = ({
  medias,
  generesWithMovies,
}: MoviesCarouselProp) => {
  const filterOnlyMovies = medias?.filter(
    (movie) => movie?.media_type === "movie"
  );

  const mount = useMount();

  if (!mount) return null;

  return (
    <>
      <div className="sm:px-16 px-8 space-y-8">
        <div className="border-b-2 border-gray-500 py-4 text-gray-500">
          <ul className="block md:flex movies-center justify-between">
            <li className="text-2xl font-medium text-white flex items-center ">
              <IoMdTrendingUp className="text-4xl" />
              <p className="relative py-4 px-2 ml-2 before:content-[''] before:bg-primary before:p-1 before:absolute before:rounded-full before:left-1/2 before:-bottom-1 before:transform before:-translate-x-1/2 before:-translate-y-1/2">
                Trends Now
              </p>
            </li>
            <BarIcon
              icon={<AiFillFire className="text-2xl font-bold pl-2" />}
              title="Popuplar"
            />
            <BarIcon
              icon={<IoStar className="text-2xl font-bold pl-2" />}
              title="Premires"
            />
            <BarIcon
              icon={<AiOutlinePlus className="text-2xl font-bold pl-2" />}
              title="Recently Added"
            />
          </ul>
        </div>
        <div className="my-10 flex overflow-hidden justify-between flex-nowrap">
          {generesWithMovies?.slice(4, 12).map((genre, index) => (
            <button
              key={index}
              className={`mr-6 py-[8px] px-6 text-sm font-medium focus:outline-none rounded-full text-gray-100 ${
                !genre?.hasMovies ? "bg-gray-800" : "bg-primary"
              } `}
            >
              {genre?.genre_name}
            </button>
          ))}
        </div>
      </div>
      <div className="relative py-4 w-full overflow-auto px-0 [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <Carousel
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          additionalTransfrom={0}
          autoPlaySpeed={3000}
          centerMode={false}
          className="w-full"
          containerClass=""
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass="carousel-item "
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          arrows={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 5,
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 0,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {medias?.map((media) => (
            <TrandingMediasCard key={media.id} media={media} index={media.id} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      className=" relative carousel-button-group flex justify-end 
          items-center w-full"
    >
      <button className="absolute left-0 block p-3" onClick={() => previous()}>
        <MdOutlineArrowBackIos className="text-4xl text-white" />
      </button>
      <button className="absolute right-0 block p-3" onClick={() => next()}>
        <MdOutlineArrowForwardIos className="text-4xl text-white" />
      </button>
    </div>
  );
};
