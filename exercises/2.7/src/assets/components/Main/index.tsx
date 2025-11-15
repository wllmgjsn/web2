import "./index.css";
import { useState, type SyntheticEvent } from "react";
import type { Movie } from "../../../types";
import MovieList from "../Movie/list";

const defaultMovies: Movie[] = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    description: "A thief enters dreams to plant an idea in a target's mind.",
    imageURL: "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg",
    budget: 160,
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    duration: 132,
    description: "A poor family infiltrates a wealthy household.",
    imageURL: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    duration: 175,
    budget: 6.7 ,
    imageURL: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    duration: 125,
    description: "A girl enters a world of spirits to save her parents.",
    imageURL: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    duration: 152,
    imageURL: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
  },
];



const Main = () => {
  const [movies, setMovies] = useState(defaultMovies);
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [budget, setBudget] = useState("");

  const handleTitleChange = (e: SyntheticEvent) => {
    const titleInput = e.target as HTMLInputElement;
    console.log("change in titleInput: ", titleInput.value);
    setTitle(titleInput.value);
  };

  const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in directorInput: ", directorInput.value);
    setDirector(directorInput.value);
  };

  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput: ", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in durationInput: ", durationInput.value);
    setDuration(durationInput.value);
  };

  const handleImageChange = (e: SyntheticEvent) => {
    const imageInput = e.target as HTMLInputElement;
    console.log("change in imageInput: ", imageInput.value);
    setImageUrl(imageInput.value);
  };

  const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in budgetInput: ", budgetInput.value);
    setBudget(budgetInput.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log("Submit : ", title, director, description);
    const newMovie : Movie = {
      title: title,
      director: director,
      duration: parseInt(duration),

    };

    if(description !== ""){newMovie.description = description}
    if(budget !== ""){newMovie.budget = parseFloat(budget)}
    if(imageUrl !== ""){newMovie.imageURL = imageUrl}
    
    setMovies([...movies, newMovie]);
  };

  return (
    <div className="main-card">
      <MovieList movies={movies}></MovieList>

      <div className="new-movie-form">
        <p style={{ textAlign: "center" }}>Ajouter un film</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title"></label>
          <input
            value={title}
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            required
          ></input>

          <label htmlFor="director"></label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            placeholder="Director"
            onChange={handleDirectorChange}
            required
          ></input>

          <label htmlFor="duration"></label>
          <input
            value={duration}
            type="text"
            id="duration"
            name="duration"
            placeholder="Duration"
            onChange={handleDurationChange}
            required
          ></input>

          <label htmlFor="description"></label>
          <input
            value={description}
            type="text"
            id="description"
            name="description"
            placeholder="Description (fac.)"
            onChange={handleDescriptionChange}
          ></input>

          <label htmlFor="imageUrl"></label>
          <input
            value={imageUrl}
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Image URL (fac.)"
            onChange={handleImageChange}
          ></input>

          <label htmlFor="budget"></label>
          <input
            value={budget}
            type="text"
            id="budget"
            name="budget"
            placeholder="Budget (fac.)"
            onChange={handleBudgetChange}
          ></input>

          <br />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Main;
