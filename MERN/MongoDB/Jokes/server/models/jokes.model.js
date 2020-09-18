const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, "{PATH} is a required field."],
            minlength: [10, "{PATH} must be at least {MINLENGTH} characters long."]
        },
        punchline: {
            type: String,
            required: [true, "{PATH} is a required field."],
            minlength: [3, "{PATH} must be at least {MINLENGTH} characters."]
        }
    },
    { timestamps: true }
)
const Jokes = mongoose.model('Jokes', JokeSchema);

module.exports = Jokes;