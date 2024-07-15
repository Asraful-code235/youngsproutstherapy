"use client";

import { A11y, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { SwiperNavButtons } from "./SwiperButtons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="px-3 py-16 mx-auto max-w-screen-2xl md:px-0">
      <div className="items-end justify-between block md:flex">
        <div>
          <h2 className="text-2xl md:text-5xl md:leading-snug font-bold text-[#1F2A37]">
            Meet Our Family and
          </h2>
          <h2 className="text-start md:text-end text-2xl md:text-5xl md:leading-snug font-bold text-[#1F2A37]">
            Child Therapists
          </h2>
        </div>
        <div>
          <p className="mt-3">
            We offer a variety of services to support your mindfulness journey.{" "}
            <br />
            Choose what best suits your needs.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="hidden md:block">
          <Link href="/teams">
            <Button variant="link">See more</Button>
          </Link>
        </div>

        <div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={40}
            slidesPerView="auto"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
          >
            {teamMember.map((member) => (
              <SwiperSlide
                key={member.id}
                className="w-full md:min-w-72 md:max-w-96 mt-14"
              >
                <div>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="bg-[#ceead6] rounded-lg w-full md:w-[400px] h-[400px] object-cover"
                  />
                  <p className="mt-2 text-xl font-semibold">{member.name}</p>
                </div>
              </SwiperSlide>
            ))}

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
