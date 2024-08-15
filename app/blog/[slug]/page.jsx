import PostPage from "./components/PostPage";

import { getPostBySlug } from "../../../lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  const url = `https://www.youngsproutstherapy.com/blog/${post?.slug?.current}`;
  const { title, slug, excerpt, mainImage } = post;

  const ogImage = mainImage ? urlForImage(mainImage) : "/images/logo.png";
  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: `Young Sprouts Therapy | ${title}`,
    description: excerpt,

    openGraph: {
      type: "website",
      url,
      title: `Young Sprouts Therapy | ${title}`,
      description: excerpt,
      images: ogImage.src,
    },

    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": `/blog/${post?.slug?.current}/rss.xml`,
      },
    },
  };
}

export default async function PostDefault({ params }) {
  const post = await getPostBySlug(params.slug);
  return <PostPage post={post} />;
}

// export const revalidate = 60;
