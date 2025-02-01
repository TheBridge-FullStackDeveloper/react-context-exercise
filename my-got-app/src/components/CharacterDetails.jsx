import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import './CharacterDetails.css'; 

function CharacterDetails() {
  const { characterId } = useParams();
  const { characters } = useContext(CharacterContext);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const foundCharacter = characters.find(c => c.id.toString() === characterId);
    setCharacter(foundCharacter);
  }, [characterId, characters]);

  return character ? (
    <div>
      <img src={character.imageUrl} alt={`${character.firstName} ${character.lastName}`} />
      <h1>{`${character.firstName} ${character.lastName}`}</h1>
      <p>Title: {character.title}</p>
      <p>Family: {character.family}</p>
    </div>
  ) : <p>Loading...</p>;
}

export default CharacterDetails;
