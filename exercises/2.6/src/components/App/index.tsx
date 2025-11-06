import CinemaComponent from "../Cinema";
import PageTitleComponent from "../PageTitle";
import Header from "../Header";
import Footer from "../Footer";
import "./App.css";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";
  const cinema2Name = "UGC Toison d'Or";

  const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
    description:
      "Un match épique opposant Karasuno à Nekoma dans l’univers du volley lycéen.",
  };
  const movie2 = {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
    description:
      "Un drame poignant sur la réconciliation et les tensions sociales au Soudan.",
  };
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
    description:
      "Une femme piégée dans une forêt irlandaise, observée par des créatures mystérieuses.",
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
    description:
      "Les célèbres flics reviennent pour une mission explosive mêlant humour et action.",
  };

  return (
    <div>
      <Header
        image="https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Logo_UGC_2001-2018.svg/1200px-Logo_UGC_2001-2018.svg.png"
        children={<h3 className="header-title">Bienvenue sur notre site</h3>}
      ></Header>
      <PageTitleComponent title={pageTitle}></PageTitleComponent>
      <CinemaComponent
        name={cinema1Name}
        movies={[movie1, movie2, movie3]}
      ></CinemaComponent>
      <CinemaComponent
        name={cinema2Name}
        movies={[movie1, movie4]}
      ></CinemaComponent>

      <Footer children={<p>© 2025 MyApp</p>}></Footer>
    </div>
  );
};

export default App;
