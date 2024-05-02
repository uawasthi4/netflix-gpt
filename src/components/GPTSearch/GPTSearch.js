import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearch = () => {
  return (
    <div className="fixed overflow-y-auto background-image h-full bg-no-repeat bg-center bg-cover min-h-screen w-screen pt-[30%] md:pt-0">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
