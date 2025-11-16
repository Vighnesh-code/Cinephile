import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* Demo Component */}
      <Slider />
    </div>
  );
}

export default App;
