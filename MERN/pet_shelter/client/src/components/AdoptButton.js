import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
  const { petId } = props;
  const buttonStyles = {
    backgroundColor: "tomato",
    padding: "4px 10px",
    border: "none",
    borderRadius: "4px",
    color: "beige",
    fontFamily: "verdana",
    fontWeight: "bold",
  };

  const handleDelete = (e) => {
    axios
      .delete("http://localhost:8000/api/pets/" + petId + "/delete")
      .then((response) => {
        console.log("Pet adopted and removed from database");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button style={buttonStyles} onClick={handleDelete}>
        Adopt Pet
      </button>
    </div>
  );
};
