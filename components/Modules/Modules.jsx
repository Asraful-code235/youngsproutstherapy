"use client";

import HeroPlain from "./public/HeroPlain";
import HeroCover from "./public/HeroCover";
import TherapyInfo from "./public/TherapyInfo";
import TherapySupport from "./public/TherapySupport";
import GroupBox from "./public/GroupBox";
import AccordionList from "./public/AccordionList";
import List from "./public/List";
import RichList from "./public/RichList";
import Subscription from "./public/Subscription";

export default function Modules({ modules, utils }) {
  let lastAccordionIndex = -1;
  modules.forEach((module, index) => {
    if (module._type === "accordion") {
      lastAccordionIndex = index;
    }
  });

  console.log("utils", utils);

  return (
    <section className="flex flex-col gap-8 lg:gap-[42px]">
      {modules?.map((module, index) => {
        switch (module._type) {
          case "hero.plain":
            return <HeroPlain module={module} key={module._key} />;
          case "hero.cover":
            return (
              <HeroCover module={module} key={module._key} utils={utils} />
            );

          case "therapy.features":
            return <TherapyInfo module={module} key={module._key} />;

            {
              /* case "hero.cover":
            return <TherapySupport />; */
            }
          case "group.box":
            return <GroupBox module={module} key={module._key} />;
          case "accordion":
            return (
              <AccordionList
                module={module}
                key={module._key}
                isLast={index === lastAccordionIndex}
              />
            );
          case "list":
            return <List module={module} key={module._key} />;
          case "rich.list":
            return <RichList module={module} key={module._key} />;
          case "emailSubscriptionModule":
            return <Subscription module={module} key={module._key} />;

          default:
            return <div data-type={module._type} key={module._key} />;
        }
      })}
    </section>
  );
}
