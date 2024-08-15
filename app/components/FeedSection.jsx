import React from "react";
import BlogCard from "../blog/components/BlogCard";

export default function FeedSection({ data }) {
  return (
    <section className="mt-8 px-8 lg:px-[94px] py-12">
      <h2 className="text-2xl font-semibold mb-4">Latest Blog Posts</h2>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((post) => (
            <div key={post._id} className="">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
