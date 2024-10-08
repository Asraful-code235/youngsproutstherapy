"use client";
import CalendlyIframe from "@/components/shared/CalendlyIframe";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Fees({ pricingPlans }) {
  return (
    <>
      <section className="px-4 pt-16 mx-auto max-w-screen-2xl md:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-[#1F2A37] mb-6">
            Child and Family Therapy Fees
          </h2>
          <p className="md:text-xl text-[#1F2A37] mb-10">
            Young Sprouts Therapy offers a range of therapeutic services to
            support children, teens, and families. Our team of experienced
            therapists is dedicated to helping Young Sprouts grow and thrive.
            All of our services are covered by most insurance companies under
            social work and/or registered psychotherapists.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 md:gap-10 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col justify-between items-center gap-6 p-6 transform bg-white border rounded-lg shadow-lg md:p-8 hover:scale-[1.02] transition-all duration-300 ease-out text-center cursor-pointer"
            >
              <Image
                src={plan.img}
                alt="pricing_image"
                width={100}
                height={100}
                className="object-cover mb-4 rounded-full"
              />
              <h3 className="text-xl md:text-3xl font-semibold mb-4 text-[#1F2A37]">
                {plan.title}
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <p className="text-2xl md:text-5xl font-bold text-[#1F2A37]">
                  {plan.price}
                </p>
                <p className="text-lg text-[#1F2A37]">/ {plan.period}</p>
              </div>
              <ul className="text-[#1F2A37] text-sm md:text-base space-y-2 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircleIcon className="w-5 h-5 text-[#649CAC]  flex-shrink-0 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href={"#book"}>
                <Button
                  variant="default"
                  className="w-full py-2 rounded-full bg-[#649CAC] hover:bg-[#4f7f8b] hover:!bg-opacity-100 text-white mt-6 md:text-base"
                >
                  Book A Free Consult
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div id="book" className="pt-14">
          <CalendlyIframe text={"Schedule a Free Consult"} />
        </div>
      </section>
    </>
  );
}
