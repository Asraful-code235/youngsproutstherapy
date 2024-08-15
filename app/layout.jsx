import "./globals.css";
import { cn } from "../lib/utils";
import DefaultProviders from "../components/providers/DefaultProviders";
import "@radix-ui/themes/styles.css";
import { getServiceCategoryList } from "@/lib/sanity/client";

export async function generateMetadata({ params }) {
  return processMetadata(params);
}

export async function processMetadata(params) {
  const url = "https://www.youngsproutstherapy.com";
  return {
    metadataBase: new URL(
      process.env.BASE_URL || "https://www.youngsproutstherapy.com/"
    ),
    title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
    description:
      "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
    openGraph: {
      type: "website",
      url,
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
      images: [
        {
          url: "/images/logo.png",
          width: 2500,
          height: 1041,
        },
      ],
    },

    alternates: {
      canonical: url,
    },
    twitter: {
      title: "Young Sprouts Therapy | Child, Teen & Family Therapy | Vaughan",
      description:
        "Psychotherapy and counseling for kids & teens in Vaughan. Find support for kids & teens struggling with anxiety, behavioral issues, ADHD, grief, trauma, and more.",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children }) {
  const serviceCategories = await getServiceCategoryList();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"bg-[#F8F8F8]"}>
        <DefaultProviders serviceCategories={serviceCategories}>
          <div className={cn("min-h-[40vh]")}>{children}</div>
        </DefaultProviders>
      </body>
    </html>
  );
}

export const revalidate = 3600;
