require('dotenv').config();
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var connection;
var path = require('path');
var morgan = require('morgan')

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else{
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: process.env.dbPass,
//   database: process.env.dbName
// });
// };


var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

app.use(morgan('dev'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);


//Render information to the index.handlebars page
// app.get('/', function(req, res){
//   connection.query("SELECT * FROM burgers;", function(err, burgers) {
//     if (err) throw err;
//     res.render("index", {burgers});
//   });
// })

// app.post("/", function(req, res) {
  
//   connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) throw err;

//     res.send("Great Job");
//   });
// });








app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });