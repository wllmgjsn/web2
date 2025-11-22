import { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [showCategory, setShowCategory] = useState(false);
  const [showSetup, setShowSetup] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);

  const sendRequest = () => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((joke) => {
        setJoke(joke);

        setShowCategory(false);
        setShowSetup(false);
        setShowDelivery(false);

        setTimeout(() => setShowCategory(true), 1000);
        setTimeout(() => setShowSetup(true), 2000);
        setTimeout(() => setShowDelivery(true), 10000);
      })
      .catch((err) => {
        console.error("App::error : ", err);
      });
  };

  return (
    <div>
      <button onClick={sendRequest}>Donne-moi une blague</button>
      {joke && (
        <>
          {showCategory && <p className="fade-in">Catégorie : {joke.category}</p>}
          {showSetup && <p className="fade-in">{joke.setup}</p>}
          {showDelivery && <p className="fade-in">{joke.delivery}</p>}
        </>
      )}
    </div>
  );
}

interface Joke {
  setup: string;
  delivery: string;
  category: string;
}

export default App;
