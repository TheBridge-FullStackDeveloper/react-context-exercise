import { Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { SearchAppBar } from "./SearchAppBar";
import { Index } from "./Index";
import { TitlebarBelowImageList } from "./TitlebarBelowImageList";
import { BeerDetail } from "./BeerDetail";
import { MediaCard } from "./MediaCard";

export function App() {
  return (
    <Routes>
      <Route element={<SearchAppBar />}>
        <Route path="/" element={<TitlebarBelowImageList />} />
        <Route path="/:id" element={<MediaCard />} />
      </Route>
    </Routes>
  );
}
