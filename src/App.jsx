import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Top10Section from "./components/Top10Section";

function App() {
  return (
    <div className="min-h-screen bg-[#131720]">
      <Navbar />
      <HeroSection />
      <Top10Section />
    </div>
  );
}

export default App;
