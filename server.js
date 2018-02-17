//------ Dependencies ------//

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

//------ Setup Express App ------//

var app = express();
var PORT = process.env.PORT || 8080;

//------ Handlebars Setup ------//

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//------ Set app content to static from public directory ------//

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

//------ Import Routes ------//

var routes = require("./controllers/burgers_controller.js");

app.use("/". routes);

app.listen(PORT);