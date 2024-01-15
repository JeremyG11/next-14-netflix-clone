import { Genre } from "../../types";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import {
  getTrendingMedias,
  movieDetails,
  moviesDiscovery,
} from "@/libs/api/getMovies";
import { MoviesCarousel } from "@/components/MoviesCarousel";
import { getMovieGenres } from "@/libs/api/getSeries";

async function Home() {
  const movies = await moviesDiscovery();
  const medias = await getTrendingMedias();
  const { genres } = await getMovieGenres();

  const genresWithMovies = genres?.map((genre: Genre) => {
    const hasMovies = medias?.results?.some((media) =>
      media.genre_ids?.includes(genre.id)
    );
    return {
      genre_name: genre.name,
      id: genre.id,
      hasMovies,
    };
  });

  const randomIndex = Math.floor(Math.random() * 10) + 1;
  const seletedSeries =
    (await movieDetails(movies?.results[randomIndex]?.id)) || 0;

  return (
    <main className="w-full flex flex-col pb-16  gap-y-10">
      <Hero />
      <MoviesCarousel
        medias={medias?.results}
        generesWithMovies={genresWithMovies}
      />
      <Movies
        movies={movies?.results}
        generesWithMovies={genresWithMovies}
        movieDetials={seletedSeries}
        randomIndex={randomIndex}
      />
    </main>
  );
}

export default Home;
