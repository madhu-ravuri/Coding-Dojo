import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import { navigate } from "@reach/router";

export default () => {
  const [pets, setPets] = useState([]);
  const [errors, setErrors] = useState([]);

  const createPet = (pet) => {
    axios
      .post("http://localhost:8000/api/pets", pet)
      .then((res) => {
        setPets([...pets, res.data]);
        navigate("/");
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        console.log(errorArr);
        // Set Errors
        setErrors(errorArr);
      });
  };

  return (
    <div>
      <h1>Pet Shelter</h1>
      <a href="/">back to home</a>
      <h3>Know a pet needing a home?</h3>
      <Form
        onSubmitProp={createPet}
        initialName=""
        initialType=""
        initialDesc=""
        initialSkill1=""
        initialSkill2=""
        initialSkill3=""
        errors={errors}
      />
    </div>
  );
};
