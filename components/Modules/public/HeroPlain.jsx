export default function HeroPlain({ module }) {
  if (!module) return null;

  return (
    <section className="w-full flex flex-col gap-4 lg:gap-6 tracking-wide pb-2 lg:pb-[36px]">
      <div className="w-screen bg-[#cbdee3] py-14">
        <h1 className="max-w-4xl mx-auto text-center text-2xl md:text-[48px] leading-[36px] lg:leading-[56px] font-semibold max-lg:px-4">
          {module?.title}
        </h1>
      </div>
      <p className="text-sm lg:text-lg max-w-5xl mx-auto font-light max-lg:px-4">
        {module.description}
      </p>
    </section>
  );
}
