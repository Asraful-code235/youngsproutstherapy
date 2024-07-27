import "./globals.css";
import { cn } from "../lib/utils";
import DefaultProviders from "../components/providers/DefaultProviders";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Young Sprouts | Behavioral Therapy for Kids & Teens | Vaughan",
  description:
    "Specialized behavior therapy for children & teens in Vaughan, York Region. Young Sprouts offers effective solutions for behavioral challenges & growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={"bg-[#F8F8F8]"}>
        <DefaultProviders>
          <div className={cn("min-h-screen")}>{children}</div>
        </DefaultProviders>
      </body>
    </html>
  );
}
