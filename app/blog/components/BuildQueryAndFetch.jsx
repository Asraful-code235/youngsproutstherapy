"use client";
import BlogCard from "./BlogCard";

import { searchPosts as getSearchedPosts } from "../../../lib/sanity/client";
import { useSearchTerm } from "@/components/hooks/useSearchTerm";
import { useState, useEffect } from "react";

export default function BuildQueryAndFetch({ posts }) {
  const { searchTerm } = useSearchTerm();
  const [searchedPosts, setSearchedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const results = await getSearchedPosts(searchTerm);
        setSearchedPosts(results);
      } else {
        setSearchedPosts([]);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <>
      <div className="grid justify-center grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full h-full">
        {searchedPosts.length > 0
          ? searchedPosts.map((post, index) => (
              <BlogCard key={index} post={post} aspect="square" />
            ))
          : posts.map((post, index) => (
              <BlogCard key={index} post={post} aspect="square" />
            ))}
      </div>
    </>
  );
}
