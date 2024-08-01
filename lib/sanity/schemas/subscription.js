// schemas/subscription.js
export default {
  name: "subscription",
  title: "Subscription",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "Email address of the subscriber",
      readOnly: true,
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
      description: "Date when the subscription was created",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
      readOnly: true,
    },
  ],
  preview: {
    select: {
      title: "email",
    },
  },
};
