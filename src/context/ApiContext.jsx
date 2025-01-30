import { createContext, useState } from 'react';

export const ApiCallContext = createContext(null);

export const ApiCallContextProvider = ({ children }) => {
    const [apiData, setApiData] = useState(null);
  
    return (
      <ApiCallContext.Provider value={{ apiData, setApiData }}>
        {children}
      </ApiCallContext.Provider>
    );
  };