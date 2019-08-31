// SERVER.JS FILE

const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const db = require('./models');


const app = express();
const PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

// Handlebars
let exphbs = require("express-handlebars");

// Initialize Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
let routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});