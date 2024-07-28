import "./globals.css";
import { cn } from "../lib/utils";
import DefaultProviders from "../components/providers/DefaultProviders";
import "@radix-ui/themes/styles.css";
import { getAllServices } from "@/lib/sanity/client";

export const metadata = {
  title: "Young Sprouts | Behavioral Therapy for Kids & Teens | Vaughan",
  description:
    "Specialized behavior therapy for children & teens in Vaughan, York Region. Young Sprouts offers effective solutions for behavioral challenges & growth.",
};

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
