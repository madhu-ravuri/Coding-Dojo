import React from 'react';
import './App.css';

import Menu from './Components/Menu';
import Error from './Components/Error';
import { Router, Redirect } from '@reach/router';



function App() {
  return (
    <div className="App">
      <Router>
        <Menu path="/:key/:id" />
        <Error path="/error" />
        <Redirect from="/" to="/people/1" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
