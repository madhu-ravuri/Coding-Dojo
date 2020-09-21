import React, { useEffect, useState } from "react";
import axios from "axios";
import AdoptButton from "../components/AdoptButton";

export default (props) => {
  const [pet, setPet] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/pets/get/" + props.id).then((res) => {
      setPet(res.data);
      console.log(res.data);
    });
  }, []);

  // const listStyles = {
  //   list,
  // };

  return (
    <div>
      <h1>Pet Shelter</h1>
      <AdoptButton petId={pet._id} />
      <a href="/">back to home</a>
      <h3>Details about: {pet.name}</h3>
      <div>
        <p>Pet Type: {pet.type}</p>
        <p>Pet Description: {pet.desc}</p>
        <p>Skills:</p>
        <ul>
          {pet.skill1}
          <br />
          {pet.skill2}
          <br />
          {pet.skill3}
          <br />
        </ul>
      </div>
    </div>
  );
};
