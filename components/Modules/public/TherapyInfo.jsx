"use client";

import Image from "next/image";

export default function TherapyInfo({ module }) {
  if (!module) return null;
  return (
    <section className="flex flex-col items-center justify-center py-24 lg:-mt-[42px] gap-8 bg-[#cbdee3]">
      <h1 className="text-2xl lg:text-[48px] leading-[36px] lg:leading-[56px] font-medium md:mb-6">
        {module?.title}
      </h1>
      <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-3 px-8 lg:px-[94px]">
        {module?.features?.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-4 ">
            <Image
              src={"/images/leaf.png"}
              alt="leaf"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full"
            />
            <p className="max-w-[220px] mx-auto text-center font-medium">
              {item?.text || "not Set"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
