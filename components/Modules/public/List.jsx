"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function List({ module }) {
  return (
    <section
      style={{
        backgroundColor: module?.color ? `${module?.color}` : "",
        paddingBottom: module?.color ? "4rem" : "",
      }}
      className={`w-screen pt-4 lg:pt-6`}
    >
      <section className="max-w-4xl mx-auto p-4 flex flex-col gap-4 lg:gap-5 tracking-wide">
        <h2 className="text-2xl lg:text-3xl font-semibold ">{module?.title}</h2>
        <ul className="space-y-3 list-disc pl-6 mt-2">
          {module?.items?.map((list) => (
            <li className="text-sm lg:text-lg font-medium" key={list._key}>
              {list.item}
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
