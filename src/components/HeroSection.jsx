import React from "react";
import MovieIntroSlider from "./MovieIntroSlider";
import heroImage from "/assets/Wakanda Forever Image.jpg";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="h-screen w-full">
      <img
        src={heroImage}
        alt={"Hero Image"}
        className="absolute inset-0 size-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Overlay */}
      <div className="absolute z-30 h-full flex flex-col justify-end bottom-0 px-5 gap-5">
        <h1 className="text-5xl font-bold text-white">Movie Title</h1>

        {/* Rating, RunTime & Genre Section */}
        <div className="flex gap-3 text-white">
          <div className="bg-slate-500 p-2 rounded-2xl">Rating</div>
          <div className="bg-slate-500 p-2 rounded-2xl">RunTime</div>
          <div className="bg-slate-500 p-2 rounded-2xl">Genre</div>
        </div>

        <p className="text-white max-w-2xl">
          Movie Description comes here. This section contains the description of
          the movie Movie Description comes here. This section contains the
          description of the movie Movie Description comes here. This section
          contains the description of the movie Movie Description comes here.
          This section contains the description of the movie
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
