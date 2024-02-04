import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NavBar } from './components/NavBar';
import { BeersDetailPage } from './pages/BeersDetailPage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<BeersDetailPage />} />
        </Route>
      </Routes>
  );
}

export default App;
