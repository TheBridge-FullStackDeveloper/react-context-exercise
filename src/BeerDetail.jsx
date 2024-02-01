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

  console.log(beer);

  if (!beer) {
    return <p>Beer not found</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 40 }}>
      <div
        style={{ display: "flex", flexDirection: "column", flexBasis: "100%" }}
      >
        <h1>{beer.name}</h1>
        <p>Tagline: {beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Description: {beer.description}</p>
        <p>Abv: {beer.abv}</p>
      </div>
      <div style={{ flexBasis: "100%" }}>
        <img src={beer.image_url} alt={beer.name} style={{ maxHeight: 300 }} />
      </div>
    </div>
  );
}
