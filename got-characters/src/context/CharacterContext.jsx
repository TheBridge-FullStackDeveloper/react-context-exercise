import { createContext, useState, useEffect } from "react";

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching characters:", error));
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};
