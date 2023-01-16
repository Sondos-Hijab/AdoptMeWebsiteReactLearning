import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import Details from "./Details";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";

const App = () => {
  const adoptedPet = useState(null);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        casheTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetContext.Provider value={adoptedPet}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </AdoptedPetContext.Provider>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
