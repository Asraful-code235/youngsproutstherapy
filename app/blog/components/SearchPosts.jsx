"use client";

import { useSearchTerm } from "@/components/hooks/useSearchTerm";
import { TextField } from "@radix-ui/themes";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function SearchPosts() {
  const { searchTerm, setSearchTerm } = useSearchTerm();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  const debouncedSearch = (term) => {
    let timeoutId;

    return () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDebouncedSearchTerm(term);
      }, 1000);
    };
  };

  useEffect(() => {
    const handler = debouncedSearch(searchTerm);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  return (
    <div>
      <TextField.Root
        placeholder="Search the blogs…"
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className="lg:w-96"
      >
        <TextField.Slot>
          <FaMagnifyingGlass />
        </TextField.Slot>
      </TextField.Root>
    </div>
  );
}
