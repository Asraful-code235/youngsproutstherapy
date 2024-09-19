"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import GoogleAdsButton from "@/components/providers/GoogleAdsButton";
import { sendGTMEvent } from "@next/third-parties/google";
import GoogleAnalytics from "@/components/providers/GoogleAnalytics";
import GetStarted from "../../components/shared/GetStarted";
import { useState } from "react";

export default function HeroSection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-[url('/images/youngsproutstherapy-image-08.webp')] bg-no-repeat bg-cover bg-center py-10 md:py-24 md:pb-56 px-4 ">
      <GoogleAnalytics />
      <div className="absolute inset-0 bg-black opacity-50 md:hidden" />

      {/* Overlay for medium and larger screens (gradient) */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-white via-white/10 to-transparent" />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <h1 className="max-w-md text-3xl font-bold leading-snug text-center md:text-left md:text-5xl md:leading-tight text-white md:text-black">
            <span className="text-[#c98585] md:text-brand-color-one">
              Young Sprouts:
            </span>{" "}
            <br />
            Guiding Growth in Child, Teen, and Family Therapy in Vaughan
          </h1>
          <p className="mt-6 text-center md:text-2xl text-white md:text-left md:text-black md:w-80">
            Psychotherapy & Psychological Counselling for Kids, Teens and
            Families in Vaughan/Thornhill
          </p>
          <div className="z-10 flex flex-col items-center lg:w-full gap-3 mt-6 w-fit max-w-xs  md:items-start">
            <Button
              onClick={() => setOpen(!open)}
              variant="brandButton"
              className="w-full rounded-full md:text-base"
            >
              Get Started
            </Button>
            <Link className="block w-full" href="/#book-consultation">
              <Button
                variant="outline"
                className="w-full rounded-full md:text-base"
              >
                Schedule A Free Consult
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer gradient for smooth fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent" />
      <GetStarted open={open} setOpen={setOpen} />
    </div>
  );
}
