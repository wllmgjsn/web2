import { Router } from "express";
import { Film } from "../types";

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

router.get("/", (_req, res) => {
  return res.json(films);
});

router.get("/films", (req, res) => {
  const maxDuration = Number(req.query["budget-max"]);
  const filteredFilms = films.filter((film) => {
    return film.duration <= maxDuration;
  });
  return res.json(filteredFilms);
})

export default router;