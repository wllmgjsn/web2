import React from "react";
import ReactDOM from "react-dom/client";
import App, { HomePage, CinemaPage, MoviesPage } from "./components/App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path : "",
        element : <HomePage></HomePage>
      },
      {
        path : "/cinemas",
        element : <CinemaPage></CinemaPage>
      },
      {
        path : "/movies",
        element : <MoviesPage></MoviesPage>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>
);
