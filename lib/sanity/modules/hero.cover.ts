import { defineField, defineType } from "sanity";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { getBlockText } from "../plugins/settings";

export default defineType({
  name: "hero.cover",
  title: "Hero with image",
  icon: TfiLayoutCtaCenter,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "cta1",
      title: "Book A Free Consult",
      type: "string",
    }),
    defineField({
      name: "cta2",
      title: "Call Now",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
        }),
        defineField({
          name: "faded",
          type: "boolean",
          initialValue: true,
        }),
        defineField({
          name: "loading",
          type: "string",
          options: {
            layout: "radio",
            list: ["lazy", "eager"],
          },
          initialValue: "lazy",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      content: "content",
      media: "image",
    },
    prepare: ({ content, media }) => ({
      title: getBlockText(content),
      subtitle: "Hero",
      media,
    }),
  },
});
