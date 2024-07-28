import { defineField, defineType } from "sanity";
import { TfiPalette } from "react-icons/tfi";

export default defineType({
  name: "rich.list",
  title: "Rich list",
  icon: TfiPalette,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "itemTitle",
      title: "List Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "strongText",
              title: "Strong Text",
              type: "string",
            }),
            defineField({
              name: "regularText",
              title: "Regular Text",
              type: "string",
            }),
          ],
          preview: {
            select: {
              title: "strongText",
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        defineField({
          name: "ctaText",
          title: "CTA Text",
          type: "string",
        }),
        defineField({
          name: "ctaLink",
          title: "CTA Link",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "color",
      title: "Background Color",
      type: "string",
      options: {
        list: [
          { title: "#cbdee3", value: "#cbdee3" },
          { title: "#f0e4e4", value: "#f0e4e4" },
          { title: "#cca4a4", value: "#cca4a4" },
        ],
        layout: "radio",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Untitled Custom Module",
        subtitle: subtitle,
      };
    },
  },
});
