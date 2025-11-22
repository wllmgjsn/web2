import { MovieContext } from "../../types";
import PageTitle from "../PageTitle";
import MovieListView from "../MovieListView";
import { useOutletContext } from "react-router-dom";

const MoviesPage = () => {
  const { movies }: MovieContext = useOutletContext();

  return (
    <div>
      <main className="page-content">
        <PageTitle title="My favorite movies" />
        <MovieListView movies={movies} />

        <br />
        <br />
        <br />
        <br />
      </main>
    </div>
  );
};

export default MoviesPage;
