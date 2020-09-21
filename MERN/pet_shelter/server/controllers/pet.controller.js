const { Pet } = require("../models/pet.models");

module.exports.createPet = (request, response) => {
  const { name, type, desc, skill1, skill2, skill3 } = request.body;
  Pet.create({
    name,
    type,
    desc,
    skill1,
    skill2,
    skill3,
  })
    .then((pet) => response.json(pet))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPets = (req, res) => {
  Pet.find({})
    .then((pets) => res.json(pets))
    .catch((err) => res.json(err));
};

module.exports.getPet = (request, response) => {
  Pet.findById({ _id: request.params.id })
    .then((oneSinglePet) => response.json(oneSinglePet))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updatePet = (request, response) => {
  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedPet) => response.json(updatedPet))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePet = (request, response) => {
  Pet.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
