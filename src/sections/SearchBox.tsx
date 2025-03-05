import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useMovieSearch } from "../hooks/useMovieSearch";
import { addSelectedMovie } from "../store/moviesSlice";
import { Movie } from "../types";

export const SearchBox: React.FC = () => {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const { data: results = [], isLoading, error } = useMovieSearch(query);

  const handleSelectMovie = (movie: Movie) => {
    dispatch(addSelectedMovie(movie));
    setQuery("");
    setDropdownOpen(false);
  };

  const handleClearSearch = () => {
    setQuery("");
    setDropdownOpen(false);
  };

  useEffect(() => {
    if (results.length > 0 && query.trim() !== "") {
      setDropdownOpen(true);
    }
  }, [results, query]);

  return (
    <div className="relative p-2 md:p-4 lg:mx-auto lg:w-2/3">
      <div className="pointer-events-none absolute inset-y-4 start-2 flex items-center ps-4 md:ps-6">
        <svg
          className="h-4 w-4 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>

      <input
        type="search"
        className="block w-full p-4 ps-10 text-sm shadow-md focus:outline-1 focus:outline-yellow-600"
        placeholder="Search movies..."
        onChange={(e) => setQuery(e.target.value)}
        onClick={handleClearSearch}
        value={query}
      />
      <div className="relative">
        <ul className="absolute left-0 z-10 mt-1 w-full overflow-hidden bg-white shadow-lg">
          {dropdownOpen && (
            <>
              {isLoading && <p className="text-md md:text-lg">Loading...</p>}
              {error && <p className="text-md md:text-lg">Error...</p>}
              {!isLoading &&
                !error &&
                results.length > 0 &&
                results.map((movie: Movie) => (
                  <li key={movie.id} className="cursor-pointer">
                    <button
                      onClick={() => handleSelectMovie(movie)}
                      className="w-full px-4 py-2 text-left hover:bg-yellow-600"
                    >
                      {movie.name}
                    </button>
                  </li>
                ))}
              {!isLoading && !error && results.length === 0 && query && (
                <p className="text-md md:text-lg">No results found</p>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
