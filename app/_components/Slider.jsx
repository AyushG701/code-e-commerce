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
    <Carousel className="relative overflow-hidden">
      <CarouselContent className="flex overflow-x-hidden">
        {sliderList.map((slider, index) => (
          <CarouselItem key={index} className="flex-none">
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL +
                slider.attributes?.image?.data?.[0]?.attributes?.url
              }
              width={1000}
              height={400}
              alt="slider"
              className="w-[90%] h-[200px] md:h-[400px] object-cover rounded-2xl"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2" />
    </Carousel>
  );
}

export default Slider;
