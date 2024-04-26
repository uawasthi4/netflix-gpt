import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-16 bg-transparent">
      <h1 className="text-2xl py-2 text-white cursor-default hover:opacity-80">
        {title}
      </h1>
      <div className="flex overflow-x-scroll overflow-y-hidden">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
