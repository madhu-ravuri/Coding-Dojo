const express = require("express");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
    res.json( users );
});

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json({ message: "kitty kitty"});
});

// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
app.get("/api/users/:id", (req, res) => {
      // we can get this `id` variable from req.params
      console.log(req.params.id);
      // assuming this id is the index of the users array we could return one user this way
      res.json( users[req.params.id] );
  });

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );