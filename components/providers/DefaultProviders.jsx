"use client";
import { useState } from "react";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Theme } from "@radix-ui/themes";

import SearchTermContext from "../hooks/useSearchTerm";

export default function DefaultProviders({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Theme>
        <Navbar />
        {children}
        <Footer />
      </Theme>
    </SearchTermContext.Provider>
  );
}
