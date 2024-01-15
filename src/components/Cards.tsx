import Image from "next/image";
import { Movie, TVseries, TrendingMedias } from "../../types";
import { AiFillHeart } from "react-icons/ai";
import { IoEye, IoStar } from "react-icons/io5";

interface MovieCardProp {
  movie: Movie;
  index: number;
}

export function MovieCard({ movie }: MovieCardProp) {
  const poster = `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`;
  return (
    <div className="rounded-lg w-full text-white flex flex-col justify-between">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src={poster} alt={movie?.title} fill className="w-full h-full" />
      </div>
      <div className="py-3 space-y-1">
        <p className="text-lg font-semibold truncate">{movie?.title}</p>

        <div className="flex items-center  text-gray-500 justify-between">
          <p className="text-sm font-medium">
            {movie?.release_date?.split("-")[0]}
          </p>
          <div className="flex items-center justify-between w-1/2">
            <AiFillHeart />
            <IoEye />
            <p className="inline-flex items-center font-medium text-sm text-yellow-500">
              <span className="mr-1 ">
                <IoStar className="text-base" />
              </span>
              {(movie?.popularity / 100).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface SeriesCardProps {
  series: TVseries;
  index: number;
}

export function SeriesCard({ series }: SeriesCardProps) {
  const poster = `https://image.tmdb.org/t/p/w500/${series?.poster_path}`;
  return (
    <div className="rounded-lg w-full text-white flex flex-col justify-between">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src={poster} alt={series?.name} fill className="w-full h-full" />
      </div>
      <div className="py-3 space-y-1">
        <p className="text-lg font-semibold truncate">{series?.name}</p>

        <div className="flex items-center  text-gray-500 justify-between">
          <p className="text-sm font-medium">
            {series?.first_air_date?.split("-")[0]}
          </p>
          <div className="flex items-center justify-between w-1/2">
            <AiFillHeart />
            <IoEye />
            <p className="inline-flex items-center font-medium text-sm text-yellow-500">
              <span className="mr-1 ">
                <IoStar className="text-base" />
              </span>
              {(series?.popularity / 100).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TrandingMediasCardProps {
  media: TrendingMedias;
  index: number;
}

export function TrandingMediasCard({ media }: TrandingMediasCardProps) {
  const poster = `https://image.tmdb.org/t/p/w500/${media?.poster_path}`;
  return (
    <div className="rounded-lg w-full text-white flex flex-col justify-between">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src={poster} alt={media?.title} fill className="w-full h-full" />
      </div>
      <div className="py-3 space-y-1">
        <p className="text-lg font-semibold truncate">
          {media?.title || media.original_title}
        </p>

        <div className="flex items-center  text-gray-500 justify-between">
          <p className="text-sm font-medium">
            {media?.release_date?.split("-")[0] ||
              media?.first_air_date?.split("-")[0]}
          </p>
          <div className="flex items-center justify-between w-1/2">
            <AiFillHeart />
            <IoEye />
            <p className="inline-flex items-center font-medium text-sm text-yellow-500">
              <span className="mr-1 ">
                <IoStar className="text-base" />
              </span>
              {(media?.popularity / 100).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
