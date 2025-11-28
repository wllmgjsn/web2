import { Router, Request, Response } from "express";
import { Comment, NewComment } from "../types";
import path from "node:path"
import { readOne } from "../services/films";
import { createOneComment, readAllComments } from "../services/comments";
import { authorize, isAdmin } from "../utils/auths";

const router = Router();
const jsonDbPath = path.join(__dirname, "/../data/comments.json");


router.get('/', (req : Request, res : Response) => {
  const filmId = "filmId" in req.query ? Number(req.query["filmId"]) : undefined;

  if(filmId && isNaN(filmId)) res.sendStatus(400);
  if(filmId && !(readOne(filmId))) res.sendStatus(404);

  const comments : Comment[] = readAllComments();

  return res.send(comments);
})

router.post("/", authorize, isAdmin, (req, res) => {
  const body: unknown = req.body;

  if (
    !body ||
    typeof body !== "object" ||
    !("userId" in body) ||
    !("filmId" in body) ||
    !("content" in body) ||
    typeof body.userId !== "number" ||
    typeof body.filmId !== "number" ||
    typeof body.content !== "string" ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim()))
  ) {
    return res.sendStatus(400);
  }

  const newComment = body as NewComment;

  const addedComment = createOneComment(newComment);

  if (!addedComment) {
    return res.sendStatus(400);
  }

  return res.json(addedComment);
});
