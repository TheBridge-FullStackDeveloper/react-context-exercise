import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const BeerContext = createContext();

export const BeerContextProvider = ({ children }) => {
  const punkApi = "https://api.punkapi.com/v2/beers";

  const fetchData = async () => {
    const response = await fetch(punkApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: beerData, isLoading } = useQuery({
    queryKey: ["beerList"],
    queryFn: fetchData,
  });

  const contextValues = {beerData, isLoading};

  return (
    <BeerContext.Provider value={{ ...contextValues }}>
      {children}
    </BeerContext.Provider>
  );
};
