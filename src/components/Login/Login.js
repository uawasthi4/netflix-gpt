import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import "./Login.css";
import { checkValidData } from "../../utils/Validate";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { USER_PHOTO } from "../../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    // Validate the form data
    const currentName = !isSignInForm ? nameRef.current.value.trim() : "";
    const currentEmail = emailRef.current.value.trim();
    const currentPassword = passwordRef.current.value;

    // Additional validation for empty fields
    if (!isSignInForm && !currentName) {
      setErrorMessage("Name is required");
      return;
    }
    if (!currentEmail) {
      setErrorMessage("Email is required");
      return;
    }
    if (!currentPassword) {
      setErrorMessage("Password is required");
      return;
    }

    const message = checkValidData(
      isSignInForm,
      currentName,
      currentEmail,
      currentPassword
    );
    setErrorMessage(message);

    if (message) {
      return;
    } else {
      // SignIn/SignUp
      if (!isSignInForm) {
        // Sign Up
        createUserWithEmailAndPassword(auth, currentEmail, currentPassword)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: currentName,
              photoURL: USER_PHOTO,
            })
              .then(() => {
                // Profile updated!
                const { email, uid, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    email: email,
                    uid: uid,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                // An error occurred
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
            // ..
          });
      } else {
        // Sign In
        signInWithEmailAndPassword(auth, currentEmail, currentPassword)
          .then((userCredential) => {
            // Signed in
            // const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
          });
      }
    }
  }

  return (
    <div className="absolute background-image h-full bg-no-repeat bg-center bg-cover min-h-screen w-screen">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="my-36 mx-auto w-4/5 md:w-1/4 p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold m-2 mb">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
          ></input>
        )}
        <input
          ref={emailRef}
          type="email"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
        />
        <p className="text-md text-red-500 font-bold">{errorMessage}</p>
        <div className="w-full my-6">
          <button
            className="bg-red-600 w-full p-4 rounded-md"
            onClick={handleButtonClick}
          >
            Sign {isSignInForm ? "In" : "Up"}
          </button>
        </div>
        <p>
          {isSignInForm ? "New to Netflix?" : "Already a user?"}{" "}
          <span
            className="cursor-pointer hover:underline font-bold"
            onClick={toggleSignInForm}
          >
            Sign {!isSignInForm ? "in" : "up"} now
          </span>
          {"."}
        </p>
      </form>
    </div>
  );
};

export default Login;
