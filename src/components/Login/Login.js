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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }

  function handleButtonClick() {
    // Validate the form data
    const currentName = !isSignInForm ? nameRef.current.value : "";
    const currentEmail = emailRef.current.value;
    const currentPassword = passwordRef.current.value;

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
              photoURL:
                "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png",
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
                navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
              });
            console.log(user);
            // ...
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
            const user = userCredential.user;
            navigate("/browse");
            console.log(user);
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
    <div className="background-image h-full bg-no-repeat bg-center bg-cover min-h-screen">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="my-36 mx-auto w-1/4 p-12 bg-black text-white rounded-lg bg-opacity-80"
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
