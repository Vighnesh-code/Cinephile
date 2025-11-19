import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieStore } from "../../store/MovieStore";
import Navbar from "../components/Navbar";
import { Spinner } from "../components/ui/spinner";

const MovieDetailsPage = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const { movieId } = useParams();
  const {
    getMovieById,
    movieDetails,
    reviews,
    trailers,
    getTrailers,
    getReviews,
    loading,
  } = MovieStore();

  useEffect(() => {
    getMovieById(movieId);
    getTrailers(movieId);
    getReviews(movieId);
  }, []);

  const filterTrailers = trailers?.filter(
    (trailer) => trailer?.type === "Trailer"
  );

  const handleDetailReviewToggle = (reviewId) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  return (
    <>
      {loading ? (
        <div className="h-screen w-screen flex justify-center items-center">
          <Spinner className="size-15 text-[#009CEF]" />
        </div>
      ) : (
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
                    {movieDetails?.original_language}-
                    {movieDetails?.origin_country}
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

              {/* Trailer Section */}
              <div className="h-180 mt-8 flex flex-col">
                <h1 className="text-5xl uppercase font-unbounded">Trailer</h1>
                <div className="h-full bg-black/40 mt-5">
                  {filterTrailers ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${filterTrailers[0]?.key}`}
                      className="size-full"
                      title={filterTrailers?.key}
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex flex-col gap-3 justify-center items-center h-full">
                      <p className="text-3xl font-oswald">No Video for</p>
                      <p className="text-4xl font-oswald">
                        {movieDetails?.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Review Section */}
              <div className="h-auto mt-15">
                <h1 className="text-5xl uppercase font-unbounded">Reviews</h1>
                <div className="flex flex-col gap-2 h-auto mt-4">
                  {reviews?.slice(0, 5)?.map((review, index) => (
                    <div
                      className="w-full p-4 rounded-2xl bg-black/60"
                      key={index}
                    >
                      <div className="flex gap-3 items-center justify-between">
                        <div className="rounded-full size-13">
                          <img
                            src={`https://image.tmdb.org/t/p/original/${review?.author_details?.avatar_path}`}
                            alt={`${review?.author}`}
                            className="size-full object-contain rounded-full"
                          />
                        </div>
                        <p className="text-xl flex-1 font-stack">
                          {review?.author_details?.name}
                        </p>
                        <p className="text-xl font-unbounded">
                          {review?.author_details?.rating}⭐
                        </p>
                      </div>

                      <div className="mt-2 p-2">
                        <p className="font-stack">
                          {review?.content ? (
                            expandedReviews[review?.id] ? (
                              review?.content
                            ) : (
                              review?.content?.slice(0, 200)
                            )
                          ) : (
                            <p>No Reviews for {movieDetails?.title}</p>
                          )}
                        </p>
                        {review?.content && review?.content.length > 200 && (
                          <button
                            className="hover:text-blue-300 hover:cursor-pointer mt-3 text-blue-300 duration-300 font-stack"
                            onClick={() => handleDetailReviewToggle(review?.id)}
                          >
                            {expandedReviews[review?.id]
                              ? "Read Less..."
                              : "Read More..."}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsPage;
