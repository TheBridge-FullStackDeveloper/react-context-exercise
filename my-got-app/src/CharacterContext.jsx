import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        setCharacters(response.data);
      })
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  return (
    <CharacterContext.Provider value={{ characters }}>
      {children}
    </CharacterContext.Provider>
  );
};
