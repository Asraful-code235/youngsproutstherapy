import { defineField, defineType } from "sanity";
import { TfiLayoutCtaCenter } from "react-icons/tfi";
import { getBlockText } from "../plugins/settings";

export default defineType({
  name: "group.box",
  title: "Group Hero",
  icon: TfiLayoutCtaCenter,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "groupTitle",
      title: "Group title",
      type: "string",
    }),
    defineField({
      name: "groupDescription",
      title: "Group Description",
      type: "text",
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
