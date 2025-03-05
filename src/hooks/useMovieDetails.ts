import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../services/api";

export const useMovieDetails = (movieId: number) => {
  return useQuery({
    queryKey: ["movies", "details", movieId],
    queryFn: () => getMovieById(movieId),
    enabled: !!movieId,
  });
};
