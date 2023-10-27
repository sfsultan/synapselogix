// build-search.js
import { allDocs, Doc } from "contentlayer/generated";
import algoliasearch from "algoliasearch";

async function getAllBlogPosts() {
  return allDocs;   
}

function transformPostsToSearchObjects(posts:any): any {
  const transformed = posts.map((post:any) => {
    return {
      objectID: post.title,
      title: post.title,
      excerpt: post.description,
      slug: post.slug,
      date: post.age,
      readingTime: post.readingTime,
    };
  });
}

(async function () {

  try {
    const posts = await getAllBlogPosts();
    const transformed = transformPostsToSearchObjects(posts);

    // initialize the client with your environment variables
    const client = algoliasearch(
       process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID!,
       process.env.ALGOLIA_ADMIN_KEY!,
     );

     // initialize the index with your index name
     const index = client.initIndex("my_awesome_content");

     // save the objects!
     const algoliaResponse = await index.saveObjects(transformed);

     // check the output of the response in the console
     console.log(
       `🎉 Sucessfully added ${algoliaResponse.objectIDs.length} records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
         "\n",
       )}`,
     );
  } catch (error) {
    console.log(error);
  }
})();