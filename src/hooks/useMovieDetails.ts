import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getMovieById } from "../services/api";
import { RootState } from "../store";

export const useMovieDetails = (movieId: number) => {
  const selectedMovie = useSelector((state: RootState) =>
    state.movies.selectedMovies.find((movie) => movie.id === movieId),
  );

  return useQuery({
    queryKey: ["movies", "details", movieId],
    queryFn: () => getMovieById(movieId),
    enabled: !!movieId && !selectedMovie,
    initialData: selectedMovie,
  });
};
