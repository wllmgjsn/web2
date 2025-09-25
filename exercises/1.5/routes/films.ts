import { Router } from "express";
import { Film, NewFilm } from "../types";
import { isNewFilm } from "../utils/type-guards";

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
  const { minDuration, like } = req.query; // like is a substring used in function startsWith beneath
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
});

// POST /
router.post("/", (req, res) => {
  const body: unknown = req.body;
  
  // Vérification de type du body (type narrowing)
  //  L On réduit de plus en plus l'objet pour que le compilateur
  //    soit sûr que le body est bien un film (checker type-guards.ts) 
  if(!isNewFilm(body)){
    return res.sendStatus(400);
  }

  for(const f of films){
    if(
      f.title === body.title &&
      f.director === body.director
    ){
      return res.sendStatus(409);
    }
  }

  // Destructuring (on créé un nouvel objet NewFilm pour pouvoir définir un objet Film avec un id autogénéré)
  const { title, director, duration, budget, description, imageUrl } = body as NewFilm;
  const filmId = films.reduce((maxId, film) => (film.id > maxId ? film.id : maxId), 0) + 1;
  
  const nf : Film = {
    id : filmId,
    title,
    director,
    duration,
    budget,
    description,
    imageUrl
  };

  films.push(nf);

  return res.json(nf);
});



export default router;

