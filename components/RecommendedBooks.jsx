"use client";

import Image from "next/image";
import defaultImage from "../assets/images/pexels-max-rahubovskiy-6969866.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

import { Autoplay } from "swiper";
import "swiper/css/autoplay";

function RecommendedBooks({ data }) {
  return (
    <section className="w-full px-12">
      <Swiper
        spaceBetween={1}
        slidesPerView={12}
        modules={[Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.map(({ image_url, id }) => (
          <SwiperSlide key={id}>
            <div className="relative h-20 w-20 md:h-60 md:w-40 shadow-md hover:shadow-xl hover:scale-95 transition">
              <Link href={`/book/${id}`}>
                <Image
                  src={image_url ? image_url : defaultImage}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="photo"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default RecommendedBooks;
