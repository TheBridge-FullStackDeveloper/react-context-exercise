import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CharacterContext } from '../context/CharacterContext';
import FamilyFilter from './FamilyFilter';
import './CharactersList.css';

function CharactersList() {
  const { characters } = useContext(CharacterContext);

  return (
    <div>
      <FamilyFilter />
      <div className="list-container">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <Link to={`/details/${character.id}`}>
              <img src={character.imageUrl} alt={character.name} />
              <h2>{character.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharactersList;
