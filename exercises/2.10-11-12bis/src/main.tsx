import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import CinemaPage from "./components/pages/CinemaPage";
import HomePage from "./components/pages/HomePage";
import MoviesPage from "./components/pages/MoviesPage";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddMoviePage from "./components/pages/AddMoviePage";

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
      },
      {
        path : "/movies/add",
        element : <AddMoviePage></AddMoviePage>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>
);
