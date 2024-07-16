"use client";

import React from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SwiperNavButtons = ({ swiperRef }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="space-x-3">
        <Button variant="outline" onClick={() => swiperRef.current.slidePrev()}>
          <HiArrowLongLeft className="text-xl text-brand-text-color-one" />
        </Button>
        <Button variant="outline" onClick={() => swiperRef.current.slideNext()}>
          <HiArrowLongRight className="text-xl text-brand-text-color-one" />
        </Button>
      </div>
      <div className="block md:hidden">
        <Link href="/team">
          <Button variant="link">See more</Button>
        </Link>
      </div>
    </div>
  );
};

export default SwiperNavButtons;
