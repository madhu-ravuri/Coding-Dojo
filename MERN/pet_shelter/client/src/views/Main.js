import React, { useEffect, useState } from "react";
import axios from "axios";
import PetList from "../components/PetList";

export default () => {
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/all").then((res) => {
      setPets(res.data);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      <h1>Pet Shelter</h1>
      <a href="/pets/new">add a pet to the shelter</a>
      <h3>These pets are looking for a good home</h3>
      {loaded && <PetList allPets={pets} />}
    </div>
  );
};
