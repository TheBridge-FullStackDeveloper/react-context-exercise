import { Routes, Route } from "react-router-dom";
import { SearchAppBar } from "./SearchAppBar";
import { TitlebarBelowImageList } from "./TitlebarBelowImageList";
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
