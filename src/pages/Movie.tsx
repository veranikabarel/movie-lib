import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { useMovieDetails } from "../hooks/useMovieDetails";
import { RootState } from "../store";
import { removeSelectedMovie } from "../store/moviesSlice";

export const Movie: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { selectedMovies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  const movieId = parseInt(id ?? "0", 10);
  const { data: movie, isLoading, isError } = useMovieDetails(movieId);

  const handleRemoveMovie = (id: number) => {
    dispatch(removeSelectedMovie(id));
    navigate("/");
  };

  const selectedMovie = selectedMovies.find((movie) => movie.id === movieId);
  const displayMovie = movie || selectedMovie;

  const createMarkup = (html: string) => {
    return { __html: html };
  };

  if (isLoading) {
    return <div className="px-2 py-4 md:p-4 lg:mx-auto lg:w-2/3 lg:items-center">Loading...</div>;
  }

  if (isError) {
    return <div className="px-2 py-4 md:p-4 lg:mx-auto lg:w-2/3 lg:items-center">Something went wrong...</div>;
  }

  return (
    <div className="px-2 py-4 md:p-4 lg:mx-auto lg:w-2/3 lg:items-center">
      <Link className="my-6 flex items-center gap-1" to="/">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        Go back
      </Link>

      <div className="w-full sm:gap-2 md:flex md:gap-4">
        <div className="md:w-1/2">
          {displayMovie.image?.original ? (
            <img className="mb-4 md:w-2/3" src={displayMovie.image.original} alt={`${displayMovie.name} poster`} />
          ) : (
            <div className="sm:mb-4 md:w-2/3">
              <p className="text-md md:text-lg">No image available</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex items-center justify-between gap-2">
            <h1 className="flex-wrap text-3xl md:text-4xl">{displayMovie.name}</h1>
            <svg
              onClick={() => handleRemoveMovie(movie.id)}
              className="h-4 w-4 hover:cursor-pointer md:h-6 md:w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
            </svg>
          </div>

          <p className="md:text-md text-sm">Rating: {displayMovie.rating.average ?? "No rating"}</p>

          <p className="text-md md:text-lg">
            {displayMovie.summary ? (
              <span dangerouslySetInnerHTML={createMarkup(displayMovie.summary)} />
            ) : (
              "No description"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
