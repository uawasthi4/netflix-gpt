import React from "react";
import { useSelector } from "react-redux";
import lang from "../../utils/languageConstants";

const GPTSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black grid grid-cols-12 w-1/2 opacity-95">
        <input
          type="text"
          className="m-4 p-4 col-span-10 rounded-md"
          placeholder={lang[selectedLanguage].searchPlaceholder}
        />
        <button className="m-4 p-4 bg-red-700 text-white rounded-md col-span-2">
          {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
