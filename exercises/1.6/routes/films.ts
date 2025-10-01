import { Router } from "express";
import { Film } from "../types";
import { isFilm, isNewFilm } from "../utils/type-guards";

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
  const { title, director, duration, budget, description, imageUrl } = body;
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

// PUT

router.put("/", (req, res) => {
    const body : unknown = req.body;
    
    if(!isFilm(body)){
      return res.sendStatus(400);
    }
    let i = 0;
    for(const f of films){
      if(f.id === body.id){
        films[i] = body;
        return res.sendStatus(200);
      }
      i++;
    }
    return res.sendStatus(404);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  
  if(id < 1) {return res.sendStatus(400);}
  const film = films.find((film) => film.id === id);
  
  if(!film){
    return res.sendStatus(404);
  }

  films.splice(id-1, 1);
  return res.sendStatus(200);
});

router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const film = films.find((film) => film.id === id);
  
  if(!film){
    return res.sendStatus(404);
  }

  console.log("OK");

  const body : unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("director" in body &&
      (typeof body.director !== "string" || !body.director.trim())) ||
    ("duration" in body &&
      (typeof body.duration !== "number" || body.duration <= 0)) ||
    ("budget" in body && (typeof body.budget !== "number" || body.budget <= 0)) ||
    ("description" in body && (typeof body.description !== "string" || !body.description.trim())) ||
    ("imageUrl" in body && (typeof body.imageUrl !== "string" || !body.imageUrl.trim())) 
  ) {
    return res.sendStatus(400);
    }

  const { title, director, duration, budget, description, imageUrl } : Partial<Film> = body;

  if(title) film.title = title;
  if(director) film.director = director;
  if(duration) film.duration = duration;
  if(budget) film.budget = budget;
  if(description) film.description = description;
  if(imageUrl) film.imageUrl = imageUrl;

  return res.sendStatus(200);
});


export default router;

