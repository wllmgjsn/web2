import "./App.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";

function App() {  // COMPOSANT 1 (un composant est une fonction qui retourne du jsx)
  return (
    <div className="page">
      <Header></Header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;





