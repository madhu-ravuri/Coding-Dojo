const PetController = require("../controllers/pet.controller");

module.exports = function (app) {
  app.post("/api/pets", PetController.createPet);
  app.get("/api/pets/all", PetController.getAllPets);
  app.get("/api/pets/get/:id", PetController.getPet);
  app.put("/api/pets/:id", PetController.updatePet);
  app.delete("/api/pets/:id/delete", PetController.deletePet);
};
