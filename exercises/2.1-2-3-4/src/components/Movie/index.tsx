import type { Movie } from "../../types";

const MovieComponent = ({ title, director }: Movie) => {
  return (
    <div>
      <strong>{title}</strong> - Réalisateur : {director}
    </div>
  );
};

export default MovieComponent;
