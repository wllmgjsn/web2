import { useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleList";

const HomePage = () => {

  const { movies } : MovieContext = useOutletContext();
  const favMovies = [movies[1], movies[3]];

  return (
    <div>
      <h1>Welcome to iMovie !</h1>
      <p>
        Découvrez iMovie, votre plateforme de streaming dédiée aux films et
        séries : des nouveautés chaque semaine, des classiques incontournables,
        et une expérience personnalisée pour tous les cinéphiles.
      </p>

      <p>Voici les films préférés de la rédaction : </p>

    <MovieTitleList movies={favMovies}></MovieTitleList>
    </div>
  );
};

export default HomePage;