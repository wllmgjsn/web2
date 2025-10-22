import type { Movie } from "../../types";

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
          <li key={props.name}>
            <strong>{movie.title}</strong> - Réalisateur : {movie.director}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CinemaComponent;