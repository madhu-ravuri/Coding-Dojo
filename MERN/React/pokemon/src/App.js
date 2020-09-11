import React, { useState } from 'react';
import './App.css';

import Pokemon from './Components/Pokemon';
import PokeAxios from './Components/Axios';

function App() {
  return (
    <div className="App">
      <Pokemon />
      <PokeAxios />
    </div>
  );
}

export default App;
