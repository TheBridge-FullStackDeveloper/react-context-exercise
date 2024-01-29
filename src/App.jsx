import React, { useContext } from 'react';
import { NationsContext } from './context/NationsContext';
import { Link } from 'react-router-dom';

function App() {
  const { nations } = useContext(NationsContext);

  return (
    <div>
      <h1>Listado de Naciones</h1>
      <ul>
        {nations.map(nation => (
          <li key={nation.alpha3Code}>
            <h2>{nation.name}</h2>
            <img src={nation.flag} alt={`Flag of ${nation.name}`} style={{ width: '50px' }} />
            <Link to={`/details/${nation.alpha3Code}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
