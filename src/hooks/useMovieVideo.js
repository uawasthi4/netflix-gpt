import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);

  const trailerVideo = useSelector((store) => store.movies.movieVideo);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    const mainVideo = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer"
    );

    const trailer = mainVideo.length ? mainVideo[0] : json.results?.[0];

    dispatch(addMovieTrailer(trailer));
  };
};

export default useMovieTrailer;
