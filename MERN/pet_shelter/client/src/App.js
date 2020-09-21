import React from "react";
import "./App.css";
import Main from "./views/Main";
import AddPet from "./views/AddPet";
import { Router } from "@reach/router";
import PetDetail from "./views/PetDetail";
import PetUpdate from "./views/PetUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <AddPet path="/pets/new" />
        <PetDetail path="/pets/:id" />
        <PetUpdate path="/pets/update/:id" />
      </Router>
    </div>
  );
}

export default App;
