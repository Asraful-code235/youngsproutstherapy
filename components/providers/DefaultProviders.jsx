"use client";
import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import SearchTermContext from "../hooks/useSearchTerm";
import { usePathname } from "next/navigation";

export default function DefaultProviders({ children, serviceCategories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname.includes("studio")) {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, [pathname]);
  return (
    <AnimatePresence mode="wait">
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Theme>
          <Navbar serviceCategories={serviceCategories} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="pt-[100px]"
          >
            {children}
          </motion.div>
          <ProgressBar
            height="3px"
            color="#ebb1b1"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Footer />
        </Theme>
      </SearchTermContext.Provider>
    </AnimatePresence>
  );
}
