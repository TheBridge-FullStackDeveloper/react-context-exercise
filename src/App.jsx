import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Index } from "./Index";
import { BeerDetail } from "./BeerDetail";

export function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Index />} />
        <Route path="/:id" element={<BeerDetail />} />
      </Route>
    </Routes>
  );
}
