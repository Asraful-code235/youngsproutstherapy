"use client";
import Link from "next/link";
import { HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Anxiety",
    description:
      "Empowering children and teens to manage anxiety through personalized strategies and resilience-building techniques.",
    link: "/approach-and-specialties",
    src: "/images/therapy-anxiety.jpg",
  },
  {
    id: 2,
    title: "ADHD",
    description:
      "Helping children and teens harness their ADHD as a strength, improving focus and self-regulation through tailored strategies.",
    link: "/approach-and-specialties",
    src: "/images/knee.webp",
  },
  {
    id: 3,
    title: "Parenting",
    description:
      "Guiding parents to foster strong, healthy relationships with their children, while navigating the challenges and joys of parenthood.",
    link: "/adhd-therapy-for-kids-and-teens",
    src: "/images/hand.webp",
  },
  {
    id: 4,
    title: "Depression",
    description:
      "Helping children and teens overcome depression, using evidence-based therapies to foster resilience, promote positive thinking, and improve overall mental health.",
    link: "/approach-and-specialties",
    src: "/images/physical.jpg",
  },
  {
    id: 5,
    title: "Behavioural Challenges",
    description:
      "​Addressing behavioral challenges in children and teens, using evidence-based approaches to promote positive change and improve home and school life.",
    link: "/approach-and-specialties",
    src: "/images/psychiatrist-vs-therapist-500x334.jpg",
  },
  {
    id: 6,
    title: "Emotional Regulation",
    description:
      "Enhancing emotional regulation in children and teens, using proven techniques to help them understand and manage their feelings for better mental health and relationships.",
    link: "/approach-and-specialties",
    src: "/images/physical-therapy-dpt-scaled.jpg",
  },
  {
    id: 7,
    title: "Trauma",
    description:
      "Providing compassionate support for children and teens dealing with trauma, using therapeutic techniques to foster resilience and promote healing",
    link: "/approach-and-specialties",
    src: "/images/pt-homepage.jpg",
  },
  {
    id: 8,
    title: "Learning Disabilities",
    description:
      "Supporting children and teens with learning disabilities, using tailored strategies to enhance their academic skills, confidence, and overall school experience.",
    link: "/approach-and-specialties",
    src: "/images/medication-therapist-tapering-off_1200W-800x500.jpg",
  },
  {
    id: 9,
    title: "Grief",
    description:
      "Offering supportive therapy for children and teens navigating grief, helping them process their feelings and move forward with strength and resilience.",
    link: "/approach-and-specialties",
    src: "/images/psychiatrist-vs-therapist.jpeg",
  },
  {
    id: 4,
    title: "Self-Esteem",
    description:
      "Boosting children's and teens' confidence and self-worth through strategies that promote positive self-perception and resilience.",
    link: "/approach-and-specialties",
    src: "/images/blog_photo.webp",
  },
  {
    id: 11,
    title: "Autism Spectrum Disorder (ASD)",
    description:
      "Specializing in Autism Spectrum Disorder counseling, we help children and teens thrive by enhancing their social skills, managing emotions, and fostering independence.",
    link: "/approach-and-specialties",
    src: "/images/t-6.jpg",
  },
  {
    id: 12,
    title: "Learn More",
    description:
      "Dive deeper into our comprehensive range of services and discover how we tailor our therapeutic approaches to meet the unique needs of every child and family.",
    link: "/approach-and-specialties",
    src: "/images/Young physical therapist standing in an office.webp",
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
        <h2 className="text-3xl font-bold text-center text-white md:text-5xl mb-14">
          How Psychotherapy Can Help
        </h2>
        <motion.div
          className="grid grid-cols-1 gap-6 lg:gap-y-20 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.link}
              className=" transition-all duration-500 ease-out"
            >
              <motion.div
                className={` cursor-pointer group rounded-lg ${index % 3 === 1 ? "lg:-mt-6" : ""}`}
                animate={{ backgroundColor: bgColors[index % bgColors.length] }}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={feature.src}
                  alt="therapy_image"
                  className="object-cover object-center rounded-lg aspect-square"
                />
              </motion.div>
              <div className="flex items-center justify-center max-w-xs mx-auto">
                <div className="z-20 flex flex-col justify-between w-3/4 p-4 py-3 -mt-8 bg-[#fafafa] rounded-lg hover:bg-rose-100 ">
                  <div>
                    {index !== features.length - 1 && (
                      <h3 className="mb-2 font-semibold text-center md:text-lg">
                        {feature.title}
                      </h3>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <span className="inline-flex items-center justify-center gap-1">
                      <p className="text-sm">Learn more</p>
                      <HiArrowLongRight className="text-[#cca4a4] mt-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
