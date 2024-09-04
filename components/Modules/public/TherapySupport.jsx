import Image from "next/image";

export default function TherapySupport() {
  return (
    <section className="flex flex-col-reverse py-14 px-6 items-center justify-between w-full gap-10 mx-auto lg:px-6 lg:flex-row lg:max-w-7xl">
      <div className="w-full md:w-3/5 mt-14">
        <div className="lg:relative">
          <Image
            src={"/images/possible outcome.webp"}
            alt="support"
            width={470}
            height={470}
            className="w-full rounded-2xl md:w-[670px]"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-6 text-center lg:text-left lg:w-2/5">
        <h1 className="line-clamp-1 text-[#e0c8c8] text-3xl lg:text-5xl lg:leading-snug font-bold">
          Positive Outcomes
        </h1>

        <p className="text-sm">
          Through our expert led child and family counselling, we aim to help
          children, teens, and families achieve positive, lasting outcomes.
          Through evidence-based practices and a supportive therapeutic
          environment, we empower you to overcome challenges and build a
          brighter, healthier future.
        </p>
      </div>
    </section>
  );
}
