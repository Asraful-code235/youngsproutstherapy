import { defineField, defineType } from "sanity";

export default defineType({
  name: "serviceCategory",
  type: "document",
  title: "Service Category",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [{ type: "reference", to: { type: "service" } }],
      options: {
        editModal: "dialog",
      },
    }),
    defineField({
      name: "standalone",
      title: "Standalone Category",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "linkUrl",
      title: "Link URL",
      type: "url",
      hidden: ({ parent }) => !parent?.standalone,
    }),
  ],
});
