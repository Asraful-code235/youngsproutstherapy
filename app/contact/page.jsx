import Contact from "./components/Contact";
export const metadata = {
  title: "Contact for Child, Teen, and Family Therapy in Vaughan",
  description:
    "Contact us at Young Sprouts Therapy to schedule an appointment or inquire about our services. Our office is located in Thornhill, Vaughan. Call us at (289) 579-4769.",
};

export default function page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "ContactPage",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    name: "Young Sprouts Child, Teen and Family Therapy Contact Page",
    description:
      "Contact us at Young Sprouts Child, Teen and Family Therapy to schedule an appointment or inquire about our services.",
    url: "https://www.youngsproutstherapy.com/contact",
    telephone: "(289) 579-4769",
    email: "info@youngsproutstherapy.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1137 Centre Street, Suite #204",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 3M6",
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "15:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "09:00",
        closes: "21:00",
      },
    ],
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Contact />;
    </section>
  );
}
