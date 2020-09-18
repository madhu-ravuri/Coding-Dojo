const express = require("express");

require("./config/mongoose.config")

const app = express();
app.use(express.json());
require("./routes/jokes.routes")(app);

app.listen(8000, () =>
    console.log(`Listening on port 8000 for REQuests to RESpond to.`)
);