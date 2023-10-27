import { connectStateResults } from "react-instantsearch-dom";
import { APP_URL } from "app-config";

function HitsCustom({ searchState, searchResults }: any) {
  const validQuery = searchState.query?.length >= 3;

  return (
    <>
      {searchResults?.hits.length === 0 && validQuery && (
        <p className="text-sm text-zinc-800">
          Aw snap! No search results were found.
        </p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol className="max-h=[300px]">
          {searchResults.hits.map((hit: any) => (
            <li key={hit.objectID}>
              <a
                className="hover:bg-red-100 w-full flex py-2 px-5 rounded-md bg-zinc-100 text-sm font-bold dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-red-800 transition duration:200"
                href={APP_URL + "article/" + hit.slug}
              >
                {hit.title}
              </a>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}

export default connectStateResults(HitsCustom);
