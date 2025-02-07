import { useContext } from "react";
import { GotContext } from "../context/GotContext";
import { Link } from "react-router";



const Characters = () => {
  const gotCharacters = useContext(GotContext);

  return (
    <>
      <div className="got-title">
        <h2>List of Characters:</h2>
        {!gotCharacters ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <div className="character-list">
            {gotCharacters.map((character) => (
              <Link to={`/details/${character.id}`} key={character.id}>
                <h3>{character.fullName}</h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Characters;
