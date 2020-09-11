import React from 'react';
import './App.css';
import { Router } from '@reach/router';

import Welcome from './Components/Welcome';
import Number from './Components/Number';
import WordOnly from './Components/WordBlank';
import StyleWord from './Components/WordStyled';

function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home" />
        <Number path="/home/:id" />
        <WordOnly path="/:word" />
        <StyleWord path="/:word/:Tcolor/:Bcolor" />
      </Router>
      
    </div>
  );
}

export default App;
