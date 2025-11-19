import type { Movie } from "../../types";
import MovieItem from ".";
import "./index.css";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie}></MovieItem>
      ))}
    </ul>
  );
};

export default MovieList;
