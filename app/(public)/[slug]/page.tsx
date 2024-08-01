import Modules from "@/components/Modules/Modules";
import { getServiceBySlug } from "@/lib/sanity/client";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function processMetadata(service: any) {
  const url = `https://www.youngsproutstherapy.com/${service?.slug?.current}`;

  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      type: "website",
      url,
      title: service.seoTitle,
      description: service.seoDescription,
      images: service.mainImage,
    },

    alternates: {
      canonical: url,
    },
  };
}
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug);
  return processMetadata(service);
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
