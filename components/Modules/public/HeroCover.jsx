import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function HeroCover({ module }) {
  const imageProps =
    module && module?.coverImage ? urlForImage(module.coverImage) : null;

  if (!module) return null;
  return (
    <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 h-auto lg:h-[70vh]">
      <div className="flex flex-col justify-center  w-full px-6 lg:px-12 order-2 lg:order-2">
        <h2 className="text-2xl lg:text-[48px] font-medium text-center text-gray-900 lg:mb-6 leading-[36px] lg:leading-[56px] lg:text-left">
          {module?.title}
        </h2>
        <p className="mb-4 text-lg text-gray-600">{module?.description}</p>
        <div className="flex flex-col flex-wrap items-center w-full gap-2 mt-3 lg:flex-row lg:gap-6 lg:w-full">
          <Link href={`${module.cta1}`}>
            <Button
              variant="brandButton"
              className="rounded-full lg:w-auto md:text-base"
            >
              Book A Free Consult
            </Button>
          </Link>
          <Link href={`tel:${module.cta2}`}>
            <Button
              variant="outline"
              className="rounded-full lg:w-auto md:text-base"
            >
              Call Now - {module.cta2}
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative order-1 h-[40vh] lg:h-full lg:order-2">
        <Image
          src={imageProps.src}
          {...(module.coverImage.blurDataURL && {
            placeholder: "blur",
            blurDataURL: module.coverImage.blurDataURL,
          })}
          alt={module.coverImage.alt || "Thumbnail"}
          priority={false}
          layout="fill"
          className=" w-full h-full object-center object-cover"
        />
      </div>
    </section>
  );
}
