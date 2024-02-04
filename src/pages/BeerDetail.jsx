import React, { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";

export const BeerDetail = () => {
  const { id } = useParams();
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <div className="text-center mt-8">Loading...</div>;
  }
  const selectedBeer = beerData.find((beer) => beer.id === Number(id));
  console.log("🚀 ~ BeerDetail ~ selectedBeer:", selectedBeer);

  return (
      <div className="text-center mt-4 max-w-[600px] mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Know more about our beers{" "}
      </h1>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {selectedBeer.name}
      </h2>
      <p>ABV: {selectedBeer.abv}</p>
      <p>{selectedBeer.tagline}</p>
      <p>First Brewed: {selectedBeer.first_brewed}</p>
        <img
          src={selectedBeer.image_url}
          alt={`${selectedBeer?.name}`}
          className="w-full h-80 object-contain mb-4 rounded-md"
        />
        <p className="text-justify">{selectedBeer.description}</p>
    </div>
  );
};
