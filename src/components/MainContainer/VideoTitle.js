import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faInfoCircle, faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-16 absolute text-white bg-gradient-to-r from-black w-screen aspect-video pt-[20%]">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-md rounded-sm p-3 px-8 cursor-pointer text-black bg-opacity-95 hover:opacity-80">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-md rounded-sm p-3 px-8 cursor-pointer text-white bg-opacity-50 hover:opacity-70">
          <FontAwesomeIcon icon={faInfoCircle} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
