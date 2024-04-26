import React from "react";
import { MOVIE_POSTER_CDN_URL } from "../../utils/constants";
import "./MovieList.css";

const MovieCard = ({ posterPath, title }) => {
  return (
    <div className="w-48 pr-2 hover:scale-110 duration-200 cursor-pointer">
      <img src={MOVIE_POSTER_CDN_URL + posterPath} alt={title} />
    </div>
  );
};

export default MovieCard;
