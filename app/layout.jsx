import "./globals.css";
import { cn } from "../lib/utils";
import DefaultProviders from "../components/providers/DefaultProviders";
import "@radix-ui/themes/styles.css";
import { getAllServices } from "@/lib/sanity/client";

export async function generateMetadata({ params }) {
  return processMetadata(params);
}

export async function processMetadata(params) {
  const url = "https://www.youngsproutstherapy.com/";
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
      images: "/images/logo.png",
    },

    alternates: {
      canonical: url,
      types: {
        "application/rss+xml": "https://www.youngsproutstherapy.com/rss.xml",
      },
    },
  };
}

export default async function RootLayout({ children }) {
  const services = await getAllServices();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"bg-[#F8F8F8]"}>
        <DefaultProviders services={services}>
          <div className={cn("min-h-screen")}>{children}</div>
        </DefaultProviders>
      </body>
    </html>
  );
}
