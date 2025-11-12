import { useState } from "react";
import './CountButton.css'

const CountButton = () => {
  /**
   * On déclare un useState pour count, ce sera une valeur
   * initialisée à 0 qui à chaque fois qu'on va cliquer sur le
   * bouton, va être incrémentée de 1, c'est utile pour gérer
   * la mise à jour de l'affichage en temps réel
   */

  const [count, setCount] = useState(0);

  // Ce qui est fait à chaque fois qu'on clique sur le bouton
  const handleClick = () => {
    setCount(count + 1);
  };

  // Ici on définit le comportement du 
  return (
    <button onClick={handleClick} className="clickButton">
      Count is {count}
    </button>
  );
};

export default CountButton;
