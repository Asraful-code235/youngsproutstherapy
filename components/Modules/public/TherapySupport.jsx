import Image from "next/image";

export default function TherapySupport() {
  return (
    <section className="flex flex-col items-center justify-between w-full gap-5 px-4 py-4 mx-auto md:px-0 md:flex-row md:max-w-5xl">
      <div className="w-full md:w-3/5">
        <div className="md:relative">
          <Image
            src={"/images/team.webp"}
            alt="support"
            width={470}
            height={470}
            className="w-full rounded-2xl md:w-[470px]"
          />
          <Image
            src={"/images/team.webp"}
            alt="support"
            width={290}
            height={200}
            className="hidden border-4 border-white right-12 md:absolute -bottom-12 rounded-2xl md:block"
          />
        </div>
      </div>

      <div className="w-full space-y-4 md:w-2/5">
        <h1 className="text-2xl font-semibold line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe
          a ipsum laborum fugit do
        </h1>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          accusantium quaerat fuga suscipit. Vel harum nemo quia reiciendis.
          Illum facilis et corrupti temporibus unde necessitatibus suscipit
          aperiam odio cum iure?
        </p>

        <p className="font-medium">
          Individual therapy can provide the support you need to feel better
        </p>
      </div>
    </section>
  );
}
