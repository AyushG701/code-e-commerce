import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function Slider({ sliderList }) {
  console.log("from sliderpage", sliderList);
  return (
    <Carousel className="relative overflow-hidden mt-8 ease-linear">
      <CarouselContent className="flex transition-transform duration-150 ease-in-out">
        {sliderList.map((slider, index) => (
          <CarouselItem
            key={index}
            className="flex-none w-full" // Ensures each item takes full width
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL +
                slider.attributes?.image?.data?.[0]?.attributes?.url
              }
              width={1000}
              height={400}
              alt="slider"
              className="w-[90%] h-[200px] md:h-[500px] object-cover rounded-2xl mx-auto antialiased"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full" />
    </Carousel>
  );
}

export default Slider;
