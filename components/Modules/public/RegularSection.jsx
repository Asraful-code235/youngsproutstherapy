export default function RegularSection({ module }) {
  if (!module) return null;
  return (
    <section className="max-w-5xl px-6 mx-auto tracking-wide flex flex-col gap-8">
      <h1 className="text-2xl text-[#ab6969] lg:text-[32px] leading-[36px] lg:leading-[56px] text-left font-medium ">
        {module.title}
      </h1>
      <div className="flex flex-col-10">
        <p className="text-sm lg:text-lg font-light text-left">
          {module.groupDescription}
        </p>
      </div>
    </section>
  );
}
