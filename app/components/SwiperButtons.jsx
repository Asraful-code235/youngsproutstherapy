"use client";

import React from "react";
import { useSwiper } from "swiper/react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-between">
      <div className="mt-4 space-x-3">
        <Button variant="outline" onClick={() => swiper.slidePrev()}>
          <HiArrowLongLeft className="text-xl text-brand-text-color-one" />
        </Button>
        <Button variant="outline" onClick={() => swiper.slideNext()}>
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
