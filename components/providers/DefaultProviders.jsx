"use client";
import { useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { motion, AnimatePresence } from "framer-motion";

import SearchTermContext from "../hooks/useSearchTerm";

export default function DefaultProviders({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AnimatePresence mode="wait">
      <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
        <Theme>
          <Navbar />
          <main className="py-20"> {children}</main>
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
