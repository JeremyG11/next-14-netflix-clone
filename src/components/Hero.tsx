import Image from "next/image";
import Navbar from "./Navbar";

export default async function Hero() {
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
  console.log(movies);
  return (
    <div
      className="h-screen bg-bottom w-full bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://images.alphacoders.com/131/thumbbig-1315896.webp)`,
      }}
    >
      {/* Your content goes here */}

      <Navbar />

      <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
        <div className="flex-1 flex flex-col gap-10">
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
            Explore The <span className="red-gradient">Diverse Realms</span> of
            Anime Magic
          </h1>
        </div>
        <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
          <Image src="/anime.png" alt="anime" fill className="object-contain" />
        </div>
      </header>
    </div>
  );
}
