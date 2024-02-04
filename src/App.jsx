import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Homepage } from "./pages/Homepage";
import { Gallery } from "./pages/Gallery";
import { BeerDetail } from "./pages/BeerDetail";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<BeerDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
