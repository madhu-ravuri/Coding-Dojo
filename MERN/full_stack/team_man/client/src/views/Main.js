import React, { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";
import axios from "axios";

export default () => {
  const [players, setPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/api/players/all").then((res) => {
      setPlayers(res.data);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      <a href="/players/addplayer">Add Player</a>
      {loaded && <PlayerList allPlayers={players} />}
    </div>
  );
};
