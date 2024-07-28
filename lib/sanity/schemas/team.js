export default {
  name: "teams",
  title: "Teams",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "isFeatured",
      title: "Is Featured (Show on the first page)",
      type: "boolean",
    },
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
      options: {
        hotspot: true,
      },
    },

    {
      name: "specialities",
      title: "Specialities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "clientFocus",
      title: "Client Focus",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "therapyFormats",
      title: "Therapy Formats",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "appointmentLink",
      title: "Appointment Link",
      type: "url",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "therapyAreasOfSupport",
      title: "Types of Therapy",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "mainImage",
    },
  },
};
