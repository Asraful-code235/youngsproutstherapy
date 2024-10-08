"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FamilyTherapySection() {
  return (
    <div className="bg-white px-4">
      <div className="max-w-screen-2xl mx-auto py-16 md:px-0 px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14 xl:gap-20 gap-10">
          <div className="flex flex-col justify-center bg-[#e8f0fe] p-6 md:p-10 rounded-xl text-lg">
            <h2 className="text-[#cca4a4] text-3xl md:text-4xl md:leading-snug font-bold mb-8 ">
              Expert Psychotherapy and Counseling for Kids, Teens, and Families
            </h2>
            <p className="leading-relaxed">
              We are a dedicated team of child and family therapists in Vaughan
              consisting of social workers and registered psychotherapists. With
              expertise in providing comprehensive psychotherapy and counselling
              services, we are committed to:
            </p>
            <ul className="my-4 list-disc ml-6">
              <li>
                Supporting the emotional well-being of children, teens, and
                families
              </li>
              <li>
                Ensuring accessibility and affordability through coverage by
                most insurance companies
              </li>
            </ul>
            <p>
              Currently, we are offering counseling and individual therapy for
              kids, teens, and families online and in person at our conveniently
              located office in the heart of Thornhill.
            </p>
            <div>
              <Link href="/">Get in touch</Link> to see how therapy can help
              your child and family today!
            </div>
          </div>
          <div className="flex flex-col justify-between w-full h-full">
            <div className="mb-8">
              <h2 className="text-3xl text-center md:text-6xl md:leading-snug font-bold text-[#cca4a4]">
                Expert Counseling{" "}
              </h2>
              <h2 className="text-3xl text-center md:text-end  md:text-6xl md:leading-snug font-bold text-[#cca4a4]">
                for Families
              </h2>
            </div>

            <motion.div
              whileInView={{
                opacity: [0, 1],
                x: [100, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="w-full h-full"
            >
              <Image
                className="ml-auto w-full rounded-xl h-full object-cover object-center"
                src="/images/team.webp"
                width={900}
                height={500}
                priority={false}
                decoding="async"
                loading="lazy"
                alt="Family Therapy Vaughan | Young Sprouts Therapy | Vaughan, ON"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
