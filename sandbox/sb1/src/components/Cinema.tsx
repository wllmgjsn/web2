import type { Movie } from "../types"
import './Cinema.css'

interface CinemaProps {
    name : string,
    movies : Movie[],
    isOpen? : boolean
}

const Cinema = (/*{name, movies} : CinemaProps*/ props : CinemaProps) => {
    
    /**
     * On fait un destructuring de props
     * pour avoir accès à ses champs dans le scope de définition
     * du composant.
     * 
     * On aurait également pu faire le destructuring directement
     * dans les paramètres de la fonction Cinema
     */
    const { name, movies, isOpen} = props;
    
    return (
        <div className="cinema-card">
            <h1>{name}</h1>
            <p className={isOpen ? "greenText" : "redText"}>
                {/**Ici on utilise un opérateur ternaire pour un affichage conditionnel */}
                {isOpen === undefined ? "" : isOpen ? "Ouvert" : "Fermé"}
            </p>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.title}>{movie.title} - {movie.director}</li>
                ))}
            </ul>
        </div>    
    )
}

export default Cinema;