"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const faqData = [
  {
    question: "Are your services covered by insurance?",
    answer:
      "Most of our services are covered by common workplace benefits plans. Please check with your employer for coverage details under social work and registered psychotherapists.",
  },
  {
    question: "What is the therapy process like?",
    answer:
      "The therapy process is a collaborative journey where we work together to address your concerns.",
  },
  {
    question: "What is your therapeutic method?",
    answer:
      "We use a variety of evidence-based approaches tailored to each individual's needs.",
  },
  {
    question: "How long does the therapy process take?",
    answer:
      "The length of therapy varies depending on the individual’s needs and goals.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours' notice for cancellations to avoid being charged for the session.",
  },
];

export default function Faq() {
  return (
    <section className="max-w-4xl px-4 py-12 mx-auto">
      <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex items-center justify-between w-full text-left text-lg font-medium text-gray-900 bg-gray-50 border border-gray-200  hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 transition-colors duration-500 group ${
                    open ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="py-5 text-2xl font-semibold px-7 bg-teal-50 group-hover:bg-teal-600">
                      {`0${index + 1}`}
                    </div>
                    <span>{item.question}</span>
                  </div>
                  {/* <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-gray-500 transition-transform duration-500`}
                  /> */}
                </Disclosure.Button>
                <Disclosure.Panel className="px-6 py-4 text-gray-500 transition-all duration-500 ease-in-out bg-white border border-t-0 border-gray-200 rounded-b-lg">
                  {item.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
}
