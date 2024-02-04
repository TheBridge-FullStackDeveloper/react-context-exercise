import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Homepage } from "./components/Homepage";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <Routes>
      <Route element={<NavBar />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
