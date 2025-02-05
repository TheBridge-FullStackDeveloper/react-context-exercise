import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { useParams, Link } from "react-router-dom";
import "../styles/details.css";

const Details = () => {
  const { characterId } = useParams();
  const { characters } = useContext(CharacterContext);
  const character = characters.find((char) => char.id === parseInt(characterId));

  if (!character) return <p>Personaje no encontrado</p>;

  return (
    <div className="details-container">
      <img src={character.imageUrl} alt={character.firstName} />
      <h1>{character.firstName} {character.lastName}</h1>
      <h2>{character.title}</h2>
      <p><strong>Familia:</strong> {character.family}</p>
      <Link to="/">Volver a la lista</Link>
    </div>
  );
};

export default Details;
