import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../../utils/languageConstants";
import { TMDB_API_OPTIONS } from "../../utils/constants";
import { addGptMovieResults } from "../../utils/gptSearchSlice";
import genAI from "../../utils/googleai";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  // Seatch Movie in TMDB
  const searchTMDBMovie = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  async function handleGptSearchClick() {
    const gptMovieQuery =
      "Act as a movie recommendation system and suggest some movies for the query - " +
      searchText.current.value +
      "only give me name of 5 movies, comma separated like the example result given ahead. Example Results - a,b,c,d,e";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = gptMovieQuery;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const gptResults = response.text();

    if (!gptResults) {
      // Todo: Error Handling
    }
    const gptMovies = gptResults.split(",");

    // For each movie, we'll search TMDB.
    const tmdbPromiseArray = gptMovies.map((movie) => searchTMDBMovie(movie));

    // Resolve all the movies promises
    const tmdbMovieResults = await Promise.all(tmdbPromiseArray);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovies,
        movieResults: tmdbMovieResults,
      })
    );
  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black grid grid-cols-12 w-1/2 opacity-95"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="m-4 p-4 col-span-10 rounded-md"
          placeholder={lang[selectedLanguage].searchPlaceholder}
        />
        <button
          className="m-4 p-4 bg-red-700 text-white rounded-md col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
