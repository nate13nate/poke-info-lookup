import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import PokemonInfo from './pages/PokemonInfo';

import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonInfo />} />
      </Routes>
    </Router>
  );
}

export default App;