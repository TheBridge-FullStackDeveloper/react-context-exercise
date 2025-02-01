import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('https://thronesapi.com/api/v2/Characters')
      .then(response => setCharacters(response.data))
      .catch(error => console.error('Error fetching characters:', error));
  }, []);

  const filteredCharacters = filter
    ? characters.filter(character => character.family === filter)
    : characters;

  return (
    <CharacterContext.Provider value={{ characters: filteredCharacters, setFilter }}>
      {children}
    </CharacterContext.Provider>
  );
};
