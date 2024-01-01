import AnimeCard, { Movie } from "@/components/AnimeCard";
import { data } from "./_data";
import LoadMore from "@/components/LoadMore";

async function Home() {
  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIES_API_KEY}/lists`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM0ZDBkYjQzZDA4ODBhYjZiMmFkMTQ1MDkzOTYxMSIsInN1YiI6IjY1OTE4ZjFmMDI4ZjE0Nzc0NWM1OTlmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bNNpKXdzPADjllc60UY2wMK-TtAP1M0f3ovrjQaVbfg`,
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const movies = await getMovies();
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {movies?.results.map((item: Movie, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
