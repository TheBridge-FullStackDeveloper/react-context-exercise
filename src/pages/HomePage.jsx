import { Outlet } from "react-router-dom";
import beerLogo from "/beer.png";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [showChars] = useState(true);
  const BeersApi = "https://api.punkapi.com/v2/beers";

  const fetchData = async () => {
    const response = await fetch(BeersApi);
    const jsonData = await response.json();
    return jsonData;
  };

  const { data: BeersData, isLoading } = useQuery({
    queryKey: ["beersChars"],
    queryFn: fetchData,
    enabled: showChars,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <a href="https://punkapi.com" target="_blank">
          <img src={beerLogo} className="logo beer" alt="beer logo" />
        </a>
      </div>
      <h1>Beers Page</h1>
      <div className="card">
        <ul>
          {BeersData?.map((char) => (
            <li key={char.id}>
              <Link to={char.id.toString()}>
                <p>{char.name}</p>
                <img src={char.image_url} alt="" />
              </Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};
