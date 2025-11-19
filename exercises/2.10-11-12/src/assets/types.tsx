interface Movie {
  title: string;
  director: string;
  duration : number
  description? : string
  imageURL? : string,
  budget? : number,
}

export type { Movie };