// zustand configuration
import { create } from "zustand";

export const MovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  setMovies: (movieData) => set({ movies: movieData }),
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
}));
