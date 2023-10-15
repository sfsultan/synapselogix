import { redirect } from "next/navigation";

const Banner = async () => {

  return (
    <div id="banner" tabIndex={-1} className="flex z-50 gap-8 justify-center items-start py-3 px-4 w-full bg-gray-50 border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800">
    <p className="text-sm font-light text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline" href="#">limited-time sale</a> for Designer Search + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p>
</div>
   );
}

export default Banner;
