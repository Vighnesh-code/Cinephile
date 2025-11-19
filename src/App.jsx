import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Navbar from "./components/Navbar";
import { Spinner } from "./components/ui/spinner";

function App() {
  return (
    <div className="min-h-screen bg-[#131720] select-none">
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<MovieDetailsPage />} path="/movie/:movieId" />
      </Routes>
    </div>
  );
}

export default App;
