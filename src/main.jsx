// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NationDetails from './context/NationDetails'; // Modificado para reflejar la ubicación correcta
import { NationsProvider } from './context/NationsContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NationsProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/details/:id" element={<NationDetails />} />
        </Routes>
      </NationsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
