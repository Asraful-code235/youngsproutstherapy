// @ts-nocheck

import { getAllPosts, getAllServices } from "@/lib/sanity/client";
import { getServerSideSitemap } from "next-sitemap";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const data = await getAllServices();
    const blog = await getAllPosts();

    const serviceFields = data.map((service) => ({
      loc: `https://www.youngsproutstherapy.com/${service.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.8,
    }));

    const blogFields = blog.map((post) => ({
      loc: `https://www.youngsproutstherapy.com/blog/${post.slug.current}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.8,
    }));
    const fields = [...serviceFields, ...blogFields];

    return getServerSideSitemap(fields);
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return NextResponse.error();
  }
}
