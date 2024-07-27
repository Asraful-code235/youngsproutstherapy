"use client";
import { createContext, useState, useContext } from "react";

const SearchTermContext = createContext();

export const useSearchTerm = () => useContext(SearchTermContext);

export default SearchTermContext;
