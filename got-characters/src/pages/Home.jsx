import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const { characters } = useContext(CharacterContext);

  return (
    <div className="home-container">
      <h1>Game of Thrones Characters</h1>
      <div className="character-list">
        {characters.map((character) => (
          <Link key={character.id} to={`/details/${character.id}`} className="character-card">
            <img src={character.imageUrl} alt={character.firstName} />
            <h2>{character.firstName} {character.lastName}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
