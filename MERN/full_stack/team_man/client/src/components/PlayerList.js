import React from "react";

export default (props) => {
  const { allPlayers } = props;

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
            <th>Player</th>
            <th>Preferred Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.fullName}</td>
              <td>{player.position}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
