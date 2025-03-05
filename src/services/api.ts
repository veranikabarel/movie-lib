import { SearchResult } from "../types";

const BASE_URL = "https://api.tvmaze.com";

export const searchMovies = async (query: string): Promise<Array<SearchResult>> => {
  try {
    const data = await fetch(`${BASE_URL}/search/shows?q=${query}`);
    if (!data.ok) {
      throw new Error(`Error: ${data.status}`);
    }
    return await data.json();
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};

export const getMovieById = async (id: number) => {
  try {
    const data = await fetch(`${BASE_URL}/shows/${id}`);
    if (!data.ok) {
      throw new Error(`Error: ${data.status}`);
    }
    return await data.json();
  } catch (err) {
    console.error(`Error: ${err}`);
    throw err;
  }
};
