import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { TMDB_API_OPTIONS, TOP_RATED_MOVIES_URL } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    try {
      const data = await fetch(TOP_RATED_MOVIES_URL, TMDB_API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (error) {
      // Optionally dispatch error to store or show UI feedback
      console.error('Failed to fetch trending movies:', error);
    }
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
