import React from "react";

export const SearchBox: React.FC = () => {
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
      />
      <div className="relative">
        <ul className="absolute left-0 z-10 mt-1 w-full overflow-hidden bg-white shadow-lg">
          <li key={""} className="cursor-pointer">
            <button className="w-full px-4 py-2 text-left hover:bg-yellow-600">Name</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
