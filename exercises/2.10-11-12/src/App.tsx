import './App.css'
import Movies from './assets/components/Main';
import { Outlet } from 'react-router-dom'
import NavBar from './assets/components/Navbar';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import CinemaComponent from './assets/components/Cinema';

const HomePage = () => <p style={{color:'white'}}>Home Page</p>;
const CinemaPage = () => <CinemaComponent name = "Ugc Toison D'or" movies={[movie1, movie2, movie3, movie4]}></CinemaComponent>;
const MoviesPage = () => <Movies></Movies>


function App() {
  return (
    <div className="app">
      <Header
        children={
          <>
            <h1 className="header-title">iMovie</h1>
            <NavBar></NavBar>
          </>
        }
      ></Header>
      <Outlet></Outlet>
      <Footer children={<p>William Gijsen © 2025</p>}></Footer>
    </div>
  )
}

export default App;
export { HomePage, CinemaPage, MoviesPage};


const movie1 = {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
    description:
      "Un match épique opposant Karasuno à Nekoma dans l’univers du volley lycéen.",
      duration : 178
  };
  const movie2 = {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
    description:
      "Un drame poignant sur la réconciliation et les tensions sociales au Soudan.",
      duration : 94
  };
  const movie3 = {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
    description:
      "Une femme piégée dans une forêt irlandaise, observée par des créatures mystérieuses.",
      duration : 111
  };
  const movie4 = {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
    description:
      "Les célèbres flics reviennent pour une mission explosive mêlant humour et action.",
      duration : 122
  };