import { defineField, defineType } from "sanity";
import { TfiLayoutAccordionList } from "react-icons/tfi";

export default defineType({
  name: "accordion",
  title: "Accordion",
  icon: TfiLayoutAccordionList,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Accordion Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "subject",
              title: "Subject",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
          preview: {
            select: {
              title: "subject",
              subtitle: "description",
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
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled Accordion",
      };
    },
  },
});
