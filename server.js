var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
require('dotenv').config();
var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.dbPass,
  database: process.env.dbName
});
};


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Render information to the index.handlebars page
app.get('/', function(req, res){
  connection.query("SELECT * FROM burgers;", function(err, burgers) {
    if (err) throw err;
    res.render("index", {burgers});
  });
})

app.post("/", function(req, res) {
  
  connection.query("INSERT INTO burgers (name) VALUES (?)", [req.body.burger_name], function(err, result) {
    if (err) throw err;

    res.send("Great Job");
  });
});






app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });