import React from "react";
import Header from "../Header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import MainContainer from "../MainContainer";
import SecondaryContainer from "../SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
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
