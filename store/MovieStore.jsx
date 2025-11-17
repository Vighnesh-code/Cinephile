// zustand configuration
import { create } from "zustand";

export const MovieStore = create((set) => ({
  movies: [],
  popularMovies: [],
  nowPlayingMovies: [],
  upcomingMovies: [],
  topRatedMovies: [],
  activeHeroMovie: 0,
  loading: false,
  error: null,
  // setMovies: (movieData) => set({ movies: movieData }),
  // setPopularMovies: (movie) => set({ popularMovies: movie }),
  // setNowPlayingMovies: (movie) => set({ nowPlayingMovies: movie }),
  // setActiveHeroMovie: (movie) => set({ activeHeroMovie: movie }),
  getMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_API_KEY_TMDB_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ movies: data.results || data, loading: false });

      return data.results || data;
    } catch (error) {
      console.log("Failed to fetch Movies: ", error.message);
      set({ error: error.message, loading: false });
      throw error;
    }
  },
  getPopularMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_API_KEY_TMDB_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ popularMovies: data.results || data, loading: false });

      return data.results || data;
    } catch (error) {
      console.log("Failed to fetch Popular Movies: ", error.message);
    }
  },
  getNowPlayingMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_API_KEY_TMDB_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ nowPlayingMovies: data.results || data, loading: false });

      return data.results || data;
    } catch (error) {
      console.log("Failed to fetch Popular Movies: ", error.message);
    }
  },
  getUpcomingMovies: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_API_KEY_TMDB_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ upcomingMovies: data.results || data, loading: false });

      return data.results || data;
    } catch (error) {
      console.log("Failed to fetch Upcoming Movies: ", error.message);
      throw new Error(error);
    }
  },
  getTopRatedMovies: async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${
              import.meta.env.VITE_API_KEY_TMDB_ACCESS_TOKEN
            }`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      set({ topRatedMovies: data.results || data, loading: false });

      return data.results || data;
    } catch (error) {
      console.log("Failed to fetch Upcoming Movies: ", error.message);
      throw new Error(error);
    }
  },
}));
