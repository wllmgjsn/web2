import "./App.css";
import Cinema from "./components/Cinema";
import CountButton from "./components/CountButton";
import Header from "./components/Header";

const moviesCinema1 = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];
const moviesCinema2 = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
];

// On passe le prop title à Header
// Remarquez que le composant App utilise d'autres composants...
function App() {
  return (
    <div className="main-frame">
      <Header title="Website"></Header>
      <div className="content-section">
        <div className="card">
          <CountButton></CountButton>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /**
   * Données à insérer
  <Cinema name="UGC Toison d'or" movies={moviesCinema1} isOpen={true}></Cinema>
  <Cinema name="CinéEspace Arlon" movies={moviesCinema2} isOpen={false}></Cinema>
  <CountButton></CountButton>
  */
}
