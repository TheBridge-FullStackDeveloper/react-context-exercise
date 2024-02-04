import { Outlet, Link } from "react-router-dom";
import beerLogo from "/beer.png";
import { CharacterContext } from "../Context/CharacterContext";
import { useContext } from "react";

export const HomePage = () => {
  const { BeersData, isLoading } = useContext(CharacterContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <a href="https://punkapi.com" target="_blank">
          <img src={beerLogo} style={{ width: '200px', height: 'auto' }} className="logo beer" alt="beer logo" />
        </a>
      </div>
      <h1>Beers Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {BeersData?.map((char) => (
          <div key={char.id} style={{ width: '17%', marginBottom: '2%', boxSizing: 'border-box' }}>
            <Link to={`/details/${char.id.toString()}`} style={{}}>
              <div style={{ border: '1px solid #ddd', borderRadius: '20px', padding: '30px',
            height: '200px'}}>
                <p style={{ margin: '5px', fontSize: '15px'}}>{char.name}</p>
                <img src={char.image_url} alt="" style={{ width: '100%', height: '150px', objectFit: 'contain'}} />
              </div>
            </Link>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
};






