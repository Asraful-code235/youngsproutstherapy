import { Inter, Montserrat, Noto_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import DefaultProviders from "@/components/providers/DefaultProviders";

const inter = Montserrat({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Young Sprouts | Behavioral Therapy for Kids & Teens | Vaughan",
  description:
    "Specialized behavior therapy for children & teens in Vaughan, York Region. Young Sprouts offers effective solutions for behavioral challenges & growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(notoSans.className, "bg-[#F8F8F8]")}>
        <DefaultProviders>
          <div className={cn("min-h-screen")}>{children}</div>
        </DefaultProviders>
      </body>
    </html>
  );
}
