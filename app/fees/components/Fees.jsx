"use client";
import CalendlyIframe from "@/components/shared/CalendlyIframe";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Fees({ pricingPlans }) {
  return (
    <>
      <section className="px-4 py-16 mx-auto max-w-screen-2xl md:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-[#1F2A37] mb-4">
            Child and Family Therapy Fees
          </h2>
          <p className="md:text-lg text-[#1F2A37] mb-8">
            Young Sprouts Therapy offers a range of therapeutic services to
            support children, teens, and families. Our team of experienced
            therapists is dedicated to helping Young Sprouts grow and thrive.
            All of our services are covered by most insurance companies under
            social work and/or registered psychotherapists.
          </p>

          {/* <div className="flex justify-center mb-10">
          <Button variant="outline" className="mr-2">
            Bill Monthly
          </Button>
          <Button variant="solid">Bill Yearly</Button>
        </div> */}
        </div>
        <div className="grid grid-cols-1 gap-4 mt-10 md:gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative flex flex-col justify-between gap-4 p-4  transform bg-white border rounded-lg shadow-lg md:p-6 md:gap-6 hover:scale-[1.02] transition-all duration-500 ease-in-out"
            >
              <div>
                <div className="">
                  <Image
                    src={plan.img}
                    alt="pricing_image"
                    width={100}
                    height={100}
                    className="object-cover mb-2 rounded-full"
                  />
                  <h3 className="md:text-lg font-semibold mb-4 text-[#1F2A37]">
                    {plan.title}
                  </h3>
                  <p className="text-2xl md:text-4xl font-bold mb-2 text-[#1F2A37]">
                    {plan.price}
                  </p>
                  <p className="text-lg mb-6 text-[#1F2A37]">/ {plan.period}</p>
                </div>
                <p className="text-[#1F2A37] text-sm md:text-base">
                  {plan.features}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full py-2 border rounded-md bg-[#649CAC] hover:!bg-opacity-70 text-white"
              >
                <Link href={"#book"}>Book A Free Consult</Link>
              </Button>
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
