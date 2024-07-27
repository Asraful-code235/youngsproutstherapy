import Pagination from "../../../components/shared/pagination";

import {
  getPaginatedPosts,
  searchPosts as getSearchedPosts,
} from "../../../lib/sanity/client";

import BuildQueryAndFetch from "./BuildQueryAndFetch";

export default async function AllBlogs({ searchParams }) {
  const page = searchParams.page;
  const pageIndex = parseInt(page, 10) || 1;

  const POSTS_PER_PAGE = 9;

  const params = {
    pageIndex: (pageIndex - 1) * POSTS_PER_PAGE,
    limit: pageIndex * POSTS_PER_PAGE,
  };

  const posts = await getPaginatedPosts(params);
  const isFirstPage = pageIndex < 2;
  const isLastPage = posts.length < POSTS_PER_PAGE;
  return (
    <>
      {posts && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">End of the result!</span>
        </div>
      )}
      <BuildQueryAndFetch posts={posts} />
      <Pagination
        pageIndex={pageIndex}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
      />
    </>
  );
}
