import { defineField, defineType } from "sanity";
import { TfiLayoutCtaCenter } from "react-icons/tfi";

export default defineType({
  name: "regular.section",
  title: "Regular Section",
  icon: TfiLayoutCtaCenter,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      title: "title",
    },
  },
});
