import Modules from "@/components/Modules/Modules";
import { getServiceBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);

  const url = `https://www.youngsproutstherapy.com/${service?.slug?.current}`;
  const ogImage = service?.mainImage
    ? urlForImage(service?.mainImage)
    : "/images/logo.png";

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
  const ogImage = service?.mainImage
    ? urlForImage(service?.mainImage)
    : "/images/logo.png";
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": [
      "MedicalWebPage",
      "WebPage",
      "LocalBusiness",
      "MedicalBusiness",
      "HealthAndBeautyBusiness",
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.youngsproutstherapy.com/${service?.slug?.current}`,
    },

    name: service?.seoTitle,
    description: service?.seoDescription,
    url: `https://www.youngsproutstherapy.com/${service?.slug?.current}`,
    image: ogImage?.src,
    author: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
    },
    publisher: {
      "@type": "Organization",
      name: "Young Sprouts Therapy",
      logo: {
        "@type": "ImageObject",
        url: "https://www.youngsproutstherapy.com/logo.png",
      },
    },
    inLanguage: "en-CA",
    about: {
      "@type": "Thing",
      name: service.seoTitle,
      description: service.seoDescription,
      sameAs: "https://en.wikipedia.org/wiki/Anxiety_disorder",
    },
    keywords: [
      "anxiety therapy",
      "child anxiety",
      "teen anxiety",
      "Vaughan anxiety therapist",
    ],

    mainEntity: {
      "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
      name: "Young Sprouts Therapy",
      telephone: "(289) 579-4769",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1137 Centre Street, Suite #204",
        addressLocality: "Thornhill",
        addressRegion: "ON",
        postalCode: "L4J 3M6",
        addressCountry: "CA",
      },
      description:
        "At Young Sprouts Therapy, we offer specialized psychological services for children, teens, and families, including Cognitive Behavioural Therapy (CBT), Play Therapy, Art Therapy, and more.",
      areaServed: [
        {
          "@type": "Place",
          name: "Thornhill",
        },
        {
          "@type": "Place",
          name: "Richmond Hill",
        },
        {
          "@type": "Place",
          name: "Vaughan",
        },
        {
          "@type": "Place",
          name: "Aurora",
        },
        {
          "@type": "Place",
          name: "Newmarket",
        },
        {
          "@type": "Place",
          name: "Toronto",
        },
        {
          "@type": "Place",
          name: "North York",
        },
        {
          "@type": "Place",
          name: "Markham",
        },
      ],
    },
  };

  if (!service) return <span>No page found</span>;
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Modules modules={service?.contentModules} />;
    </article>
  );
}
