"use client";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Anxiety",
    description:
      "Empowering children and teens to manage anxiety through personalized strategies and resilience-building techniques.",
    link: "/approach-and-specialties",
  },
  {
    id: 2,
    title: "ADHD",
    description:
      "Helping children and teens harness their ADHD as a strength, improving focus and self-regulation through tailored strategies.",
    link: "/approach-and-specialties",
  },
  {
    id: 3,
    title: "Parenting",
    description:
      "Guiding parents to foster strong, healthy relationships with their children, while navigating the challenges and joys of parenthood.",
    link: "/adhd-therapy-for-kids-and-teens",
  },
  {
    id: 10,
    title: "Depression",
    description:
      "Helping children and teens overcome depression, using evidence-based therapies to foster resilience, promote positive thinking, and improve overall mental health.",
    link: "/approach-and-specialties",
  },
  {
    id: 5,
    title: "Behavioural Challenges",
    description:
      "​Addressing behavioral challenges in children and teens, using evidence-based approaches to promote positive change and improve home and school life.",
    link: "/approach-and-specialties",
  },
  {
    id: 6,
    title: "Emotional Regulation",
    description:
      "Enhancing emotional regulation in children and teens, using proven techniques to help them understand and manage their feelings for better mental health and relationships.",
    link: "/approach-and-specialties",
  },
  {
    id: 7,
    title: "Trauma",
    description:
      "Providing compassionate support for children and teens dealing with trauma, using therapeutic techniques to foster resilience and promote healing",
    link: "/approach-and-specialties",
  },
  {
    id: 8,
    title: "Learning Disabilities",
    description:
      "Supporting children and teens with learning disabilities, using tailored strategies to enhance their academic skills, confidence, and overall school experience.",
    link: "/approach-and-specialties",
  },
  {
    id: 9,
    title: "Grief",
    description:
      "Offering supportive therapy for children and teens navigating grief, helping them process their feelings and move forward with strength and resilience.",
    link: "/approach-and-specialties",
  },
  {
    id: 4,
    title: "Self-Esteem",
    description:
      "Boosting children's and teens' confidence and self-worth through strategies that promote positive self-perception and resilience.",
    link: "/approach-and-specialties",
  },
  {
    id: 11,
    title: "Autism Spectrum Disorder (ASD)",
    description:
      "Specializing in Autism Spectrum Disorder counseling, we help children and teens thrive by enhancing their social skills, managing emotions, and fostering independence.",
    link: "/approach-and-specialties",
  },
  {
    id: 12,
    title: "Learn More",
    description:
      "Dive deeper into our comprehensive range of services and discover how we tailor our therapeutic approaches to meet the unique needs of every child and family.",
    link: "/approach-and-specialties",
  },
];

const bgColors = ["#ffffff"];

const containerVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      // delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function PsychoTherapyHelp() {
  return (
    <motion.section className="py-14 bg-[#cca4a4]">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center md:text-5xl mb-14 text-white">
          How Psychotherapy Can Help
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col justify-between p-4 lg:p-6 bg-white rounded-lg cursor-pointer group"
              animate={{ backgroundColor: bgColors[index % bgColors.length] }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <h3 className="mb-3 lg:mb-4 text-3xl font-semibold text-center">
                  {feature.title}
                </h3>
                <p className="mt-4 lg:mt-6 mb-2 lg:mb-4 text-center text-gray-600">
                  {feature.description}
                </p>
              </div>

              <div className="flex items-center justify-end mt-8 transition-opacity duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100">
                <Link
                  href={feature.link}
                  className="inline-flex items-center bg-[#cca4a4] text-white p-2 rounded-full"
                >
                  <HiArrowLongRight className="text-2xl text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
