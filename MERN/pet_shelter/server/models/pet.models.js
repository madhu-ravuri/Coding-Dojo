const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Pet's name is required."],
    minlength: [3, "Pet's name must be at least 3 characters long."],
  },
  type: {
    type: String,
    required: [true, "Type of pet is required."],
    minlength: [3, "Type of pet must be at least 3 characters long."],
  },
  desc: {
    type: String,
    required: [true, "Description for pet is required."],
    minlength: [3, "Pet's description must be at least 3 characters long."],
  },
  skill1: {
    type: String,
    required: false,
    default: "",
  },
  skill2: {
    type: String,
    required: false,
    default: "",
  },
  skill3: {
    type: String,
    required: false,
    default: "",
  },
});
{
  timestamps: true;
}
module.exports.Pet = mongoose.model("Pet", PetSchema);
