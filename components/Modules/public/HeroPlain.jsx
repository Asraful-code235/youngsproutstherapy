export default function HeroPlain({ module }) {
  return (
    <section className="w-full flex flex-col gap-4 lg:gap-6 tracking-wide">
      <div className="w-screen bg-[#cbdee3] py-14">
        <h1 className="max-w-4xl mx-auto text-3xl md:text-5xl font-semibold max-lg:px-4">
          {module?.title}
        </h1>
      </div>
      <p className="text-sm lg:text-lg max-w-5xl mx-auto font-light max-lg:px-4">
        {module.description}
      </p>
    </section>
  );
}
