// Toujours avoir une interface si on souhaite créer un type abstrait !
interface Movie {
  title: string;
  director: string;
}
interface PageTitleProps {
  title: string;
}
interface CinemaProps {
  name: string;
  movies: Movie[];
}

const MovieComponent = ({ title, director }: Movie) => {
  return (
    <div>
      <strong>{title}</strong> - Réalisateur : {director}
    </div>
  );
};

const CinemaComponent = ({ name, movies }: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {movies.map((c, i) => (
          <li key={i}>
            <MovieComponent
              title={c.title}
              director={c.director}
            ></MovieComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PageTitleComponent = ({ title }: PageTitleProps) => {
  return <h1>{title}</h1>;
};

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema2Name = "UGC Toison d'Or";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  };
  const movie2 = {
    title: "GOODBYE JULIA ",
    director: "Mohamed Kordofani",
  };
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  };

  return (
    <div>
      <PageTitleComponent title={pageTitle}></PageTitleComponent>
      <CinemaComponent
        name={cinema1Name}
        movies={[movie1, movie2]}
      ></CinemaComponent>
      <CinemaComponent
        name={cinema2Name}
        movies={[movie3, movie4]}
      ></CinemaComponent>
    </div>
  );
};

export default App;
