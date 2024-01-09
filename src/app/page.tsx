import { Genre } from "../../types";
import Hero from "@/components/Hero";
import Movies from "@/components/Movies";
import { moviesDiscovery } from "@/libs/api/getMovies";
import { MoviesCarousel } from "@/components/MoviesCarousel";
import { getMovieGenres } from "@/libs/api/getSeries";

async function Home() {
  const movies = await moviesDiscovery();
  const { genres } = await getMovieGenres();

  const genresWithMovies = genres?.map((genre: Genre) => {
    const hasMovies = movies?.results.some((movie) =>
      movie.genre_ids.includes(genre.id)
    );
    return {
      genre_name: genre.name,
      id: genre.id,
      hasMovies,
    };
  });
  return (
    <main className="w-full flex flex-col pb-16  gap-y-10">
      <Hero />
      <MoviesCarousel
        movies={movies?.results}
        generesWithMovies={genresWithMovies}
      />
      <Movies movies={movies?.results} generesWithMovies={genresWithMovies} />
    </main>
  );
}

export default Home;
