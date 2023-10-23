import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = async () => {
  return (
      <section className="mb-20">
        <div className=" flex flex-col py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 items-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-zinc-800 md:text-5xl lg:text-6xl dark:text-zinc-200">
            Welcome ... ✨
          </h1>
          <p className="mb-3 text-lg font-normal text-zinc-500 lg:text-xl sm:px-16 xl:px-48 dark:text-zinc-400">
            Here I write about my adventures in software engineering with
            helpful tips and articles that might help the fellow travelers.
          </p>
          <a href="/about" className="text-zinc-200 bg-gradient-to-br from-zinc-500 to-zinc-800 hover:bg-gradient-to-bl hover:scale-110 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-md px-5 py-3 mt-4 text-center mr-2 mb-2 transition-all duration-500 ease-in-out ">Who is behind this?</a>
        </div>
      </section>
  );
};

export default Hero;
