const { Player } = require("../models/player.models");

module.exports.createPlayer = (request, response) => {
  const { fullName, position, status } = request.body;
  Player.create({
    fullName,
    position,
    status,
  })
    .then((player) => response.json(player))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPlayers = (req, res) => {
  Player.find({})
    .then((players) => res.json(players))
    .catch((err) => res.json(err));
};

module.exports.getPlayer = (request, response) => {
  Player.findById({ _id: request.params.id })
    .then((oneSinglePlayer) => response.json(oneSinglePlayer))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
