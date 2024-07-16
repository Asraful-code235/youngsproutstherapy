import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-08.webp')] bg-no-repeat bg-cover bg-center py-10 px-6 md:py-56">
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-0"></div>
      <div className="relative flex flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-2xl font-bold max-w-4xl mx-auto leading-snug text-white sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight md:text-black">
          <span className="text-brand-color-one mb-4">Young Sprouts:</span>{" "}
          <br />
          Guiding Growth in Child, Teen, and Family Therapy in Vaughan
        </h1>
        <p className="mt-6 text-base font-medium sm:text-lg md:text-xl lg:text-2xl md:text-black ">
          Psychotherapy & Psychological Counselling for Kids, <br /> Teens and
          Families in Vaughan/Thornhill
        </p>
        <div className="flex flex-col w-full gap-3 mt-6 md:flex-row md:w-6/12 lg:w-4/12">
          <Link className="block w-full" href="#book-consultation">
            <Button variant="brandButton" className="w-full">
              Book A Free Consult
            </Button>
          </Link>
          <Link className="block w-full" href="tel:2895794769">
            <Button variant="secondaryBrandButton" className="w-full">
              Call Now - (289) 579-4769
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-white via-white/70 to-transparent md:block" />
    </div>
  );
}
