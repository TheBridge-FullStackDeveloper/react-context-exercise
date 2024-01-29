// components/NationDetails.jsx
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NationsContext } from '../context/NationsContext';

const NationDetails = () => {
  const { id } = useParams();
  const { nations } = useContext(NationsContext);
  const nation = nations.find(nation => nation.alpha3Code === id);

  if (!nation) {
    return <div>Nación no encontrada</div>;
  }

  return (
    <div>
      <h1>{nation.name}</h1>
      <img src={nation.flag} alt={`Flag of ${nation.name}`} style={{ width: '100px' }} />
      <p>Capital: {nation.capital}</p>
      <p>Región: {nation.region}</p>
      <p>Idiomas: {nation.languages.map(lang => lang.name).join(', ')}</p>
      <p>Monedas: {nation.currencies.map(currency => `${currency.name} (${currency.code})`).join(', ')}</p>
    </div>
  );
};

export default NationDetails;
