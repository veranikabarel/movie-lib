import React from "react";
import { Link } from "react-router";

export const MovieList: React.FC = () => {
  const selectedMovies = [{}];

  return (
    <div className="p-2 md:p-4 lg:mx-auto lg:w-2/3">
      {selectedMovies.length > 0 ? (
        <ul className="flex flex-col gap-2">
          <li className="flex h-30 justify-between p-2 shadow-md shadow-yellow-600 md:p-4" key={""}>
            <div className="flex w-full gap-4">
              <img className="h-full" src={""} alt={""} />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col gap-2">
                  <div>
                    <Link to={`/movie/123}`}>
                      <h2 className="flex-wrap text-2xl hover:cursor-pointer md:text-3xl">Name</h2>
                    </Link>
                  </div>
                  <div>
                    <p className="md:text-md text-sm">Rating: 0</p>
                  </div>
                </div>

                <div>
                  <svg
                    className="h-4 w-4 hover:cursor-pointer md:h-6 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <p className="text-md md:text-lg">No movies selected</p>
      )}
    </div>
  );
};
