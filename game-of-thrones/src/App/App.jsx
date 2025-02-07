import "../styles/global.css";
import useGOTCharacters from "../hooks/useGOTCharacters";
import { GotContext } from "../context/GotContext";
import { Routes, Route } from "react-router";
import Home from "../routes/Home";
import Characters from "../routes/Characters";
import CharacterDetails from "../routes/CharacterDetails";
import { Navbar } from "../components/Navbar";

const App = () => {
  const { data: charactersData } = useGOTCharacters();

  return (
    <GotContext.Provider value={charactersData}>

      <Routes>
        <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
        </Route>
      </Routes>

    </GotContext.Provider>
  );
};

export default App;
