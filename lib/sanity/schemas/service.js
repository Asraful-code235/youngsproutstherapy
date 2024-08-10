import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "pageTitle",
      title: "Sub Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "pageTitle",
      },
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
    }),
    {
      name: "mainImage",
      title: "Services SEO Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: "contentModules",
      title: "Content Modules",
      type: "array",
      of: [
        { type: "hero.plain" },
        { type: "hero.cover" },
        { type: "therapy.features" },
        { type: "group.box" },
        { type: "accordion" },
        { type: "list" },
        { type: "rich.list" },
        { type: "emailSubscriptionModule" },
      ],
    }),
  ],
});
