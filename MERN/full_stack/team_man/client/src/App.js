import React from "react";
import "./App.css";
import { Router, Redirect, Link } from "@reach/router";
import Main from "./views/Main";
import PlayerForm from "./views/PlayerForm";

function App() {
  return (
    <div className="App">
      <Link to="/">Manage Players</Link> |
      <Link to="/">Manage Player Status</Link>
      <Router>
        <Main path="/players/list" />
        <PlayerForm path="/players/addplayer" />
        <Redirect from="/" to="/players/list" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
