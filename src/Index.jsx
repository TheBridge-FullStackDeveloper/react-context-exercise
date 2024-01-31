import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";

export function Index() {
  const { beerData, isLoading } = useContext(BeerContext);

  console.log("beer Data", beerData);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <h1>Beer list</h1>
      <ul>
        {beerData?.map((singleBeer, index) => {
          return (
            <li key={index}>
              <Link to={singleBeer.id.toString()}>{singleBeer.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
