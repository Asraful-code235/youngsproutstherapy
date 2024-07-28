"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-08.webp')] bg-no-repeat bg-cover bg-center py-10 md:py-56 px-6">
      <div className="absolute inset-0 bg-black opacity-50 md:opacity-0"></div>
      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2">
        <div></div>
        <motion.div
          whileInView={{
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold leading-snug text-center text-white md:text-left md:text-5xl md:leading-tight md:text-black">
            <span className="text-brand-color-one">Young Sprouts:</span> <br />
            Guiding Growth in Child, Teen, and Family Therapy in Vaughan
          </h1>
          <p className="mt-6 text-lg text-center text-white md:text-left md:text-xl md:text-black">
            Psychotherapy & Psychological Counselling for Kids, <br /> Teens and
            Families in Vaughan/Thornhill
          </p>
          <div className="flex flex-col w-full gap-3 mt-6 md:w-4/12">
            <Link className="block w-full" href="/#book-consultation">
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
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 hidden h-48 bg-gradient-to-t from-white via-white/70 to-transparent md:block" />
    </div>
  );
}
