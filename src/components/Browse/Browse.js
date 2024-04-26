import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
