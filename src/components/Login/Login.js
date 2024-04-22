import React, { useState } from "react";
import Header from "../Header/Header";
import "./Login.css";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  function toggleSignInForm() {
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="background-image h-full bg-no-repeat bg-center bg-cover min-h-screen">
      <Header />
      <form className="my-36 mx-auto w-1/4 p-12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold m-2 mb">
          Sign {isSignInForm ? "In" : "Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-black rounded-md bg-opacity-50 border border-gray-500"
        />
        <div className="w-full my-6">
          <button className="bg-red-600 w-full p-4 rounded-md">
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
