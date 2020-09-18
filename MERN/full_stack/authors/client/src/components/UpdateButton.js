import React from "react";
import { navigate } from "@reach/router";

export default (props) => {
  const { authorId } = props;
  const buttonStyles = {
    padding: "2px 10px",
  };

  const handleClick = (e) => {
    navigate("/edit/" + authorId);
  };

  return (
    <div>
      <button style={buttonStyles} onClick={handleClick}>
        Edit
      </button>
    </div>
  );
};
