import React from "react";
import UpdateButton from "./UpdateButton";
import DeleteButton from "./DeleteButton";

export default (props) => {
  const { allAuthors } = props;

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
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {allAuthors.map((author, index) => (
            <tr key={index}>
              <td>{author.fullName}</td>
              <td>
                <UpdateButton authorId={author._id} />
                <DeleteButton authorId={author._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
