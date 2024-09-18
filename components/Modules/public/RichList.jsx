"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RichList({ module }) {
  if (!module) return null;

  return (
    <section
      style={{
        backgroundColor: module?.color ? `${module?.color}` : "",
        paddingBottom: module?.color ? "4rem" : "",
      }}
      className={`w-screen pt-4 lg:pt-6`}
    >
      <section className="max-w-4xl mx-auto p-4 flex flex-col gap-4 lg:gap-5 tracking-wide">
        <h2 className="text-2xl text-center text-[#ab6969] lg:text-[48px] leading-[36px] lg:leading-[56px] font-medium ">
          {module?.title}
        </h2>
        <h2 className="text-lg lg:text-xl font-light ">
          {module?.description}
        </h2>
        <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {module?.items?.map((list) => (
            <li
              className=" font-medium p-4 hover:scale-[1.02] transition-all duration-500 ease-in-out border-2 border-[#f0e4e4] rounded-md bg-white shadow flex items-center  flex-col gap-3"
              key={list._key}
            >
              <strong className=" text-sm lg:text-lg text-center text-[#78a9b6]">
                {" "}
                {list.strongText}
              </strong>
              <p className="text-sm text-center"> {list.regularText}</p>
            </li>
          ))}
        </ul>
        <p
          className={`${module?.color ? "text-center" : "text-left"} text-sm lg:text-lg font-light`}
        >
          {module?.shortDescription}
        </p>
        {module?.cta && (
          <Button className="w-fit mx-auto bg-[#e5eff1] hover:bg-[#3f6a76] text-[#3f6a76] border-2 rounded-full border-[#3f6a76] hover:text-white transition-colors duration-500">
            <Link href={`${module.cta.ctaLink}`}>{module?.cta.ctaText}</Link>
          </Button>
        )}
      </section>
    </section>
  );
}
