"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function FaqList({ faqData }) {
  return (
    <section className="max-w-4xl px-4 pt-12 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: open ? "#FAFAFA" : "",
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
              >
                <Disclosure.Button
                  className={`flex items-center pr-2 justify-between w-full text-left text-lg font-medium text-gray-900 bg-gray-50 border border-gray-200 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-colors duration-500 group ${
                    open ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="py-5 text-2xl font-semibold px-7 bg-teal-50 group-hover:bg-teal-600">
                      {`0${index + 1}`}
                    </div>
                    <span>{item.question}</span>
                  </div>
                  {open ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-500 transition-transform duration-500" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-500 transition-transform duration-500" />
                  )}
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py-4 text-gray-500 transition-all duration-500 ease-in-out bg-white border border-t-0 border-gray-200 rounded-b-lg">
                  {item.answer}
                </Disclosure.Panel>
              </motion.div>
            )}
          </Disclosure>
        ))}
      </div>
      <section>
        <p className="text-center text-lg font-medium mt-14">
          Don&apos;t see your question here? Send us a message through our
          Contact page, or e-mail us at{" "}
          <a
            href="mailto:info@youngsproutstherapy.com"
            className="text-blue-600 hover:underline"
          >
            info@youngsproutstherapy.com
          </a>
          .
        </p>
      </section>
    </section>
  );
}
