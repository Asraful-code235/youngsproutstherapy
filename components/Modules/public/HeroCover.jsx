import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function HeroCover({ module, utils }) {
  const imageProps =
    module && module?.coverImage ? urlForImage(module.coverImage) : null;

  if (!module) return null;
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 h-auto lg:h-[70vh]">
      <div className="flex flex-col gap-4 justify-center w-full px-6 lg:px-12 order-2 lg:order-2">
        <p className="text-lg max-lg:text-center font-medium text-left lg:text-xl text-[#85a7b1]">
          Young Sprouts
        </p>
        <h2 className="text-4xl lg:text-[48px] font-medium text-center text-gray-900 lg:mb-6 leading-[36px] lg:leading-[56px] lg:text-left">
          {utils?.title}
        </h2>
        <p className="text-lg max-lg:text-center font-normal tracking-tight text-left lg:text-xl lg:max-w-[495px]">
          {utils?.pageTitle}
        </p>

        <div className="flex flex-col flex-wrap items-center w-full mt-4 gap-2 lg:flex-row lg:gap-6 lg:w-full">
          <Link href={`${module.cta1}`} target="_blank">
            <Button
              variant="brandButton"
              className="rounded-full lg:w-auto md:text-base max-lg:min-w-[270px]"
            >
              Book A Free Consult
            </Button>
          </Link>
          <Link href={`tel:${module.cta2}`}>
            <Button
              variant="outline"
              className="rounded-full lg:w-auto md:text-base max-lg:min-w-[270px]"
            >
              Call Now - {module.cta2}
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative order-1 h-[35vh] lg:h-full lg:order-2">
        <Image
          src={imageProps.src}
          {...(module.coverImage.blurDataURL && {
            placeholder: "blur",
            blurDataURL: module.coverImage.blurDataURL,
          })}
          alt={module.coverImage.alt || "Thumbnail"}
          priority={false}
          layout="fill"
          className=" w-full h-full object-center object-cover aspect-auto"
        />
      </div>
    </section>
  );
}
