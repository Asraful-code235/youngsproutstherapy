import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Daniela, MSW",
    img: "/images/youngsproutstherapy-image-03.webp",
    bg: "bg-[#F8F8F8]",
    role: "Child Psychologist",
  },
  {
    id: 2,
    name: "Lianne, RP(Q)",
    img: "/images/youngsproutstherapy-image-04.webp",
    role: "ADHD Specialist",
  },
  {
    id: 3,
    name: "Marni, RP(Q)",
    img: "/images/youngsproutstherapy-image-05.webp",
    role: "ADHD Specialist",
  },
  {
    id: 4,
    name: "Riki",
    img: "/images/youngsproutstherapy-image-06.webp",
    role: "Psychologist",
  },
];
export default function Teams() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center md:text-5xl">
          Our Team
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-center mb-14">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={member.img}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold">{member.name}</h3>
                <p className="mb-4 text-indigo-600">{member.role}</p>
                {/* <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 transition-colors duration-300 hover:text-blue-700"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 transition-colors duration-300 hover:text-blue-600"
                  >
                    <FaTwitter size={24} />
                  </a>
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-colors duration-300 hover:text-blue-800"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
