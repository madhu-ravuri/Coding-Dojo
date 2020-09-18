import React from "react";
import "./App.css";
import Main from "./views/Main";
import { Router } from "@reach/router";
import NewAuthor from "./views/NewAuthor";
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewAuthor path="/new" />
        <Update path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
