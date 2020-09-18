import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";

export default () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/all").then((res) => {
      setAuthors(res.data);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      <h2>Favorite Authors</h2>
      <a href="/new">Add an Author</a>
      {loaded && <AuthorList allAuthors={authors} />}
    </div>
  );
};
