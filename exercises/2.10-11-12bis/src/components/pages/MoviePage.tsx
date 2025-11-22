import { useMatch, useOutletContext } from "react-router-dom";
import { MovieContext } from "../../types";

const MoviePage = () => {
  const { movies }: MovieContext = useOutletContext();

  const match = useMatch("/movies/:id");
  const movieId = match?.params.id;
  if (!movieId) return <p>Movie not found</p>;

  const movie = movies.find((movie) => movie.id.toString() === movieId);
  if (!movie) return <p>User not found</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MoviePage;
