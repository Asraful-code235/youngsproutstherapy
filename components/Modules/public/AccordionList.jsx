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
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="border-b px-2 rounded-md border-gray-300 text-left hover:bg-gray-100 transition-colors duration-300"
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
        transition={{ duration: 0.5 }}
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
      <section className="max-w-5xl mx-auto tracking-wide">
        <h3 className="text-3xl lg:text-[36px] font-bold mb-4">
          {module.title}
        </h3>
        {module.items.map((item) => (
          <AccordionItem key={item._key} item={item} />
        ))}
      </section>
      {isLast && (
        <div className="w-full flex flex-wrap gap-4 items-center justify-center mt-8">
          <Button className="bg-[#cca4a4] hover:bg-[#e2b6b6] !min-w-[340px]">
            <Link href="https://www.youngsproutstherapy.com/" target="_blank">
              Book A Free 15-minute Consultation
            </Link>
          </Button>
          <Button className="!min-w-[350px]">
            <Link href="/fees">Fees</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
