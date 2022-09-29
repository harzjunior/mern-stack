// import the dotenv file 8
require("dotenv").config();
//to use express, we need to import the express module 1
const express = require("express");

//invoke the express module 2
const app = express();

//middleware: to monitor the in-between resquest and response from the server  10
app.use((req, res, next) => {
  console.log(req.path, req.method); //the url path, and methods type e.g "GET", "POST", "PUT", "DELETE", "PATCH
  next(); // with out next then the  middleware will stuck to a current middleware
});

//API Endpoints
//METHODS: GET
//GET /workouts   --> gets all the workouts document
//React to request with Route handler 6
app.get("/workouts", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: POST
//GET /workouts   --> creates a new workouts document

//METHODS: GET
//GET /workouts/:id   --> gets a single workout document
app.get("/workouts", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: DELETE
//GET /workouts/:id   --> deletes a single workout document

//METHODS: PATCH
//GET /workouts   --> updates a single workouts document

//listen for requests 3,
//we need nodemon to keep listening for live changes 4
//nodemon server in terminal to detect live changes
//create new script in package.json file: "dev": "nodemon server.js" 5
//now run the dev script: "nodemon server.js" in terminal
//store your port nummber in an env file 7
//we need the node env package install dotenv
// app.listen(port, function () {
//   console.log("listening on port " + port);
// });

//restart the environment server 9
app.listen(process.env.PORT, function () {
  console.log("listening on port ", process.env.PORT);
});
