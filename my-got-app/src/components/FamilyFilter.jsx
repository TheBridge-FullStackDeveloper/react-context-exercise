import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import './FamilyFilter.css'; 

const FamilyFilter = () => {
  const { setFilter } = useContext(CharacterContext);
  const families = ["Stark", "Lannister", "Targaryen", "Baratheon", "Greyjoy", "Tyrell", "Martell", "Bolton", "Frey"]; // Añade más familias según sea necesario

  return (
    <div className="family-filter-container">
      <label htmlFor="family-select" className="family-filter-label">Escoge una familia:</label>
      <select id="family-select" className="family-filter-select" onChange={e => setFilter(e.target.value)} defaultValue="">
        <option value="">Todos</option>
        {families.map(family => (
          <option key={family} value={family}>{family}</option>
        ))}
      </select>
    </div>
  );
}

export default FamilyFilter;
