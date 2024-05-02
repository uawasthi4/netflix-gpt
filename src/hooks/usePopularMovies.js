import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { TMDB_API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.nowPlayingMovies);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_URL, TMDB_API_OPTIONS);

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
