import React, { useEffect } from "react";
import MovieIntroSlider from "./MovieIntroSlider";
import { Play } from "lucide-react";
import { MovieStore } from "../../store/MovieStore";

const HeroSection = () => {
  const { activeHeroMovie, popularMovies } = MovieStore();

  return (
    <div className="h-screen w-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${popularMovies[activeHeroMovie]?.backdrop_path}`}
        alt={"Hero Image"}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="absolute z-30 h-full flex flex-col justify-end bottom-0 px-5 gap-5">
        <h1 className="text-5xl font-bold text-white">
          {popularMovies[activeHeroMovie]?.original_title}
        </h1>

        {/* Rating, RunTime & Genre Section */}
        <div className="flex gap-3 text-white">
          <div className="bg-black/40 p-2 rounded-2xl">
            ⭐ {popularMovies[activeHeroMovie]?.vote_average}
          </div>
          <div className="bg-black/40 p-2 rounded-2xl">
            {popularMovies[activeHeroMovie]?.release_date}
          </div>
          <div className="bg-black/40 p-2 rounded-2xl">
            {popularMovies[activeHeroMovie]?.original_language}
          </div>
        </div>

        <p className="text-white max-w-2xl">
          {popularMovies[activeHeroMovie]?.overview}
        </p>

        <div className="flex text-white gap-5">
          <button className="bg-[#0C3D78] p-3 rounded-full">
            <Play fill="white" />
          </button>
          <button className="bg-[#0C3D78] p-3 rounded-full">See More</button>
        </div>
      </div>
      <MovieIntroSlider />
    </div>
  );
};

export default HeroSection;
