import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
