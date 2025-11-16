import React from "react";
import MoviePoster1 from "/assets/Movie Poster 1.jpg";
import MoviePoster2 from "/assets/Movie Poster 2.avif";
import MoviePoster3 from "/assets/Movie Poster 3.webp";
import MoviePoster4 from "/assets/Movie Poster 4.webp";

const MovieIntroSlider = () => {
  const moviePosters = [MoviePoster1, MoviePoster2, MoviePoster3, MoviePoster4];

  return (
    <div className="absolute text-red-500 bottom-3 right-7 z-50">
      <div className="flex gap-3">
        {moviePosters.map((poster, index) => (
          <div
            className="h-15 w-25 rounded-lg border-[#0C3D78] border-3 hover:scale-125 duration-300 hover:border-[#0C3D78] hover:border-3 hover:scale-x-125"
            key={index}
          >
            <img src={poster} alt="Image" className="object-cover size-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieIntroSlider;
