"use client";

import Image from "next/image";

export default function TherapyInfo({ module }) {
  if (!module) return null;
  return (
    <section className="flex flex-col items-center justify-center px-8 lg:px-[94px] py-24 lg:-mt-[42px] gap-8 bg-[#cbdee3]">
      <h1 className="text-2xl lg:text-[48px] leading-[36px] lg:leading-[56px] text-center font-medium md:mb-6">
        {module?.title}
      </h1>
      <div className="grid grid-cols-1 gap-8 md:gap-20 sm:grid-cols-2 md:grid-cols-3 px-8 lg:px-[94px]">
        {module?.features?.map((item) => (
          <div
            key={item._key}
            className="flex flex-col items-center gap-4 bg-white p-6 py-4 rounded-md "
          >
            <Svg />
            <p className="max-w-[220px] mx-auto text-center font-medium">
              {item?.text || "not Set"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Svg() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-12 w-12  bg-white p-2 text-white border border-[#ab6969] rounded-full">
        <LeafIcon className="h-full w-full" />
      </div>
    </div>
  );
}

function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#ab6969"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
