import { useContext } from "react";
import { GotContext } from "../context/GotContext";
import { Link } from "react-router-dom";

const Index = () => {
  const gotCharacters = useContext(GotContext);

  return (
    <>
      <div className="got-title">
        <h2>Game of Thrones Characters:</h2>
        {!gotCharacters ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="character-list">
            {gotCharacters.map((character) => (
              <Link to={`/details/${character.id}`} key={character.id}>
                <img src={character.imageUrl} />
                <h3>{character.fullName}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
