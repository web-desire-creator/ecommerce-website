"use client";
import ProductDisplay from "@/components/ProductDisplay";
import React from "react";
import { products } from "@/lib/utlis/mock";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
export default function Products() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        <div className="text-sm font-medium text-blue-900 leading-none">
          Products
        </div>
        <div className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Check What We Have
        </div>
      </div>
      <div className="invisible md:visible">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((item) => (
            <SwiperSlide>
              <Link href={`/All%20Products/${item.name}`}>
              <ProductDisplay
                key={item.id}
                img={item.image as StaticImageData}
                name={item.name}
                price={item.price}
              />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="visible md:invisible md:w-0 md:h-0">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((item) => (
            <SwiperSlide>
              <ProductDisplay
                key={item.id}
                img={item.image as StaticImageData}
                name={item.name}
                price={item.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
