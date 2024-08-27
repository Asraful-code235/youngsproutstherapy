"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import GoogleAdsButton from "@/components/providers/GoogleAdsButton";

export default function HeroSection() {
  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-08.webp')] bg-no-repeat bg-cover bg-center py-10 md:py-24 md:pb-56 px-4 ">
      {/* Overlay for fade effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent md:bg-gradient-to-t md:from-transparent md:via-transparent md:to-transparent" />

      <div className="relative grid grid-cols-2 gap-6">
        <div />
        <motion.div
          whileInView={{
            opacity: [0, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start max-sm:-mt-4"
        >
          <h1 className="max-w-md text-3xl font-bold leading-snug text-center md:text-left md:text-5xl md:leading-tight md:text-black">
            <span className="text-brand-color-one">Young Sprouts:</span> <br />
            Guiding Growth in Child, Teen, and Family Therapy in Vaughan
          </h1>
          <p className="mt-6 text-center md:text-2xl md:text-left md:text-black md:w-80">
            Psychotherapy & Psychological Counselling for Kids, Teens and
            Families in Vaughan/Thornhill
          </p>
          <div className="z-10 flex flex-col items-center w-full gap-3 mt-6 md:w-4/12 md:items-start">
            <Link className="block w-full" href="/#book-consultation">
              <Button
                variant="brandButton"
                className="w-full rounded-full md:text-base"
              >
                Book A Free Consult
              </Button>
            </Link>
            <GoogleAdsButton>
              {" "}
              {/* Replace with your conversion label */}
              <Link className="block w-full" href="tel:2895794769">
                <Button
                  variant="outline"
                  className="w-full rounded-full md:text-base"
                >
                  Call Now - (289) 579-4769
                </Button>
              </Link>
            </GoogleAdsButton>
          </div>
        </motion.div>
      </div>

      {/* Footer gradient for smooth fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />
    </div>
  );
}
