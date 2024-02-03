import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { BeerCardIndex } from "./BeerCardIndex";

export function Index() {
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div style={{margin: 20}}>
        <h1>Beer list</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 100,
          }}
        >
          {beerData?.map((singleBeer, index) => {
            return <BeerCardIndex singleBeer={singleBeer} index={index} />;
          })}
        </div>
      </div>
    </>
  );
}
