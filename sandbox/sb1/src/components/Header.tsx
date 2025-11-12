import { useState } from "react";
import './Header.css';

// Définition du type headerprops
interface HeaderProps {
    title : string
}

// Les props permettent de passer des données à nos composants
const Header = (props : HeaderProps) => {

    const [printed, setPrinted] = useState(false);

    {/**On peut soit définir la fonction de handling et l'utiliser dans onClick={ICI} */}
    const handleClick = () => {
        setPrinted(!printed)
    }

    {/**Ou alors on peut directement passer une fonction anonyme si le traitement n'est pas trop complexe*/}
    return (
        <div className="header" onClick={() => {setPrinted(!printed)}}>
            <h1>{printed ? "William's " : ""}{props.title}{printed ? " ;)" : ""}</h1>
        </div>
    )
}

export default Header;