const { Author } = require("../models/author.models");

module.exports.index = (req, res) => {
  res.json({
    message: "Home Page Loading...",
  });
};

module.exports.createAuthor = (request, response) => {
  const { fullName } = request.body;
  Author.create({
    fullName,
  })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllAuthors = (req, res) => {
  Author.find({})
    .then((authors) => res.json(authors))
    .catch((err) => res.json(err));
};

module.exports.updateAuthor = (request, response) => {
  Author.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAuthor = (request, response) => {
  Author.findById({ _id: request.params.id })
    .then((oneSingleAuthor) => response.json(oneSingleAuthor))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAuthor = (request, response) => {
  Author.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
