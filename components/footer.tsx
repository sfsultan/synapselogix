import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { GITHUB_URL, TWITTER_URL } from "app-config";

const Footer = async () => {
  return (
    <footer className="p-4 mt-20 bg-zinc-100 md:p-8 lg:p-10 dark:bg-zinc-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <ul className="flex flex-wrap justify-center items-center mb-2 text-zinc-900 dark:text-zinc-200 space-x-5">
          <li className="">
            <a href={TWITTER_URL} target="_blank" className="mr-4 hover:text-red-500 md:mr-6 transition duration-150 ">
            <svg data-testid="geist-icon" height="16" strokeLinejoin="round"  viewBox="0 0 16 16" width="16" aria-label=""><path fillRule="evenodd" clipRule="evenodd" d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z" fill="currentColor"></path></svg>
            </a>
          </li>
          <li>
            <a href={GITHUB_URL} target="_blank" className="mr-4 hover:text-red-500 md:mr-6 transition duration-150 ">
            <svg aria-label="github" height="19" viewBox="0 0 14 14" width="19"><path d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z" fill="currentColor" fillRule="nonzero"></path></svg>
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            SynapseLogix
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
