import Link from "next/link";
import { Button } from "../ui/button";

export default function PageHeroSection({ title }) {
  console.log({ title });
  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-09.webp')] bg-no-repeat bg-cover bg-center py-10 md:py-56 px-6">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative">
        <h2 className="text-2xl md:text-5xl md:leading-snug text-center font-bold text-white">
          {title || "Young Sprouts Therapy"}
        </h2>
        <div>
          <div className="mt-6  flex flex-col lg:flex-row md:flex-row justify-center gap-2 md:gap-6">
            <Link href="/#book-consultation">
              <Button variant="brandButton" className="w-full">
                Book A Free Consult
              </Button>
            </Link>
            <Link href="tel:2895794769">
              <Button variant="secondaryBrandButton" className="w-full">
                Call Now - (289) 579-4769
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
