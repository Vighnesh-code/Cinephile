import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import React, { useEffect, useState } from "react";
import Slider from "./Slider";

const CategoriesSection = ({ categoryData, categoryApiCall, title, icon }) => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    categoryApiCall();
  }, []);

  return (
    <div className="min-h-auto px-5 z-100 flex flex-col gap-2 mt-4">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex justify-center items-center gap-2">
          {/* <icon className="size-10 text-white" /> */}
          {icon}
          <h1 className="text-white text-3xl font-stack">{title}</h1>
        </div>
        <div className="text-white flex justify-center items-center gap-2 pr-15">
          <ChevronLeft
            className="scale-150"
            onClick={() => api?.scrollPrev()}
          />
          <ChevronRight
            className="scale-150"
            onClick={() => api?.scrollNext()}
          />
        </div>
      </div>
      <Slider
        movieData={categoryData?.slice(0, 10)}
        api={api}
        setApi={setApi}
      />
    </div>
  );
};

export default CategoriesSection;
