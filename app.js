var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");

var routes = require("./routes/index");

var app = express();
app.set("views", path.join(__dirname, "views"));
var handlebars = expressHandlebars();
app.engine(".handlebars", expressHandlebars({defaultLayout:"layout"},{extname: ".handlebars"}));
app.set("view engine", ".handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "/public")));

app.use("/", routes);

app.set("port", (process.env.PORT || 3000));

app.listen(app.get("port"), function(){
	console.log("Server started on port " + app.get("port"));
});