import { getAllTeamList } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default async function Teams() {
  const teams = await getAllTeamList();
  return (
    <section className="py-16">
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
