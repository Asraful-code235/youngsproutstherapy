import FaqList from "./components/FaqList";

const faqData = [
  {
    question: "Are your services covered by insurance?",
    answer:
      "Most of our services are covered by common workplace benefits plans. Please check with your employer for coverage details under social work and registered psychotherapists.",
  },
  {
    question: "What is the therapy process like?",
    answer:
      "The therapy process is a collaborative journey where we work together to address your concerns.",
  },
  {
    question: "What is your therapeutic method?",
    answer:
      "We use a variety of evidence-based approaches tailored to each individual's needs.",
  },
  {
    question: "How long does the therapy process take?",
    answer:
      "The length of therapy varies depending on the individual’s needs and goals.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours' notice for cancellations to avoid being charged for the session.",
  },
];

export const metadata = {
  title: "FAQs About Our Child and Family Therapy Services",
  description:
    "Find answers to questions about Young Sprouts Therapy in Vaughan. Explore our FAQ page for insights into the therapy process and what to expect in sessions.",
};

export default function Faq() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "WebPage",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    name: "Young Sprouts Child, Teen and Family Therapy - FAQ",
    description:
      "Find answers to questions about Young Sprouts Child, Teen and Family Therapy. Explore our FAQ page for insights into the therapy process, what to expect in sessions, and more.",
    url: "https://www.youngsproutstherapy.com/faq",
    mainEntity: {
      "@type": "Question",
      name: "Frequently Asked Questions",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For specific questions not listed on the FAQ page, you can send a message through the Contact page or e-mail at info@youngsproutstherapy.com.",
      },
    },
    author: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
    },
    publisher: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1137 Centre Street, Suite #204",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 3M6",
      addressCountry: "CA",
    },
    telephone: "(289) 579-4769",
  };
  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqList faqData={faqData} />;
    </section>
  );
}
