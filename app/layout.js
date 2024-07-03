import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Young Sprouts | Behavioral Therapy for Kids & Teens | Vaughan",
  description:
    "Specialized behavior therapy for children & teens in Vaughan, York Region. Young Sprouts offers effective solutions for behavioral challenges & growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <div className="bg-red-500 py-4">Header</div>
        <div className={cn("min-h-screen")}>{children}</div>
        <div className="bg-red-500 py-4">Footer</div>
      </body>
    </html>
  );
}
