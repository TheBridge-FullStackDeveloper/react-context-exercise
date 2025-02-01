import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../CharacterContext';
import './CharactersList.css'; 

function CharactersList() {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>
          <Link to={`/details/${character.id}`}>
            <img src={character.imageUrl} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CharactersList;
