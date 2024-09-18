export default function RegularSection({ module }) {
  if (!module) return null;
  return (
    <section className="max-w-7xl px-4 mx-auto tracking-wide">
      <h1 className="text-2xl text-[#ab6969] lg:text-[48px] leading-[36px] lg:leading-[56px] text-center max-w-4xl mx-auto font-medium ">
        {module.title}
      </h1>
      <div className="flex flex-col max-w-4xl gap-4 mx-auto mt-8">
        <p className=" p-4 text-sm lg:text-lg font-light text-left">
          {module.groupDescription}
        </p>
      </div>
    </section>
  );
}
