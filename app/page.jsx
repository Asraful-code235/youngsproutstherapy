import { getShortTeamList, getServiceCategoryList } from "@/lib/sanity/client";

import dynamic from "next/dynamic";
import Script from "next/script";

const ShopLocationMap = dynamic(
  () => import("../components/shared/ShopLocationMap")
);

const ConsultationBooking = dynamic(
  () => import("./components/ConsultationBooking")
);
const FamilyTherapySection = dynamic(
  () => import("./components/FamilyTherapySection")
);
const HomeComponent = dynamic(() => import("./components/HomeContent"));
const PsychoTherapyHelp = dynamic(
  () => import("./components/PsychoTherapyHelp")
);
const TeamSection = dynamic(() => import("./components/TeamSection"));
const TherapeuticModalities = dynamic(
  () => import("./components/TherapeuticModalities")
);

export const metadata = {
  title: "Young Sprouts | Child, Teen &amp; Family Therapy | Vaughan",
  description:
    "Psychotherapy and counseling for kids &amp; teens in Vaughan. Find support for kids &amp; teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
};

export default async function Home() {
  const teams = await getShortTeamList();

  return (
    <section className="pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeComponent />
      <FamilyTherapySection />
      <TeamSection teams={teams} />
      <PsychoTherapyHelp />
      <TherapeuticModalities />
      <ConsultationBooking />
      <ShopLocationMap />
    </section>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
  name: "Young Sprouts Therapy",
  description:
    "Young Sprouts Therapy is a therapist in Vaughan specializing in play therapy, art therapy, CBT, DBT, and more for kids, teens, and families. Our expert team provides compassionate care. Offering in-person and virtual sessions for clients in Toronto, Vaughan, Richmond Hill, Markham, North York, Newmarket, and Aurora.",
  url: "https://www.youngsproutstherapy.com",
  image: "https://www.youngsproutstherapy.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1137 Centre Street, Suite #204",
    addressLocality: "Thornhill",
    addressRegion: "Ontario",
    postalCode: "L4J 3M6",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.80910677814606,
    longitude: -79.46233340468766,
  },
  telephone: "(647) 370-7622",
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
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  areaServed: [
    "Toronto",
    "Vaughan",
    "Richmond Hill",
    "Markham",
    "North York",
    "Newmarket",
    "Aurora",
  ],
};
