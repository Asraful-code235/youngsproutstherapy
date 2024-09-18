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
    <section className="max-w-5xl mx-auto w-full px-6">
      <section className=" mx-auto tracking-wide flex flex-col gap-8 ">
        <h3 className="text-2xl text-[#ab6969] lg:text-[32px] font-medium leading-[36px] lg:leading-[56px] text-left">
          {module.title}
        </h3>
        <div className="-mt-4">
          {module.items.map((item) => (
            <AccordionItem key={item._key} item={item} />
          ))}
        </div>
      </section>
    </section>
  );
}
