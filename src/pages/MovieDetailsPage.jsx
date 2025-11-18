import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieStore } from "../../store/MovieStore";
import Navbar from "../components/Navbar";
import { Languages } from "lucide-react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { getMovieById, movieDetails } = MovieStore();

  useEffect(() => {
    getMovieById(movieId);
  }, []);

  useEffect(() => {
    console.log("Movie Details: ", movieDetails);
  }, [movieDetails]);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="fixed inset-0">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.backdrop_path}`}
          alt="main background"
          className="object-cover size-full"
        />
        <div className="bg-black/40 absolute inset-0"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <div className="text-white flex justify-between w-full px-5 py-20 gap-4 bg-[#131720] z-100">
        {/* Left Section */}
        <div className="w-80 shrink-0">
          <div className="sticky top-20">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt="Movie Poster"
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex-1 min-h-screen z-10">
          {/* title and description */}
          <div className="pr-50 flex flex-col gap-4">
            <h1 className="text-6xl text-white font-oswald">
              {movieDetails?.original_title}
            </h1>
            <p className="">{movieDetails?.overview}</p>
          </div>

          {/* Production Companies  */}
          <div className="flex items-center gap-10 py-5">
            {movieDetails?.production_companies?.map((company, index) => (
              <div
                className="h-20 flex justify-center items-center rounded-2xl p-1 bg-slate-50/20"
                key={index}
              >
                {company?.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${company?.logo_path}`}
                    alt={company?.name}
                    className="size-full object-contain"
                  />
                ) : (
                  <div className="min-w-10 px-5 text-center">
                    <p className="font-unbounded">{company?.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="font-unbounded">
            <div className="flex gap-2 items-center">
              -
              <p>
                {movieDetails?.original_language}-{movieDetails?.origin_country}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              -<p>{movieDetails?.release_date}</p>
            </div>
            <div className="flex gap-2 items-center">
              -<p>{movieDetails?.runtime} minutes (hours/min time)</p>
            </div>
          </div>

          <div className="flex pt-4 gap-3">
            {movieDetails?.genres?.map((genre, index) => (
              <div
                key={index}
                className="size-auto bg-black/40 p-4 rounded-full font-stack"
              >
                <p>{genre?.name}</p>
              </div>
            ))}
          </div>

          <div className="h-180 mt-8 flex flex-col">
            <h1 className="text-5xl uppercase font-unbounded">Trailer</h1>
            <div className="h-full bg-black/40 mt-5">
              {movieDetails?.video ? (
                <video src={movieDetails?.video} className="size-full" />
              ) : (
                <div className="flex flex-col gap-3 justify-center items-center h-full">
                  <p className="text-3xl font-oswald">No Video for</p>
                  <p className="text-4xl font-oswald">{movieDetails?.title}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
