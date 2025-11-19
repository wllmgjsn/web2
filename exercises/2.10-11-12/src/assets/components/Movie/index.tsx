import { useState } from "react";
import type { Movie } from "../../types";
import "./index.css";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  return (
    <div className="movie-card">
      {movie.imageURL && (
        <img
          style={{ width: "100px", objectFit : "cover" }}
          src={movie.imageURL}
          alt={movie.title + " movier cover"}
        ></img>
      )}
      <li>
        <p onClick={() => setDescriptionVisible(!descriptionVisible)}><strong>{movie.title.toUpperCase()}</strong></p>
        <p>Réalisateur: {movie.director}</p>
        <p>Durée: {movie.duration} min.</p>
        {movie.budget && <p>Budget : ${movie.budget}M</p>}
        {descriptionVisible && (
          <p>
            <i>{movie.description}</i>
          </p>
        )}
      </li>
    </div>
  );
};

export default MovieItem;
