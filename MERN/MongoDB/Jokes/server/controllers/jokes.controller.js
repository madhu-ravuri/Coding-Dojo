const Jokes = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
    Jokes.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes });
        })
        .catch((err) => res.json(err));
}

module.exports.create = (req, res) => {
    Jokes.create(req.body)
        .then((newJoke) => res.json({ newJoke: newJoke }))
        .catch((err) => res.json(err));
}

module.exports.getOneJoke = (req, res) => {
    Jokes.findById(req.params.id)
        .then((joke) => { res.json(joke) })
        .catch((err) => res.json(err));
}

module.exports.updateJoke = (req, res) => {
    Jokes.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true,
        new: true,
    })
        .then((joke) => { res.json(joke) })
        .catch((err) => res.json(err));
}

module.exports.deleteJoke = (req, res) => {
    Jokes.findByIdAndRemove({ _id: req.params.id })
        .then((joke) => {
            res.json(joke)
        })
        .catch((err) => res.json(err));
}

module.exports.random = (req, res) => {
    Joke.aggregate([{ $sample: { size: 1 } }])
        .then((joke) => {
            res.json(joke);
        })
        .catch((err) => {
            res.json(err);
        })
}