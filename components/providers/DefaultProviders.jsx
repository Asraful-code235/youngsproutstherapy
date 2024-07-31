"use client";
import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import SearchTermContext from "../hooks/useSearchTerm";

export default function DefaultProviders({ children, services }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Theme>
          <Navbar services={services} />
          <main className="pt-[100px]"> {children}</main>
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
