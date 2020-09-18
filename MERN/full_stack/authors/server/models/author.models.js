const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Author's name is required."],
    minlength: [3, "Author's name must be at least 3 characters long."],
  },
});
{
  timestamps: true;
}
module.exports.Author = mongoose.model("Author", AuthorSchema);
