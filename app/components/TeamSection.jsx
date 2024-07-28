"use client";

import { useRef } from "react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import SwiperNavButtons from "./SwiperButtons";

const teamMember = [
  {
    id: 1,
    name: "Daniela, MSW",
    img: "/images/youngsproutstherapy-image-03.webp",
    bg: "bg-[#F8F8F8]",
  },
  {
    id: 2,
    name: "Lianne, RP(Q)",
    img: "/images/youngsproutstherapy-image-04.webp",
  },
  {
    id: 3,
    name: "Marni, RP(Q)",
    img: "/images/youngsproutstherapy-image-05.webp",
  },
  {
    id: 4,
    name: "Riki",
    img: "/images/youngsproutstherapy-image-06.webp",
  },
  {
    id: 5,
    name: "Yakov",
    img: "/images/youngsproutstherapy-image-07.webp",
  },
];

const TeamSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="px-4 py-28 mx-auto max-w-screen-2xl md:px-8">
      <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-2">
        <div className="flex flex-col gap-4 col-span-1 -mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#cca4a4] tracking-wide ">
            Meet Our Family and Child Therapists
          </h2>
          <p className=" text-base md:text-lg text-[#1F2A37]">
            We offer a variety of services to support your mindfulness journey.
            <br className="hidden md:block" />
            Choose what best suits your needs.
          </p>
          <div className="">
            <Link href="/teams">
              <Button
                variant="outline"
                className="text-white !bg-[#ab6969] hover:text-white hover:!bg-opacity-75 hover:shadow"
              >
                See more
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full  mt-10 md:mt-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
              },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {teamMember.map((member) => (
              <SwiperSlide
                key={member.id}
                className="flex justify-center py-10 "
              >
                <div className="flex flex-col items-center justify-between w-full h-full p-4 text-center bg-white border rounded-lg shadow-lg md:max-w-xs md:h-80">
                  <div className="h-[400px] overflow-hidden">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={300}
                      height={400}
                      className="object-cover w-full h-full  border rounded-lg "
                    />
                  </div>
                  <p className="mt-4 text-xl font-semibold text-[#1F2A37]">
                    {member.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="md:flex md:justify-end">
            <SwiperNavButtons swiperRef={swiperRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
