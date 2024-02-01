import { Link } from "react-router-dom";

export function BeerCardIndex({ singleBeer, index }) {
  return (
    <Link to={singleBeer.id.toString()}>
      <div key={index} style={{ display: "flex", flexDirection: "column" }}>
        <img
          src={singleBeer.image_url}
          alt={singleBeer.name}
          style={{ maxHeight: 200, maxWidth: 200 }}
        />
        <p>{singleBeer.name}</p>
      </div>
    </Link>
  );
}
