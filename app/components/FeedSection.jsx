import React from "react";
import BlogCard from "../blog/components/BlogCard";

export default function FeedSection({ data }) {
  return (
    <section className="mt-4 lg:mt-8 px-8 lg:px-[94px] py-8 lg:py-12 pb-16 lg:pb-20">
      <h2 className="text-4xl font-bold text-center text-[#cca4a4] md:text-5xl gap-14 mb-8 lg:mb-16">
        Latest Blog Posts
      </h2>
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
