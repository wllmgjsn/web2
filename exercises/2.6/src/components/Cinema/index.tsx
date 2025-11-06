import type { Movie } from "../../types";
import MovieItem from "../MovieItem";

interface CinemaProps {
  name: string;
  movies: Movie[];
}

const CinemaComponent = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.movies.map((movie) => (
          <MovieItem key={movie.title} movie={movie}></MovieItem>
        ))}
      </ul>
    </div>
  );
};

export default CinemaComponent;