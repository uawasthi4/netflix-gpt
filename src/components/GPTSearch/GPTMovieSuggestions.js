import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";

const GPTMovieSuggestions = () => {
  const { gptMovieNames, gptMovieResults } = useSelector((store) => store.gpt);

  if (!gptMovieNames) {
    return null;
    // or show Error Page
  }
  return (
    <div className="p-4 m-4 bg-black bg-opacity-90 text-white">
      {gptMovieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={gptMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
