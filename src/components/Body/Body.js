import React from "react";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GPTSearch from "../GPTSearch/GPTSearch";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/gptsearch",
      element: <GPTSearch />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
