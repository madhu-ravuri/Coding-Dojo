const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
  app.get("/api", AuthorController.index);
  app.post("/api/authors", AuthorController.createAuthor);
  app.get("/api/authors/all", AuthorController.getAllAuthors);
  app.get("/api/authors/get/:id", AuthorController.getAuthor);
  app.put("/api/authors/:id", AuthorController.updateAuthor);
  app.delete("/api/authors/:id/delete", AuthorController.deleteAuthor);
};
