import React, { useEffect } from "react";
import { MovieStore } from "../../store/MovieStore";
import { Skeleton } from "./ui/skeleton";

const MovieIntroSlider = () => {
  const { popularMovies, activeHeroMovie, setActiveHeroMovie, loading } =
    MovieStore();

  // useEffect(() => {
  //   getPopularMovies();
  // }, []);

  // useEffect(() => {
  //   console.log("Popular Movie Data: ", popularMovies);
  // }, [popularMovies]);

  return (
    <div className="absolute text-red-500 bottom-3 right-7 z-100">
      <div className="flex gap-3">
        {loading && <Skeleton className="h-15 w-25 rounded-lg duration-300" />}
        {!loading &&
          popularMovies.slice(0, 4).map((poster, index) => (
            <div
              className={`h-15 w-25 rounded-lg duration-300 ${
                index === activeHeroMovie &&
                "scale-x-150 scale-150 border-[#0C3D78] border-4"
              }`}
              key={index}
              onClick={() => setActiveHeroMovie(index)}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${poster?.poster_path}`}
                alt="Image"
                className="object-cover size-full"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieIntroSlider;
