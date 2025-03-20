// Loads the express module
const express = require("express");
const hbs = require("hbs");

const bodyParser = require("body-parser");

const path = require("path");

//Creates our express server
const app = express();
const port = 3000;

//Serves static files (we need it to import a css file)
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

//Sets a basic route

// Render the initial page with the number input form
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/draw", (req, res) => {
  let sideLength = req.query.sideLength;
  let sideWidth = req.query.sideWidth;
  res.render("draw", {sideLength});
});
app.post("/draw", (req, res) => {
  let sideLength = req.body.sideLength;
  let sideWidth = req.body.sideWidth;
  res.render("draw", {sideLength}, {sideWidth});
});

// Create express route binder for draw.hbs and get the data from the url as parameters
// that came from index.hbs



//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));



//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
