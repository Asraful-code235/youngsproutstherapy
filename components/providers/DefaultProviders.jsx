"use client";
import { useEffect, useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { AnimatePresence, motion } from "framer-motion";
import SearchTermContext from "../hooks/useSearchTerm";
import TopBar from "../shared/TopBar";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function DefaultProviders({ children, serviceCategories }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AnimatePresence mode="wait">
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Theme>
          <TopBar />
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
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="G-400HX81HQC"
        strategy="lazyOnload"
      />
    </AnimatePresence>
  );
}
