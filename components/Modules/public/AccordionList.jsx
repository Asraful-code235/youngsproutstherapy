"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{
        backgroundColor: isOpen ? "#FAFAFA" : "",
        boxShadow: isOpen
          ? "0px 10px 20px rgba(0, 0, 0, 0.15)"
          : "0px 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="border-b px-2 py-3 border-gray-300 text-left hover:bg-gray-100 transition-colors duration-300"
    >
      <button
        className="flex justify-between items-center w-full py-4 gap-4 focus:outline-none "
        onClick={toggleOpen}
      >
        <span className="text-xl lg:text-2xl text-left">{item.subject}</span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" />
        )}
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-sm lg:text-lg">{item.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default function AccordionList({ module, isLast }) {
  if (!module) return null;

  return (
    <section className="w-full my-6 px-4">
      <section className="max-w-5xl mx-auto tracking-wide flex flex-col gap-8 lg:gap-[64px]">
        <h3 className="text-2xl lg:text-[48px] font-medium leading-[36px] lg:leading-[56px] mb-4 text-center">
          {module.title}
        </h3>
        <div>
          {module.items.map((item) => (
            <AccordionItem key={item._key} item={item} />
          ))}
        </div>
      </section>
      {isLast && (
        <div className="w-full flex flex-wrap gap-4 items-center justify-center mt-8 transition-all duration-300 ease-in-out">
          <Button className="bg-[#ab6969] hover:bg-[#ab6969] hover:bg-opacity-80 !min-w-[340px]">
            <Link href="https://www.youngsproutstherapy.com/" target="_blank">
              Book A Free 15-minute Consultation
            </Link>
          </Button>
          <Button className="!min-w-[350px] text-[#ab6969] hover:!text-white hover:!bg-[#ab6969] border !border-[#ab6969] bg-white">
            <Link href="/fees">Fees</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
