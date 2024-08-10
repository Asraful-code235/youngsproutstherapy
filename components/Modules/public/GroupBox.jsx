export default function GroupBox({ module }) {
  if (!module) return null;
  return (
    <section className="max-w-5xl px-4 py-10 mx-auto tracking-wide">
      <h1 className="text-2xl lg:text-[48px] leading-[36px] lg:leading-[56px] text-center max-w-lg mx-auto font-medium ">
        {module.title}
      </h1>
      <div className="flex flex-col max-w-4xl gap-4 mx-auto mt-8 lg:mt-14">
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
