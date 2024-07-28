export default function GroupBox({ module }) {
  if (!module) return null;
  return (
    <section className="max-w-5xl mx-auto px-4 py-10 tracking-wide">
      <h1 className="text-3xl lg:text-5xl text-center max-w-lg mx-auto font-semibold leading-[63px]">
        {module.title}
      </h1>
      <div className="mt-8 lg:mt-14 flex flex-col gap-4 max-w-4xl mx-auto">
        <h2 className="text-xl lg:text-3xl font-medium p-4 bg-[#cbdee3] rounded-md w-fit">
          {module.groupTitle}
        </h2>
        <p className="border-4 border-[#cbdee3] p-4 text-sm lg:text-lg font-light text-left">
          {module.groupDescription}
        </p>
      </div>
    </section>
  );
}
