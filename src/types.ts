export interface SearchResult {
  score: number;
  show: Movie;
}

export interface Movie {
  id: number;
  url: string;
  name: string;
  image: { medium: string; original: string };
  rating: { average: number };
  summary: string;
  addedAt: number;
}
