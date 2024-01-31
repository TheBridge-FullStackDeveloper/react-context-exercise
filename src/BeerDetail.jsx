import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";

export function BeerDetail() {
  const { beerData, isLoading } = useContext(BeerContext);
  const { id } = useParams();

  if (isLoading) {
    return <h1>Loading your beer</h1>;
  }

  const beer = beerData?.find((beerItem) => beerItem.id === Number(id));

  if (!beer) {
    return <p>Beer not found</p>;
  }

  return <p>{beer.name}</p>;
}
