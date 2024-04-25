import React from "react";
import useMovieTrailer from "../../hooks/useMovieVideo";
import { useSelector } from "react-redux";
import { YOUTUBE_VIDEO_EMBED_URL } from "../../utils/constants";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  if (!movieTrailer) return;

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_VIDEO_EMBED_URL + movieTrailer.key + "?&autoplay=1&mute=1"}
        title="Youtube Movie Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
