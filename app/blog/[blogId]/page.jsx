"use client";
import BlogCard from "@/components/ui/BlogCard";
import { Button, Separator, TextArea } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

export default function page({ params }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [comment, setComment] = useState("");

  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const id = params.blogId;
  const allData = [
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "Summer is here, and it's time for some family fun in Thornhill and Vaughan! Whether your sprouts are little adventurers or curious teens, there's something for everyone. From playing in parks to exploring cool attractions, you won't run out of things to do. Get ready for a summer full of laughter, discovery, and memories. Let's dive into the top family activities you won't want to miss this season!",
      data: "Sample data content 1.",
      id: "001",
    },
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the second sample description.This is the first sample description.",
      data: "Sample data content 2.",
      id: "002",
    },
    {
      title: "Top Family Activities in Thornhill, Vaughan This Summer",
      image:
        "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      description:
        "This is the third sample description.This is the first sample description.",
      data: "Sample data content 3.",
      id: "003",
    },
  ];
  const data = allData[0];
  return (
    <div className="max-w-4xl px-4 pt-5 mx-auto md:py-5">
      <h1 className="text-5xl font-medium leading-tight">{data.title}</h1>
      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center space-x-4">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
            width={100}
            height={100}
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />
          <div>
            <h3 className="text-sm font-medium">Leroy Jenkins</h3>
            <time datetime="2021-02-18" className="text-sm dark:text-gray-600">
              Feb 18th 2021
            </time>
          </div>
        </div>
        <div className="flex space-x-4">
          <a
            rel="noopener noreferrer"
            href="#"
            title="Instagram"
            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
            </svg>
          </a>

          <a
            rel="noopener noreferrer"
            href="#"
            title="Twitter"
            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-6 h-6"
            >
              <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            title="Facebook"
            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-600 dark:text-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-6 h-6"
            >
              <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
            </svg>
          </a>
        </div>
      </div>
      <Image
        alt=""
        src={data?.image}
        width={1000}
        height={1000}
        className="w-full my-5 rounded-lg max-h-72"
      />
      <p>{data?.description}</p>

      <Separator orientation="horizontal" size="4" className="mt-5" />

      <div className="flex items-center justify-between py-3">
        <div className="flex gap-3">
          <span>25 views</span>
          <span>3 comments</span>
        </div>
        <span className="flex items-center gap-1">
          <span>5</span>
          <FaRegHeart className="text-xl text-red-500" />
        </span>
      </div>

      <div className="pt-14">
        <div className="flex justify-between">
          <span>Recent Posts</span>
          <Link href={`/blogs`}>See All</Link>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 py-5 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {allData ? (
            allData.map((item) => <BlogCard key={item.id} data={item} />)
          ) : (
            <p>No Recent blogs</p>
          )}
        </div>
      </div>

      <div className="py-10">
        <TextArea
          placeholder="Write a comment…"
          className="my-3"
          onChange={handleComment}
          value={comment}
        />
        <Button variant="solid" disabled={!comment.length}>
          Post
        </Button>
      </div>
      <div>
        <h1 className="text-xl">Comments</h1>
        <div className="flex flex-col w-full max-w-lg p-3 mt-3 divide-y divide-gray-300 rounded-md bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <Image
                  width={100}
                  height={100}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-600">2 days ago</span>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
