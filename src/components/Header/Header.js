import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants";
import {
  addGptMovieResults,
  toggleGptSearchView,
} from "../../utils/gptSearchSlice";
import { changeLanguage } from "../../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearchView = useSelector((store) => store.gpt.showGptSearchView);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  function handleGptSearchClick() {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
    dispatch(
      addGptMovieResults({
        gptMovieResults: null,
        gptMovieNames: null,
      })
    );
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={NETFLIX_LOGO} alt="Netflix Logo"></img>
      {user && (
        <div className="flex align-middle p-2">
          {showGptSearchView && (
            <select
              className="p-3 m-2 bg-gray-800 text-white rounded-md opacity-90 hover:bg-gray-600 cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white bg-purple-700 hover:bg-purple-500 py-0 px-4 m-2 rounded-md text-md font-bold opacity-90"
            onClick={handleGptSearchClick}
          >
            {!showGptSearchView ? "GPT Search" : "Home"}
          </button>
          <img
            alt="user-icon"
            className="w-8 h-8 mt-4"
            width={30}
            height={30}
            src={user?.photoURL}
          ></img>
          <button className="font-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
