import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  CircleUserRound,
  Film,
  RadioTower,
  Search,
  Tv,
  Volleyball,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleData = [
    {
      icon: <Film />,
      title: "Movies",
    },
    {
      icon: <Tv />,
      title: "TV",
    },
    {
      icon: <RadioTower />,
      title: "LiveTV",
    },
    {
      icon: <Volleyball />,
      title: "Sports",
    },
  ];

  return (
    <div
      className={`sticky top-0 z-1000 p-3 text-white flex justify-center items-center h-17 gap-4 ${
        scrolled && "bg-black/70"
      }`}
    >
      <h1 className="text-2xl uppercase text-white font-medium">
        <span className="text-[#00A6FF]">Cine</span>
        phile
      </h1>

      {/* Search Input Field */}
      <div className="flex-1 h-full rounded-full border border-slate-600 flex justify-center items-center px-3 focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-400">
        <Search />
        <Input
          className="border-none focus:outline-none focus-visible:ring-0 text-white placeholder:text-slate-200"
          placeholder="Search for your movies here"
        />
      </div>

      {/* Toggles to switch between Movies/TV/LiveTV/Sports */}
      <div className="flex justify-center items-center gap-3 bg-black/40 h-full rounded-full p-2">
        {toggleData.map((data, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-2 h-10 w-auto gap-1"
          >
            <div className="h-full">{data.icon}</div>
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      <div className="h-20">
        <CircleUserRound className="h-full" />
      </div>
    </div>
  );
};

export default Navbar;
