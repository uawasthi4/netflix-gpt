import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "../GPTSearch/GPTSearch";

const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.showGptSearchView);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/**
       * Main Container
       *  - Video Background
       *  - Video Title
       * Secondary Container
       *  - MoviesList*n
       *  - Cards*n
       */}
    </div>
  );
};

export default Browse;
