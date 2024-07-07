import ShopLocationMap from "@/components/shared/ShopLocationMap";
import ConsultationBooking from "./components/ConsultationBooking";
import FamilyTherapySection from "./components/FamilyTherapySection";
import HomeComponent from "./components/HomeContent";
import PsychoTherapyHelp from "./components/PsychoTherapyHelp";
import TeamSection from "./components/TeamSection";
import TherapeuticModalities from "./components/TherapeuticModalities";

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
      {/* <TeamSection /> */}
      <PsychoTherapyHelp />
      <TherapeuticModalities />
      <ConsultationBooking />
      <ShopLocationMap />
    </main>
  );
}
