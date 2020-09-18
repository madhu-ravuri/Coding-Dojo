import React from "react";
// import axios from "axios";
import AuthorForm from "../components/AuthorForm";

export default () => {
  return (
    <div>
      <h2>Favorite Authors</h2>
      <a href="/">Home</a>
      <h4>Add a new author</h4>
      <AuthorForm />
    </div>
  );
};
