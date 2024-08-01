import { getAllTeamList } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Team | Expert Child & Teen Therapists in Vaughan",
  description:
    "Meet our dedicated team of child & teen therapists at Young Sprouts Therapy in Vaughan. Specializing in CBT, play therapy, art therapy, and more.",
};

export default async function Teams() {
  const teams = await getAllTeamList();

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "Organization",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    name: "Young Sprouts Child, Teen and Family Therapy",
    description:
      "Meet our dedicated team of therapists at Young Sprouts Child, Teen and Family Therapy. Our therapists are experienced in modalities such as CBT, play therapy, art therapy, narrative therapy and more. Discover the right therapist to support you and your family's mental health journey.",
    url: "https://www.youngsproutstherapy.com/team",
    telephone: "(289) 579-4769",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1137 Centre Street, Suite #204",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 3M6",
      addressCountry: "CA",
    },
    member: [
      {
        "@type": "Person",
        name: "Daniela Shulman",
        jobTitle: "Clinical Director",
        description:
          "Daniela is a child and family therapist with over a decade of experience working with children and families. She uses a collaborative approach when working with families in order to foster positive changes in their lives.",
      },
      {
        "@type": "Person",
        name: "Jessica Shock",
        jobTitle: "RSW, MSW",
        description:
          "Jessica Shock is a clinical registered social worker and psychotherapist with a Masters of Social Work from the University of Windsor. Jessica has a passion for working with children, youth, and adults.",
      },
      {
        "@type": "Person",
        name: "Nikki Bianchi",
        jobTitle: "Registered Psychotherapist (Qualifying)",
        description:
          "Nikki Bianchi is a Registered Psychotherapist and MACP (Qualifying). Her practice is focused on nurturing the mental health and well-being of women and girls through the lifecycle.",
      },
      {
        "@type": "Person",
        name: "Sivan Ibragimov",
        jobTitle: "Registered Psychotherapist (Qualifying)",
        description:
          "Sivan enjoys working with different populations and age groups, especially with teenagers, adults and families.",
      },
      {
        "@type": "Person",
        name: "Elizabeth Warner",
        jobTitle: "RSW, MSW",
        description:
          "Elizabeth Warner is a clinical social worker and psychotherapist with a Masters degree from the University of Windsor. Elizabeth is passionate about working with children, youth and their families.",
      },
    ],
  };
  return (
    <section className="py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center md:text-5xl text-[#cca4a4]">
          Our Team
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-center mb-14">
          We’re a dynamic group of individuals who are passionate about what we
          do and dedicated to delivering the best results for our clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map((member) => {
            const imageProps =
              member && member?.mainImage
                ? urlForImage(member.mainImage)
                : null;
            return (
              <Link
                href={`/teams/${member?.slug}`}
                key={member?._id}
                className="overflow-hidden  shadow-md rounded-md p-4 flex flex-col gap-4 lg:gap-6"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#cca4a4]">
                  {member?.name}
                </h2>
                <h4 className=" -mt-2">{member?.position}</h4>
                <div className="relative text-center mx-auto aspect-square max-w-lg w-full max-h-[400px] group overflow-hidden">
                  <Image
                    src={imageProps.src}
                    {...(member?.mainImage.blurDataURL && {
                      placeholder: "blur",
                      blurDataURL: member.mainImage.blurDataURL,
                    })}
                    alt={member.mainImage.alt || "Thumbnail"}
                    priority={false}
                    className="object-cover transition-all object-center rounded group-hover:scale-[1.02] group-hover:opacity-80 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out "
                    fill
                    sizes="(max-width: 768px) 60vw, 40vw"
                  />
                </div>
                <div className="flex flex-col">
                  <p className=" text-sm text-left font-light line-clamp-5">
                    {member?.description}{" "}
                  </p>
                  <span className="text-[#cca4a4] font-medium">
                    Read More ...{" "}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
