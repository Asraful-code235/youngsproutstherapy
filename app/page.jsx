import dynamic from "next/dynamic";

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

export default function Home() {
  return (
    <main className="">
      <HomeComponent />
      <FamilyTherapySection />
      <TeamSection />
      <PsychoTherapyHelp />
      <TherapeuticModalities />
      <ConsultationBooking />
      <ShopLocationMap />
    </main>
  );
}
