import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function HeroCover({ module }) {
  const imageProps =
    module && module?.coverImage ? urlForImage(module.coverImage) : null;
  return (
    <>
      <section className="relative py-24 md:py-56 px-6">
        <Image
          src={imageProps.src}
          {...(module.coverImage.blurDataURL && {
            placeholder: "blur",
            blurDataURL: module.coverImage.blurDataURL,
          })}
          alt={module.coverImage.alt || "Thumbnail"}
          priority={false}
          className="object-cover object-center z-0"
          fill
          sizes="(max-width: 768px) 30vw, 33vw"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl md:leading-snug text-center font-bold text-white max-w-4xl mx-auto">
            {module.title}
          </h2>
          <div className="mt-6 flex flex-col lg:flex-row md:flex-row justify-center gap-2 md:gap-6">
            <Link href={`/${module.cta1}`}>
              <Button variant="brandButton" className="w-full">
                Book A Free Consult
              </Button>
            </Link>
            <Link href={`tel:${module.cta2}`}>
              <Button variant="secondaryBrandButton" className="w-full">
                Call Now - {module.cta2}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
