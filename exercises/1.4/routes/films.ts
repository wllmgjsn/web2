import { Router } from "express";
import { Film, NewFilm } from "../types";

const films: Film[] = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    duration: 148,
    budget: 160000000,
    description:
      "Un voleur spécialisé dans l'extraction de secrets via les rêves est engagé pour implanter une idée dans l'esprit d'un PDG.",
    imageUrl: "https://example.com/inception.jpg"
  },
  {
    id: 2,
    title: "Le Fabuleux Destin d'Amélie Poulain",
    director: "Jean-Pierre Jeunet",
    duration: 122,
    description:
      "Amélie, jeune serveuse à Montmartre, décide de changer la vie de ceux qui l'entourent de manière subtile et créative.",
    imageUrl: "https://example.com/amelie.jpg"
  },
  {
    id: 3,
    title: "Mad Max: Fury Road",
    director: "George Miller",
    duration: 120,
    budget: 150000000,
    description:
      "Dans un futur post-apocalyptique, Max s'associe avec Furiosa pour fuir un tyran et sauver un groupe de captives.",
    imageUrl: "https://example.com/madmax.jpg"
  }
];

const router = Router();


// GET /
router.get("/", (req, res) => {
  let { minDuration, like } = req.query; // like is a substring used in function startsWith beneath
  let filteredFilms = films;

  if(typeof(minDuration) === 'string'){
    const minDurationInt = Number(minDuration);
    if(!isNaN(minDurationInt)){
      filteredFilms = filteredFilms.filter((film) => film.duration >= minDurationInt);
    }
  }

  if(typeof(like) === 'string' && like !== ""){
    const search = like.toLowerCase();
    filteredFilms = filteredFilms.filter((film) => film.title.toLowerCase().startsWith(search));
  }

  return res.json(filteredFilms);
});

//GET /:id
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const film = films.find((film) => film.id === id);
  if(!film){
    return res.sendStatus(404);
  }
  return res.json(film);
})

// POST /
router.post("/", (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("director" in body) ||
    !("duration" in body) ||
    typeof body.title !== "string" ||
    typeof body.director !== "string" ||
    typeof body.duration !== "number" ||
    !body.title.trim() ||
    !body.director.trim() ||
    body.duration <= 0
  ) {
    return res.sendStatus(400);
  }

  // Destructuring
  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;
  const filmId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;
  // Restructu
  const newFilm : Film = {
    id : filmId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };
  films.push(newFilm);

  return res.json(newFilm);
});



export default router;

