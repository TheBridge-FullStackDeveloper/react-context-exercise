import React, { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const {beerData, isLoading} = useContext(BeerContext)
  const getRandomBeer = () => {
    if (!isLoading && beerData) {
      const randomIndex = Math.floor(Math.random() * beerData.length);
      return beerData[randomIndex];
    }
    return null;
  };

  const randomBeer = getRandomBeer();

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Brewdog BeerTopia
      </h1>
      {isLoading ? (
        <div className="text-center mt-8">Loading...</div>
      ) : (
        <div>
          <p className="text-lg text-gray-600 text-center">
            The beer of the moment:
          </p>
          {randomBeer && (
          <Link to={`gallery/${randomBeer.id}`}>
          <div className="text-center mt-4 max-w-[400px] mx-auto">
              <p className="text-lg font-bold">{randomBeer.name}</p>
              <p>{randomBeer.tagline}</p>
              <img src={randomBeer.image_url} alt={randomBeer.name} className="w-full h-80 object-contain mb-4 rounded-md"/>
            </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
