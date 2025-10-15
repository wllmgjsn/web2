const App = () => {
  const cinema1Name = "UGC DeBrouckère";
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Movie1Title = "Film 1 - DeBrouckère";
  const cinema1Movie1Director = "Director A";
  const cinema1Movie2Title = "Film 2 - DeBrouckère";
  const cinema1Movie2Director = "Director B";

  const cinema2Name = "UGC Toison d'Or";
  const cinema2Movie1Title = "Film 1 - Toison d'Or";
  const cinema2Movie1Director = "Director C";
  const cinema2Movie2Title = "Film 2 - Toison d'Or";
  const cinema2Movie2Director = "Director D";

  return (
    <div>
      <Title title={pageTitle}></Title>
      
      <Cinema
        cinemaName={cinema1Name}
        cinemaMovie1Title={cinema1Movie1Title}
        cinemaMovie1Director={cinema1Movie1Director}
        cinemaMovie2Title={cinema1Movie2Title}
        cinemaMovie2Director={cinema1Movie2Director}
      ></Cinema>

      <Cinema
        cinemaName={cinema2Name}
        cinemaMovie1Title={cinema2Movie1Title}
        cinemaMovie1Director={cinema2Movie1Director}
        cinemaMovie2Title={cinema2Movie2Title}
        cinemaMovie2Director={cinema2Movie2Director}
      ></Cinema>

    </div>
  );
};

const Title = (props: { title: string }) => {
  return <h1>{props.title}</h1>;
};

const Cinema = (props: {
  cinemaName: string;
  cinemaMovie1Title: string;
  cinemaMovie1Director: string;
  cinemaMovie2Title : string;
  cinemaMovie2Director: string;
}) => {
  return (
    <div>
      <h2>{props.cinemaName}</h2>
      <ul>
        <li>
          <strong>{props.cinemaMovie1Title}</strong> - Réalisateur :{" "}
          {props.cinemaMovie1Director}
        </li>
        <li>
          <strong>{props.cinemaMovie2Title}</strong> - Réalisateur :{" "}
          {props.cinemaMovie2Director}
        </li>
      </ul>
    </div>
  );
};

export default App;
