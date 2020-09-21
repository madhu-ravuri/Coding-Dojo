import React from "react";
import { Link } from "@reach/router";

export default (props) => {
  const { allPets } = props;

  const tableStyles = {
    margin: "auto",
    width: 600,
    marginTop: 40,
    border: "1px solid black",
  };

  return (
    <div>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPets.map((pet, index) => (
            <tr key={index}>
              <td>{pet.name}</td>
              <td>{pet.type}</td>
              <td>
                <Link to={`/pets/${pet._id}`}>details</Link> |{" "}
                <Link to={`/pets/update/${pet._id}`}>edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
