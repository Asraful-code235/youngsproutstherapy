import FaqList from "./components/FaqList";

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
  return <FaqList faqData={faqData} />;
}
