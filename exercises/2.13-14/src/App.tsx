import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
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
      .then((data) => {
        setJoke({
          setup : data.setup ?? "No joke found",
          delivery : data.delivery ?? "No delivery",
          category : data.category ?? "Unknown"
        });

        setShowSetup(false);
        setShowDelivery(false);

        setTimeout(() => setShowSetup(true), 2000);
        setTimeout(() => setShowDelivery(true), 5000);
      })
      .catch((err) => {
        console.error("App::error : ", err);
      });
  };

  useEffect(() => {
    sendRequest();
    setInterval(sendRequest, 10000);
  }, [])

  return (
    <div>
      {joke && (
        <>
          {<p>Catégorie : {joke.category}</p>}
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
