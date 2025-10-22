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
      <Header 
      image="https://upload.wikimedia.org/wikipedia/fr/thumb/c/cf/Logo_UGC_2001-2018.svg/1200px-Logo_UGC_2001-2018.svg.png"
      children={<h3 className="header-title">Bienvenue sur notre site</h3>}
      ></Header>
      <PageTitleComponent title={pageTitle}></PageTitleComponent>
      <CinemaComponent
        name={cinema1Name}
        movies={[movie1, movie2]}
      ></CinemaComponent>
      <CinemaComponent
        name={cinema2Name}
        movies={[movie3, movie4]}
      ></CinemaComponent>

      <Footer></Footer>
    </div>
  );
};

export default App;
