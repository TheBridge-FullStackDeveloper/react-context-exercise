import React, { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {beerData.map((beer) => (
          <Link key={beer.id} to={`${beer.id}`}>
            <div className="bg-white p-4 rounded-md shadow-md">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              <p className="text-lg font-semibold mb-2">{beer.name}</p>
              <p className="text-gray-600">{beer.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
