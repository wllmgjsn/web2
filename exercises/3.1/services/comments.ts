import path from "node:path";

import { Comment, NewComment } from "../types";

import { parse, serialize } from "../utils/json";
import { readAll } from "./films";


const jsonDbPath = path.join(__dirname, "/../data/comments.json");

const defaultComments: Comment[] = [
  {
    id: 1,
    userId: 12,
    filmId: 1,
    content: "Super film, j'ai adoré la mise en scène !"
  },
  {
    id: 2,
    userId: 45,
    filmId: 2,
    content: "Bon rythme mais la fin est un peu décevante."
  },
  {
    id: 3,
    userId: 12,
    filmId: 3,
    content: "Un classique à voir absolument !"
  },
  {
    id: 4,
    userId: 78,
    filmId: 4,
    content: "Trop long, mais les acteurs sont excellents."
  },
  {
    id: 5,
    userId: 34,
    filmId: 5,
    content: "La bande-son est incroyable."
  }
]

const readAllComments = (filmId: number | undefined = undefined): Comment[] => {
  const comments = parse(jsonDbPath, defaultComments);
  return filmId
    ? comments.filter((comment) => comment.filmId = filmId )
    : comments;
};

function readOneComment(commentId : number) : Comment | undefined {
  const comment = parse(jsonDbPath, defaultComments);
  return defaultComments.find((comment) => comment.id === commentId);
}

const createOneComment = (newComment : NewComment) : Comment | undefined => {
  
  const { userId, filmId } = newComment;
  const films = readAll();
  const users = 






  const comments = parse(jsonDbPath, defaultComments);
  const comment = { id : nextId(), ... newComment}
  
  comments.push(comment);
  serialize(jsonDbPath, comments);

  return comment;
}

const nextId = () =>
  parse(jsonDbPath, defaultComments).reduce(
    (maxId, comment) => Math.max(maxId, comment.id),
    0
  ) + 1;


export { readAllComments, readOneComment, createOneComment }