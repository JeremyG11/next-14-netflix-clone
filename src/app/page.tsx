import Movies from "@/components/Movies";
import LoadMore from "@/components/LoadMore";
import { moviesDiscovery } from "@/libs/api/getMovies";
import { MoviesCarousel } from "@/components/MoviesCarousel";
import Hero from "@/components/Hero";

async function Home() {
  const query = "select";
  const movies = await moviesDiscovery();
  return (
    <main className="w-full flex flex-col pb-16  gap-y-10">
      <Hero />
      <MoviesCarousel movies={movies?.results} />
      <Movies movies={movies?.results} />
      <LoadMore />
    </main>
  );
}

export default Home;
