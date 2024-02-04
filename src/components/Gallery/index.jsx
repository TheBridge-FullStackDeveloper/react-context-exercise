import { useQuery } from "@tanstack/react-query";
import React from "react";

export const Gallery = () => {
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

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {beerData.map((beer) => (
          <div key={beer.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={beer.image_url}
              alt={beer.name}
              className="w-full h-40 object-contain mb-4 rounded-md"
            />
            <p className="text-lg font-semibold mb-2">{beer.name}</p>
            <p className="text-gray-600">{beer.tagline}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
