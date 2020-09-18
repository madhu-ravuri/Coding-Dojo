import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const { id } = props;
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect((id) => {
    axios.get("http://localhost:8000/api/authors/get/" + id).then((res) => {
      setFullName(res.data.fullName);
    });
  }, []);

  const updateAuthor = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/authors/" + id, {
        fullName,
      })
      .then((res) => {
        console.log(res);
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

  const cancelSubmit = (e) => {
    navigate("/");
  };

  return (
    <div>
      <h1>Update Author</h1>
      <form onSubmit={updateAuthor}>
        {errors.map((err, index) => (
          <p key={index}>{err}</p>
        ))}
        <p>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </p>
        <input type="submit" />
      </form>
      <button onClick={cancelSubmit}>Cancel</button>
    </div>
  );
};
