import { defineField, defineType } from "sanity";
import { TfiLayoutCtaCenter } from "react-icons/tfi";

export default defineType({
  name: "therapy.features",
  title: "Therapy Features",
  icon: TfiLayoutCtaCenter,
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineField({
          name: "feature",
          title: "Feature",
          type: "object",
          fields: [
            defineField({
              name: "text",
              title: "Text",
              type: "string",
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "features.0.text",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Feature: ${subtitle}` : "No features",
      };
    },
  },
});
