const jokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.findAllJokes);
    app.post("/api/jokes/create", jokeController.create);
    app.get("/api/jokes/random", jokeController.random);
    app.get("/api/jokes/:id", jokeController.getOneJoke);
    app.put("/api/jokes/:id/update", jokeController.updateJoke);
    app.delete("/api/jokes/:id/delete", jokeController.deleteJoke);
}