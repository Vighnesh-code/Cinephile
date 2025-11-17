import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Slider = ({ movieData, api, setApi }) => {
  return (
    <div className="px-1 min-h-auto py-5">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {movieData.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/6">
              <div className="text-white">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                  alt="Carousel Item"
                  className="object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Slider;
