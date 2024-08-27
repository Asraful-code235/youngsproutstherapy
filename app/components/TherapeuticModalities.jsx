import { PiBrainLight } from "react-icons/pi";
import { SlBookOpen } from "react-icons/sl";
import { GoLightBulb } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { TfiBrushAlt } from "react-icons/tfi";
import { TbGoGame } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { BsEmojiSmile } from "react-icons/bs";
import { MdFamilyRestroom } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Cognitive Behavioural Therapy (CBT)",
    description:
      "CBT is a type of psychotherapy that helps individuals change negative thought patterns and behaviors.",
    icon: <PiBrainLight />,
    link: "cognitive-behavioural-therapy-cbt",
  },
  {
    id: 2,
    title: "Narrative Therapy",
    description:
      "Narrative Therapy seeks to help patients identify their values and the skills associated with them.",
    icon: <SlBookOpen />,
    link: "narrative-therapy",
  },
  {
    id: 3,
    title: "Solution-Focused Therapy",
    description:
      "Solution-Focused Therapy is future-focused and goal-directed, focusing on solutions rather than problems.",
    icon: <GoLightBulb />,
    link: "solution-focused-therapy",
  },
  {
    id: 4,
    title: "Dialectical Behaviour Therapy (DBT)",
    description:
      "DBT is a type of cognitive-behavioral therapy that helps people manage their emotions and develop healthy coping mechanisms.",
    icon: <TiMessages />,
    link: "dialectical-behaviour-therapy-dbt",
  },
  {
    id: 5,
    title: "Art Therapy",
    description:
      "Art Therapy involves the use of creative techniques such as drawing, painting, and sculpting to help individuals express themselves.",
    icon: <TfiBrushAlt />,
    link: "art-therapy",
  },
  {
    id: 6,
    title: "Play Therapy",
    description:
      "Play Therapy uses play to help children communicate their feelings and deal with emotional issues.",
    icon: <TbGoGame />,
    link: "play-therapy",
  },
  {
    id: 7,
    title: (
      <div>
        Acceptance and Commitment <br /> Therapy (ACT)
      </div>
    ),
    description:
      "ACT is a type of psychotherapy that uses mindfulness and behavior change strategies to help individuals accept and commit to their values.",
    icon: <SiAdguard />,
    link: "acceptance-and-commitment-therapy-act",
  },
  {
    id: 8,
    title: "Emotion-Focused Therapy (EFT)",
    description:
      "EFT is designed to help individuals understand and regulate their emotions.",
    icon: <BsEmojiSmile />,
    link: "emotion-focused-therapy-eft",
  },
  {
    id: 9,
    title: (
      <div>
        Parent-Child Interaction <br /> Therapy (PCIT)
      </div>
    ),
    description:
      "PCIT is a form of therapy that focuses on improving the quality of the parent-child relationship and changing parent-child interaction patterns.",
    icon: <MdFamilyRestroom />,
    link: "parent-child-interaction-therapy-pcit",
  },
];
export default function TherapeuticModalities() {
  return (
    <div className="px-3 py-16 mx-auto max-w-screen-2xl md:px-0">
      <h2 className="text-center text-2xl md:text-5xl md:leading-snug font-bold text-[#cca4a4]">
        Therapeutic Modalities Used in Counselling
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mt-14 ">
        {items.map((item) => (
          <a
            href={`/${item?.link || "#"}`}
            key={item.id}
            className="group transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col gap-4 items-center text-center group-hover:shadow group-hover:scale-[1.02] p-4 ">
              <div className="p-4 bg-[#D1E6E2] rounded-full">
                <div className="text-[#589086] text-xl">{item.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-[#1F2A37] max-w-[250px] mx-auto">
                {item.title}
              </h3>
              <p className="text-[#1F2A37] text-sm md:text-[15px] tracking-wide max-w-sm mx-auto italic">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
