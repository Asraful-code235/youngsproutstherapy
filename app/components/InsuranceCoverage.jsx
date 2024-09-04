import Image from "next/image";

const InsuranceCoverage = () => {
  return (
    <section className="flex flex-col items-center justify-center py-14 bg-[#cca4a4] px-6">
      <div className="text-center max-w-xl mt-8">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide text-center mb-10">
          Insurance Coverage
        </h2>
        <p className="text-white text-center text-sm lg:text-lg">
          We believe that access to quality mental health care should be both
          easy and affordable. That’s why we accept coverage from most major
          insurance providers, reducing the financial burden so that you can
          focus on what truly matters—your family&apos;s well-being.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <Image
          width={400}
          height={400}
          src="/images/manulife-logo-final.webp"
          alt="Manulife"
          className="w-44 h-auto object-contain"
        />
        <Image
          width={400}
          height={400}
          src="/images/Sun-Life-Financial-Logo.webp"
          alt="Sun Life"
          className="w-44 h-auto object-contain"
        />
        <Image
          width={400}
          height={400}
          src="/images/Desjardins_Insurance_logo.webp"
          alt="Desjardins"
          className="w-44 h-auto object-contain"
        />
        {/* Repeat for more logos */}
      </div>
    </section>
  );
};

export default InsuranceCoverage;
