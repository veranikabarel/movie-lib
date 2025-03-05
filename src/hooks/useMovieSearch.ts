import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../services/api";
import { SearchResult } from "../types";

export const useMovieSearch = (query: string) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: async () => {
      if (!query.trim()) return [];
      const results: Array<SearchResult> = await searchMovies(query);
      return results.map((result) => result.show);
    },
    enabled: !!query,
  });
};
