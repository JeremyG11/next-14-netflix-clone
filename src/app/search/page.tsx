import Navbar from "@/components/Navbar";
import { IoSearchSharp } from "react-icons/io5";

export default function Search() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)",
      }}
    >
      <div className="absolute z-0 inset-0 bg-gradient-to-r from-black/95 via-black/85 to-red-950/75"></div>

      <div className="z-20 relative h-full">
        <Navbar />

        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <IoSearchSharp className="text-xl font-bold" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
