import React, { useEffect, useState } from "react";
import { MovieStore } from "../../store/MovieStore";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Top10Section = () => {
  const { movies, getMovies, loading, error } = MovieStore();
  const [api, setApi] = useState(null);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div className="text-white px-5">
      {/* Header Section */}
      <div className="flex justify-between">
        <div className="flex">
          <div className="flex gap-2">
            <h1 className="text-9xl font-bold uppercase text-transparent [-webkit-text-stroke:1px_#20B5FF] bg-linear-to-r from-[#20B5FF] to-transparent bg-clip-text font-unbounded">
              TOP 10
            </h1>
            <div className="flex flex-col justify-center gap-3 py-8">
              <p className="uppercase text-2xl font-unbounded">Movies</p>
              <p className="uppercase text-2xl font-unbounded">Today</p>
            </div>
          </div>
        </div>

        {/* Slider Buttons   */}
        <div className="pr-6">
          {/* Carousel button comes here */}
          <div className="flex justify-center items-center gap-2 size-full pt-15 pr-10">
            <ChevronLeft
              className="scale-125 hover:scale-150 duration-300"
              onClick={() => api?.scrollPrev()}
            />
            <ChevronRight
              className="scale-125 hover:scale-150 duration-300"
              onClick={() => api?.scrollNext()}
            />
          </div>
        </div>
      </div>

      {/* Slider Section  */}
      <div className="h-96 overflow-hidden mt-12">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {movies.slice(0, 10).map((movie, index) => (
              <CarouselItem key={index} className="lg:basis-1/5">
                <div className="h-[70%] text-white rounded-2xl flex flex-col p-5 relative group">
                  <h1 className="text-[10rem] top-[40%] left-1 font-bold font-unbounded text-transparent [-webkit-text-stroke:1px_#20B5FF]  absolute group-hover:bg-linear-to-r group-hover:from-[#20B5FF] group-hover:to-transparent group-hover:bg-clip-text hover:z-10 group-hover:scale-125 group-hover:duration-500">
                    {index + 1}
                  </h1>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    alt={movie?.id}
                    className="size-full object-contain z-10 hover:scale-110 duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Top10Section;
