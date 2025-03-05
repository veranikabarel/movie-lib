import { Header } from "../sections/Header";
import { MovieList } from "../sections/MovieList";
import { SearchBox } from "../sections/SearchBox";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <SearchBox />
      <MovieList />
    </>
  );
};
