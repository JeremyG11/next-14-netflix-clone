import Image from "next/image";
import { Movie } from "../../types";
import { AiFillHeart } from "react-icons/ai";
import { IoEye, IoStar } from "react-icons/io5";

interface MovieCardProp {
  movie: Movie;
  index: number;
}

function MovieCard({ movie }: MovieCardProp) {
  const poster = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="rounded-lg w-full text-white flex flex-col justify-between">
      <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src={poster} alt={movie.title} fill className="w-full h-full" />
      </div>
      <div className="py-3 space-y-1">
        <p className="text-lg font-semibold truncate">{movie.title}</p>

        <div className="flex items-center  text-gray-500 justify-between">
          <p className="text-sm font-medium">
            {movie.release_date.split("-")[0]}
          </p>
          <div className="flex items-center justify-between w-1/2">
            <AiFillHeart />
            <IoEye />
            <p className="inline-flex items-center font-medium text-sm text-yellow-500">
              <span className="mr-1 ">
                <IoStar className="text-base" />
              </span>
              {(movie.popularity / 100).toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
