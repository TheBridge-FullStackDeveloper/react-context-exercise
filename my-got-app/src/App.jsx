import { Routes, Route } from 'react-router-dom';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import { CharacterProvider } from './CharacterContext';

function App() {
  return (
    <CharacterProvider>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
      </Routes>
    </CharacterProvider>
  );
}

export default App;
