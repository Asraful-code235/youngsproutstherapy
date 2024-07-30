import Image from "next/image";
import Link from "next/link";

import { notFound } from "next/navigation";
import { PortableText } from "../../../../lib/sanity/plugins/portabletext";
import { urlForImage } from "../../../../lib/sanity/image";
import { parseISO, format } from "date-fns";
import Comments from "./Comments";
import PostComment from "./PostComment";
// import CategoryLabel from "../../components/CategoryLabel";

export default function PostPage(props) {
  const { loading, post } = props;

  const slug = post?.slug;

  if (!loading && !slug) {
    notFound();
  }

  const imageProps = post?.mainImage ? urlForImage(post?.mainImage) : null;

  const AuthorimageProps = post?.author?.image
    ? urlForImage(post.author.image)
    : null;

  return (
    <>
      <article className="!pt-4 container mx-auto max-w-screen-xl xl:px-5 py-5 lg:py-8">
        <div className="mx-auto max-w-screen-md lg:py-8 ">
          <div className="flex justify-center">
            {/* <CategoryLabel categories={post.categories} /> */}
          </div>

          <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                {AuthorimageProps && (
                  <>
                    <Image
                      src={AuthorimageProps.src}
                      alt={post?.author?.name}
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </>
                )}
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-400">
                  <span>{post.author.name}</span>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    dateTime={post?.publishedAt || post._createdAt}
                  >
                    {format(
                      parseISO(post?.publishedAt || post._createdAt),
                      "MMMM dd, yyyy"
                    )}
                  </time>
                  <span>· {post.estReadingTime || "5"} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        {imageProps && (
          <Image
            src={imageProps.src}
            alt={post.mainImage?.alt || "Thumbnail"}
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="container mx-auto ">
        <article className="mx-auto max-w-5xl ">
          <div className="prose prose-sm lg:prose-lg prose-p:my-0 prose-table:table-fixed prose-thead:text-left prose-thead:!align-top prose-thead:my-0 prose-h1:mb-0 prose-h2:mb-0 prose-h3:mb-0 prose-h4:mb-0 prose-h5:mb-0 prose-h6:mb-0  my-3 dark:prose-invert prose-a:text-blue-600 !w-full max-w-5xl mx-auto">
            {post.body && <PortableText value={post.body} />}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              href="/blog"
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
            >
              ← View all posts
            </Link>
          </div>
        </article>
      </div>

      <PostComment post={post} />
      <Comments post={post} />
    </>
  );
}
