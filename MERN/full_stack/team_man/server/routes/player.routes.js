const PlayerController = require("../controllers/player.controller");

module.exports = function (app) {
  app.post("/api/players", PlayerController.createPlayer);
  app.get("/api/players/all", PlayerController.getAllPlayers);
  app.get("/api/players/get/:id", PlayerController.getPlayer);
  //   app.put("/api/players/:id", PlayerController.updatePlayer);
  //   app.delete("/api/players/:id/delete", PlayerController.deletePlayer);
};
