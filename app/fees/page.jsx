import Fees from "./components/Fees";

export const metadata = {
  title: "Fees for Child, Teen, and Family Therapy in Vaughan",
  description:
    "Competitive rates for child, teen, and family therapy services in Vaughan. Our registered therapists and social workers are covered by most workplace insurance.",
};

const pricingPlans = [
  {
    id: 1,
    title: "Individual Child and Teen Therapy",
    price: "$185 / 50",
    period: "Min",
    features:
      "Our Individual Child and Teen Therapy service focuses on providing personalized support to children and teenagers facing emotional, behavioral, or developmental issues. Our therapists create a nurturing environment where young individuals can express themselves, develop coping skills, and work towards positive growth and well-being.",
    img: "/images/child_counseling.webp",
  },
  {
    id: 2,
    title: "Parent Coaching",
    price: "$185 / 50",
    period: "Min",
    features:
      "Parent Coaching is designed to empower parents with effective strategies and tools to navigate the challenges of parenting. Our experienced coaches provide guidance, support, and practical advice to help parents build strong relationships with their children and promote positive behavior.",
    img: "/images/mother_son.webp",
  },
  {
    id: 3,
    title: "Family Therapy and Couples Counselling",
    price: "$200 / 50",
    period: "Min",
    features:
      "Our Family Therapy service offers a warm and nurturing environment for families to address conflicts, improve communication, and build stronger, healthier relationships. Our Couples Counselling service provides a safe and supportive space for couples to address relationship challenges, enhance communication, and strengthen their bond.",
    img: "/images/couple.webp",
  },
];

const PricingSection = () => {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "WebPage",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    name: "Young Sprouts Child, Teen and Family Therapy - Services and Fees",
    description:
      "Check out our fees and therapy options available at Young Sprouts Child, Teen and Family Therapy. We offer competitive rates for our child, teen, and family therapy services.",
    url: "https://www.youngsproutstherapy.com/fees",
    mainEntity: {
      "@type": "Service",
      name: "Young Sprouts Therapy Services",
      description:
        "Young Sprouts Therapy offers a range of therapeutic services to support children, teens, and families. All of our services are covered by most insurance companies under social work and/or registered psychotherapists.",
      offers: [
        {
          "@type": "Offer",
          name: "Individual Child and Teen Therapy",
          price: "165",
          priceCurrency: "CAD",
          description:
            "Our Individual Child and Teen Therapy service focuses on providing personalized support to children and teenagers facing emotional, behavioral, or developmental issues.",
          availability: "http://schema.org/InStock",
          url: "https://www.youngsproutstherapy.com/fees",
        },
        {
          "@type": "Offer",
          name: "Couples Counselling",
          price: "185",
          priceCurrency: "CAD",
          description:
            "Our Couples Counselling service provides a safe and supportive space for couples to address relationship challenges and improve communication.",
          availability: "http://schema.org/InStock",
          url: "https://www.youngsproutstherapy.com/fees",
        },
        {
          "@type": "Offer",
          name: "Parent Coaching",
          price: "165",
          priceCurrency: "CAD",
          description:
            "Parent Coaching is designed to empower parents with effective strategies and tools to navigate the challenges of parenting.",
          availability: "http://schema.org/InStock",
          url: "https://www.youngsproutstherapy.com/fees",
        },
      ],
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.youngsproutstherapy.com/fees",
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
      <Fees pricingPlans={pricingPlans} />
    </section>
  );
};

export default PricingSection;
