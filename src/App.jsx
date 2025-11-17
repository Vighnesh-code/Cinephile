import { useEffect } from "react";
import { MovieStore } from "../store/MovieStore";
import CategoriesSection from "./components/CategoriesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Top10Section from "./components/Top10Section";
import { CalendarDays, ChartNoAxesColumnIncreasing, Radio } from "lucide-react";

function App() {
  const {
    nowPlayingMovies,
    upcomingMovies,
    topRatedMovies,
    getNowPlayingMovies,
    getUpcomingMovies,
    getTopRatedMovies,
  } = MovieStore();

  return (
    <div className="min-h-screen bg-[#131720]">
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
}

export default App;
