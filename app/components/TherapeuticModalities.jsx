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
  },
  {
    id: 2,
    title: "Narrative Therapy",
    description:
      "Narrative Therapy seeks to help patients identify their values and the skills associated with them.",
    icon: <SlBookOpen />,
  },
  {
    id: 3,
    title: "Solution-Focused Therapy",
    description:
      "Solution-Focused Therapy is future-focused and goal-directed, focusing on solutions rather than problems.",
    icon: <GoLightBulb />,
  },
  {
    id: 4,
    title: "Dialectical Behaviour Therapy (DBT)",
    description:
      "DBT is a type of cognitive-behavioral therapy that helps people manage their emotions and develop healthy coping mechanisms.",
    icon: <TiMessages />,
  },
  {
    id: 5,
    title: "Art Therapy",
    description:
      "Art Therapy involves the use of creative techniques such as drawing, painting, and sculpting to help individuals express themselves.",
    icon: <TfiBrushAlt />,
  },
  {
    id: 6,
    title: "Play Therapy",
    description:
      "Play Therapy uses play to help children communicate their feelings and deal with emotional issues.",
    icon: <TbGoGame />,
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
  },
  {
    id: 8,
    title: "Emotion-Focused Therapy (EFT)",
    description:
      "EFT is designed to help individuals understand and regulate their emotions.",
    icon: <BsEmojiSmile />,
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
  },
];
export default function TherapeuticModalities() {
  return (
    <div className="px-3 py-16 mx-auto max-w-screen-2xl md:px-0">
      <h2 className="text-center text-2xl md:text-5xl md:leading-snug font-bold text-[#1F2A37]">
        Mississauga therapists supporting individuals, couples & families in
        Mississauga, Brampton & surrounding areas.
      </h2>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mt-14">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <div className="p-4 mb-4 inline-block bg-[#D1E6E2] rounded-full">
              <div className="text-[#589086] text-3xl">{item.icon}</div>
            </div>
            <h3 className="text-xl font-bold text-[#1F2A37]">{item.title}</h3>
            <p className="text-[#1F2A37] mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
