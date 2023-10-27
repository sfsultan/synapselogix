import Link from "next/link";
import * as React from "react";
import Logo from "./logo";
import SearchButton from "./search";
import ButtonTheme from "./button-theme";

const Navbar = () => {

  return (
    <header >
      <nav className="border-b px-4 lg:px-6 py-5 align-middle bg-zinc-100 dark:bg-zinc-800 mb-20">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <SearchButton />
          <div className="flex items-center lg:order-2 space-x-5">
            <Link
              href="/about"
              className="hover:bg-zinc-500 hover:text-zinc-100 hover:border-zinc-800 px-4 py-1 rounded-md transition-all duration-150 font-bold"
            >
              About
            </Link>
            <div>
              <ButtonTheme />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};


export default Navbar;
