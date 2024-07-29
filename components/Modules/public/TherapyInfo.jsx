import Image from "next/image";

const infos = [
  {
    id: "1",
    src: "/images/leaf.png",
    content: "Find Balance",
  },
  {
    id: "2",
    src: "/images/leaf.png",
    content: "Manage Stress",
  },
  {
    id: "3",
    src: "/images/leaf.png",
    content: "Feel Empowered",
  },
];

export default function TherapyInfo() {
  return (
    <section className="flex flex-col items-center justify-center py-12 mb-14 bg-[#f1eee9]">
      <h1 className="mb-4 text-xl font-semibold md:mb-6">
        Therapy can help you:
      </h1>
      <div className="grid grid-cols-1 gap-10 md:gap-40 md:grid-cols-3">
        {infos.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-1"
          >
            <Image
              src={"/images/leaf.png"}
              alt="leaf"
              width={48}
              height={48}
              className="w-12 h-12"
            />
            <p>{item.content || "not Set"}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
