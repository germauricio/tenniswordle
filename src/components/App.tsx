import './App.css';
import {getRandomPlayer} from '../services/players';
import Matrix from './matrix/Matrix';
import React, {useState, useEffect} from 'react';

function App() {
  const [squares, setSquares] = useState<string[]>([]);
  useEffect(() => setSquares(getRandomPlayer().toUpperCase().split("")), [])

  return <Matrix squares={squares} player={squares} />;
}

export default App;

