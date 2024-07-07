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
    icon: <PiBrainLight />,
  },
  {
    id: 2,
    title: "Narrative Therapy",
    icon: <SlBookOpen />,
  },
  {
    id: 3,
    title: "Solution-Focused Therapy",
    icon: <GoLightBulb />,
  },
  {
    id: 4,
    title: "Dialectical Behaviour Therapy (DBT)",
    icon: <TiMessages />,
  },
  {
    id: 5,
    title: "Art Therapy",
    icon: <TfiBrushAlt />,
  },
  {
    id: 6,
    title: "Play Therapy",
    icon: <TbGoGame />,
  },
  {
    id: 7,
    title: (
      <div>
        Acceptance and Commitment <br /> Therapy (ACT)
      </div>
    ),
    icon: <SiAdguard />,
  },
  {
    id: 7,
    title: "Emotion-Focused Therapy (EFT) ",
    icon: <BsEmojiSmile />,
  },
  {
    id: 8,
    title: (
      <div>
        Parent-Child Interaction <br /> Therapy (PCIT)
      </div>
    ),
    icon: <MdFamilyRestroom />,
  },
];

export default function TherapeuticModalities() {
  return (
    <div className="py-16 max-w-screen-2xl mx-auto md:px-0 px-3">
      <h2 className="text-center text-2xl md:text-5xl md:leading-snug font-bold text-[#1F2A37]">
        Therapeutic Modalities Used <br />
        in Counselling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-12">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="p-3 mb-4 inline-block bg-[#D1E6E2] rounded-lg text-[#589086] text-2xl">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl text-center font-bold text-[#1F2A37]">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
