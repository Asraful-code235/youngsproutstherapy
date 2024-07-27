import Image from "next/image";
import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/outline";

import { parseISO, format } from "date-fns";
import { cn } from "../../../lib/utils";
import { urlForImage } from "../../../lib/sanity/image";
import CategoryLabel from "./CategoryLabel";

export default function BlogCard({
  post,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
  aspect = "square",
}) {
  const imageProps =
    post && post?.mainImage ? urlForImage(post.mainImage) : null;
  const AuthorimageProps =
    post && post?.author?.image ? urlForImage(post.author.image) : null;

  return (
    <div
      className={cn(
        "group cursor-pointer",
        minimal && "grid gap-10 md:grid-cols-2 transition-all duration-500"
      )}
    >
      <div
        className={cn(
          " overflow-hidden rounded-md bg-gray-100 transition-all  dark:bg-gray-800"
        )}
      >
        <Link
          className={cn("relative block aspect-[4/3]")}
          href={`/blog/${pathPrefix ? `${pathPrefix}/` : ""}${
            post.slug.current
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
              priority={preloadImage ? true : false}
              className="object-cover transition-all group-hover:scale-[1.2] group-hover:rotate-[6deg] group-hover:transition-all group-hover:duration-500"
              fill
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          ) : (
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
              <PhotoIcon />
            </span>
          )}
        </Link>
      </div>

      <div className={cn(minimal && "flex items-center")}>
        <div>
          <CategoryLabel categories={post.categories} nomargin={minimal} />
          <h2
            className={cn(
              fontSize === "large"
                ? "text-2xl"
                : minimal
                  ? "text-3xl"
                  : "text-lg",
              fontWeight === "normal"
                ? "line-clamp-2 font-medium  tracking-normal text-black"
                : "font-semibold leading-snug tracking-tight",
              "mt-2    dark:text-white"
            )}
          >
            <Link
              href={`/blog/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}
            >
              <span
                className="bg-gradient-to-r from-[#ebb1b1] to-[#f0e4e4] bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900"
              >
                {post.title}
              </span>
            </Link>
          </h2>

          <div className="hidden">
            {post.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  href={`/post/${
                    pathPrefix ? `${pathPrefix}/` : ""
                  }${post.slug.current}`}
                >
                  {post.excerpt}
                </Link>
              </p>
            )}
          </div>

          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <>
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
            </>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time
              className="truncate text-sm"
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
        </div>
      </div>
    </div>
  );
}
