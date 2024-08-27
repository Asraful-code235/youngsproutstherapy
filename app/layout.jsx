import "./globals.css";
import { cn } from "../lib/utils";
import DefaultProviders from "../components/providers/DefaultProviders";
import "@radix-ui/themes/styles.css";
import { getServiceCategoryList } from "@/lib/sanity/client";
import Script from "next/script";

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
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KZHGKVZ');
          `,
        }}
      />
      <body className={"bg-[#F8F8F8]"}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KZHGKVZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <DefaultProviders serviceCategories={serviceCategories}>
          <div className={cn("min-h-[40vh]")}>{children}</div>
        </DefaultProviders>
      </body>
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-10834730946"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-10834730946');

        `}
      </Script> */}
    </html>
  );
}

export const revalidate = 3600;
