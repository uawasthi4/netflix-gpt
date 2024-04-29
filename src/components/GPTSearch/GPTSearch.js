import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div className="absolute background-image h-full bg-no-repeat bg-center bg-cover min-h-screen w-screen">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
