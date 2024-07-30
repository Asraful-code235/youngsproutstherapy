import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function HeroCover({ module }) {
  const imageProps =
    module && module?.coverImage ? urlForImage(module.coverImage) : null;
  return (
    <>
      <section className="flex flex-col-reverse items-center gap-4 md:flex-row">
        <div className="flex flex-col justify-center w-full px-6 lg:w-1/2 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 lg:mb-6 lg:text-4xl xl:text-5xl lg:leading-snug">
            {module?.title}
          </h2>
          <p className="mb-4 text-lg text-gray-600">{module?.description}</p>
          <div className="flex flex-col gap-2 mt-3 lg:flex-row md:flex-row md:gap-6">
            <Link href={`/${module.cta1}`}>
              <Button variant="brandButton" className="w-full lg:w-auto">
                Book A Free Consult
              </Button>
            </Link>
            <Link href={`tel:${module.cta2}`}>
              <Button
                variant="secondaryBrandButton"
                className="w-full lg:w-auto"
              >
                Call Now - {module.cta2}
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative w-full h-auto lg:w-1/2">
          <Image
            src={imageProps.src}
            {...(module.coverImage.blurDataURL && {
              placeholder: "blur",
              blurDataURL: module.coverImage.blurDataURL,
            })}
            alt={module.coverImage.alt || "Thumbnail"}
            priority={false}
            className="object-cover object-center aspect-[4/3]"
            width={1000}
            height={820}
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>
      </section>
    </>
  );
}
