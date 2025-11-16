import React, { useEffect } from "react";
import { MovieStore } from "../../store/MovieStore";

const Top10Section = () => {
  const { movies, getMovies, loading, error } = MovieStore();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    console.log("Movie Data: ", movies);
  }, [movies]);

  return (
    <div className="text-white">
      {/* Heading Section */}
      <div className="flex">
        <div className="flex px-5 gap-2">
          <h1 className="text-9xl font-bold uppercase text-transparent [-webkit-text-stroke:1px_#20B5FF] bg-linear-to-r from-[#20B5FF] to-transparent bg-clip-text font-unbounded">
            TOP 10
          </h1>
          <div className="flex flex-col justify-center gap-3 py-8">
            <p className="uppercase text-2xl font-unbounded">Movies</p>
            <p className="uppercase text-2xl font-unbounded">Today</p>
          </div>
        </div>
      </div>

      {/* Slider Section   */}
      <div></div>
    </div>
  );
};

export default Top10Section;
