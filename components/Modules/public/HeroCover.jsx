import { Button } from "@/components/ui/button";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function HeroCover({ module }) {
  const imageProps =
    module && module?.coverImage ? urlForImage(module.coverImage) : null;
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 h-auto lg:h-[70vh]">
      <div className="flex flex-col justify-center order-2 w-full px-6 lg:px-12 md:order-1">
        <h2 className="text-3xl font-bold text-center text-gray-900 lg:mb-6 lg:text-4xl xl:text-5xl lg:leading-snug md:text-left">
          {module?.title}
        </h2>
        <p className="mb-4 text-lg text-gray-600">{module?.description}</p>
        <div className="flex flex-col items-center w-full gap-2 mt-3 lg:flex-row md:flex-row md:gap-6 md:w-full">
          <Link href={`/${module.cta1}`}>
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

      <Image
        src={imageProps.src}
        {...(module.coverImage.blurDataURL && {
          placeholder: "blur",
          blurDataURL: module.coverImage.blurDataURL,
        })}
        alt={module.coverImage.alt || "Thumbnail"}
        priority={false}
        className="order-1 w-full h-[40vh] md:h-full md:order-2"
        width={1000}
        height={820}
      />
    </section>
  );
}
