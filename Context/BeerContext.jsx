import { createContext } from "react";
import { useQuery } from "@tanstack/react-query";

export const BeerContext = createContext();

export const BeerContextProvider = ({ children }) => {
  const beerApi = "https://api.punkapi.com/v2/beers";

  const fetchData = async () => {
    const response = await fetch(beerApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: beerData, isLoading } = useQuery({
    queryKey: ["beers"],
    queryFn: fetchData,
  });

  const contextValues = {
    beerData,
    isLoading,
  };

  return (
    <BeerContext.Provider value={{ ...contextValues }}>
      {children}
    </BeerContext.Provider>
  );
};
