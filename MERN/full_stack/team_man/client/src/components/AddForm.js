import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default () => {
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/players", {
        fullName,
        position,
      })
      .then((res) => {
        console.log(res);
        // navigate("/");
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
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <p>
        <label>Full Name</label>
        <br />
        <input type="text" onChange={(e) => setFullName(e.target.value)} />
      </p>
      <p>
        <label>Preferred Position</label>
        <br />
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
      </p>
      <input type="submit" />
    </form>
  );
};
