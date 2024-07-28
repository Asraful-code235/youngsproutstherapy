import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  type: "document",
  title: "Service",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
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
      name: "contentModules",
      title: "Content Modules",
      type: "array",
      of: [
        { type: "hero.plain" },
        { type: "hero.cover" },
        { type: "group.box" },
        { type: "accordion" },
        { type: "list" },
        { type: "rich.list" },
        { type: "emailSubscriptionModule" },
      ],
    }),
  ],
});
