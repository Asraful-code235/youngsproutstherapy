"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const pricingPlans = [
  {
    id: 1,
    title: "Individual Child and Teen Therapy",
    price: "$185 / 50",
    period: "Min",
    features:
      "Our Individual Child and Teen Therapy service focuses on providing personalized support to children and teenagers facing emotional, behavioral, or developmental issues. Our therapists create a nurturing environment where young individuals can express themselves, develop coping skills, and work towards positive growth and well-being.",
    img: "/images/child_counseling.webp",
  },
  {
    id: 2,
    title: "Parent Coaching",
    price: "$185 / 50",
    period: "Min",
    features:
      "Parent Coaching is designed to empower parents with effective strategies and tools to navigate the challenges of parenting. Our experienced coaches provide guidance, support, and practical advice to help parents build strong relationships with their children and promote positive behavior.",
    img: "/images/mother_son.webp",
  },
  {
    id: 3,
    title: "Family Therapy and Couples Counselling",
    price: "$200 / 50",
    period: "Min",
    features:
      "Our Family Therapy service offers a warm and nurturing environment for families to address conflicts, improve communication, and build stronger, healthier relationships. Our Couples Counselling service provides a safe and supportive space for couples to address relationship challenges, enhance communication, and strengthen their bond.",
    img: "/images/couple.webp",
  },
];

const PricingSection = () => {
  return (
    <section className="px-4 py-16 mx-auto max-w-screen-2xl md:px-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#1F2A37] mb-4">
          Child and Family Therapy Fees
        </h2>
        <p className="md:text-lg text-[#1F2A37] mb-8">
          Young Sprouts Therapy offers a range of therapeutic services to
          support children, teens, and families. Our team of experienced
          therapists is dedicated to helping Young Sprouts grow and thrive. All
          of our services are covered by most insurance companies under social
          work and/or registered psychotherapists.
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
            className="relative flex flex-col justify-between gap-4 p-4 transition-transform duration-300 transform bg-white border rounded-lg shadow-lg md:p-6 md:gap-6 hover:scale-105"
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
              className="w-full py-2 border rounded-md bg-[#649CAC] text-white"
            >
              Book A Free Consult
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
