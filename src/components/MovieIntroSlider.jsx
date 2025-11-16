import React from "react";
import MoviePoster1 from "../../public/assets/Movie Poster 1.jpg";
import MoviePoster2 from "../../public/assets/Movie Poster 2.avif";
import MoviePoster3 from "../../public/assets/Movie Poster 3.webp";
import MoviePoster4 from "../../public/assets/Movie Poster 4.webp";

const MovieIntroSlider = () => {
  const moviePosters = [MoviePoster1, MoviePoster2, MoviePoster3, MoviePoster4];

  return (
    <div className="absolute text-red-500 bottom-3 right-10 z-50">
      <div className="flex gap-2">
        {moviePosters.map((poster, index) => (
          <div
            className="h-15 w-30 rounded-lg border-[#0C3D78] border-2 hover:scale-110 duration-300 hover:border-[#0C3D78] hover:border-2"
            key={index}
          >
            <img
              src={poster}
              alt="Image"
              className="object-cover size-full transform transition-transform duration-300 hover:scale-125"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieIntroSlider;
