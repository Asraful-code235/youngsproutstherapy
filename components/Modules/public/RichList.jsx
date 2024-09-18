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
      className={`w-screen `}
    >
      <section className="max-w-5xl px-4 mx-auto flex flex-col gap-4 lg:gap-8 tracking-wide">
        <h2 className="text-2xl text-left text-[#ab6969] lg:text-[32px] leading-[36px] lg:leading-[56px] font-medium">
          {module?.title}
        </h2>
        <h2 className="text-lg lg:text-xl font-light">{module?.description}</h2>
        <ul className="flex flex-col gap-4">
          {module?.items?.map((list) => (
            <li className="flex flex-col items-start gap-2" key={list._key}>
              <strong className="text-sm lg:text-lg text-gray-900 font-medium ">
                {list.strongText}
              </strong>
              <p className="text-sm text-left">{list.regularText}</p>
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
