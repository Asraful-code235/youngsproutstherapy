import Modules from "@/components/Modules/Modules";
import { getServiceBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);
  console.log("service", service);
  const url = `https://www.youngsproutstherapy.com/${service?.slug?.current}`;
  const ogImage = service?.mainImage
    ? urlForImage(service?.mainImage)
    : "/logo.png";
  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: service?.seoTitle,
    description: service?.seoDescription,
    openGraph: {
      type: "website",
      url,
      title: service?.seoTitle,
      description: service?.seoDescription,
      images: ogImage?.src,
    },

    alternates: {
      canonical: url,
    },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return <span>No page found</span>;
  return (
    <article className="">
      <Modules modules={service?.contentModules} />;
    </article>
  );
}
