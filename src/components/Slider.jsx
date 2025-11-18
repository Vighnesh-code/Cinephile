import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

const Slider = ({ movieData, api, setApi }) => {
  return (
    <div className="px-1 min-h-auto py-5">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {movieData.map((movie, index) => (
            <CarouselItem key={index} className="basis-1/6">
              <Link to={`/movie/${movie?.id}`}>
                <div className="text-white">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt="Carousel Item"
                    className="object-contain hover:cursor-pointer hover:scale-y-110 duration-300"
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Slider;
