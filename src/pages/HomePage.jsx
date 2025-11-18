import React from "react";
import { useEffect } from "react";
import { CalendarDays, ChartNoAxesColumnIncreasing, Radio } from "lucide-react";
import { MovieStore } from "../../store/MovieStore";
import CategoriesSection from "../components/CategoriesSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Top10Section from "../components/Top10Section";

const HomePage = () => {
  const {
    nowPlayingMovies,
    upcomingMovies,
    topRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
    getTopRatedMovies,
  } = MovieStore();

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Top10Section />
      <CategoriesSection
        categoryData={nowPlayingMovies}
        categoryApiCall={getNowPlayingMovies}
        title="Now Playing"
        icon={<Radio className="size-10 text-white" />}
      />
      <CategoriesSection
        categoryData={upcomingMovies}
        categoryApiCall={getUpcomingMovies}
        title="Upcoming"
        icon={<CalendarDays className="size-10 text-white" />}
      />
      <CategoriesSection
        categoryData={topRatedMovies}
        categoryApiCall={getTopRatedMovies}
        title="Top Rated"
        icon={<ChartNoAxesColumnIncreasing className="size-10 text-white" />}
      />
    </div>
  );
};

export default HomePage;
