import "./App.css";
import sound from "./assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";
import logo from "./assets/images/js-logo.png";

function App() {  // COMPOSANT 1 (un composant est une fonction qui retourne du jsx)
  return (
    <div className="page">
      <Header></Header>
      <Main />
      <Footer />
    </div>
  );
}

const Header = () => { // COMPOSANT 2
  return (
    <header>
      <h1 className="animate__animated animate__bounce">We love Pizza</h1>
    </header>
  );
};

const Main = () => {  // COMPOSANT 3
  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <audio id="audioPlayer" controls autoPlay>
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </main>
  );
};


const Footer = () => { // COMPOSANT 4
  return (
    <footer>
      <h1 className="animate__animated animate__bounce animate__delay-2s">
        But we also love JS
      </h1>
      <img src={logo} alt="" />
    </footer>
  );
};

export default App;

