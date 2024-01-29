import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NationsContext = createContext();

export const NationsProvider = ({ children }) => {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
      .then(response => {
        setNations(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <NationsContext.Provider value={{ nations }}>
      {children}
    </NationsContext.Provider>
  );
};

