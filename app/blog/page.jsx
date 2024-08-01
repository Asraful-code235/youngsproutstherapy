import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

import Loading from "../../components/shared/loading";

import AllBlogs from "./components/AllBlogs";
import SearchPosts from "./components/SearchPosts";
import { getLatestPost } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { format, parseISO } from "date-fns";

export const metadata = {
  title: "Young Sprouts | Child, Teen & Family Therapy Blog in Vaugha",
  description:
    "Explore our blog for resources on child and teen therapy, family counselling, and parenting strategies. Find tips on topics like anxiety and behaviour in kids.",

  openGraph: {
    type: "website",
    url: "https://www.youngsproutstherapy.com/blog",
    title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
    description:
      "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    images: "/logo.png",
  },

  alternates: {
    canonical: "https://www.youngsproutstherapy.com/blog",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
};

export default async function BlogPage({ searchParams }) {
  const post = await getLatestPost();

  const imageProps =
    post && post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps =
    post && post?.author?.image ? urlForImage(post.author.image) : null;

  if (!post) {
    return (
      <strong className="text-center grid place-content-center">
        No posts found
      </strong>
    );
  }

  return (
    <div>
      <div className="md:h-56 min-h-48 bg-[#ebb1b1] flex items-center text-white font-serif">
        <div className="mx-auto max-w-7xl text-center py-8">
          <h1 className=" text-5xl max-lg:text-4xl">Blog</h1>
          <h3 className="mt-3 font-medium text-base lg:text-lg">
            Welcome to our blog: your gateway to insightful content on child,
            teen, and family well-being. Discover valuable strategies for
            improving family communication, fostering positive relationships,
            and enhancing child self-esteem. Explore our articles packed with
            practical tips and research-backed advice. Empower your parenting
            journey with our knowledge base that&apos;s continually updated to
            reflect the latest findings in therapy and child development.
          </h3>
        </div>
      </div>
      <div className="px-3 py-10 mx-auto max-w-7xl md:px-0 ">
        <div className="block group max-w-sm gap-3 w-full mx-auto sm:max-w-full lg:grid lg:grid-cols-12 dark:bg-gray-50 bg-slate-50">
          <Link
            className={cn(
              "relative block w-full overflow-hidden lg:col-span-7 rounded"
            )}
            href={`/blog/${post?.pathPrefix ? `${post?.pathPrefix}/` : ""}${
              post?.slug?.current
            }`}
          >
            {imageProps ? (
              <Image
                src={imageProps.src}
                {...(post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.mainImage.blurDataURL,
                })}
                alt={post.mainImage.alt || "Thumbnail"}
                priority={post?.preloadImage ? true : false}
                className=" transition-all group-hover:scale-[1.2] group-hover:rotate-[6deg] group-hover:transition-all group-hover:duration-500 object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
                width={800}
                height={600}
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
          <div
            className="flex flex-col justify-center gap-3 p-6 space-y-2 text-start lg:col-span-5"
            bis_skin_checked="1"
          >
            <h3 className="text-2xl font-semibold  sm:text-4xl text-left">
              {post.title}
            </h3>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {post?.author?.image && (
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="20px"
                    />
                  )}
                </div>
                <span className="truncate text-sm">{post?.author?.name}</span>
              </div>
              <time
                className="truncate text-xs"
                dateTime={post?.publishedAt || post._createdAt}
              >
                {format(
                  parseISO(post?.publishedAt || post._createdAt),
                  "MMMM dd, yyyy"
                )}
              </time>
              <span className="truncate text-sm">
                {post?.estReadingTime} min read
              </span>
            </div>
            {post.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.excerpt}</span>
              </p>
            )}
            <Link
              href={`/blog/${
                post?.pathPrefix ? `${post?.pathPrefix}/` : ""
              }${post?.slug?.current}`}
              className="text-blue-400"
            >
              Read More {`>>`}
            </Link>
          </div>
        </div>

        <div className="py-10">
          <div className="flex justify-between px-3">
            <div>
              <h1 className="text-2xl font-medium">All Post</h1>
            </div>
            <SearchPosts />
          </div>
          <Suspense key={searchParams.page || "1"} fallback={<Loading />}>
            <AllBlogs searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
