import React from "react";
import { navigate } from "@reach/router";
import axios from "axios";

export default (props) => {
  const { authorId } = props;
  const buttonStyles = {
    padding: "2px 10px",
  };

  const handleDelete = (e) => {
    axios
      .delete("http://localhost:8000/api/authors/" + authorId + "/delete")
      .then((response) => {
        console.log("Author removed");
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  navigate("/");

  return (
    <div>
      <button style={buttonStyles} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
