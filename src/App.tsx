import { BrowserRouter, Route, Routes } from "react-router";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { persistor, store } from "./store";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<Movie />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
