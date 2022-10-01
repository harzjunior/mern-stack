// import the dotenv file 8
require("dotenv").config();
//to use express, we need to import the express module 1
const express = require("express");
//import mongoose 14
const mongoose = require("mongoose");
//import the workouts file from routes folder 11
const workoutRoutes = require("./routes/workouts");

//invoke the express module 2
const app = express();

//middleware: to monitor the in-between resquest and response from the server  10
app.use(express.json()); //to handle POST and DELETE requests. looks at the body for any existing data, and then accesss it in request handler/patch when json passes it to express 13
app.use((req, res, next) => {
  console.log(req.path, req.method); //the url path, and methods type e.g "GET", "POST", "PUT", "DELETE", "PATCH
  next(); // with out next then the  middleware will stuck to a current middleware
});

//API Endpoints
//METHODS: GET
//GET /workouts   --> gets all the workouts document
//React to request with Route handler 6
// app.get("/workouts", (req, res) => {
//   res.json({ msg: "Welcome young Wizard!" });
// });

//use the workoutRoutes 12
app.use("/api/workouts/", workoutRoutes);

//connect to mongodb database. this takes time therefore, it's async, this returns a promise  15
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log(
        "Connected to MongoDB & listening on port ",
        process.env.PORT
      );
    }); //listen to request once connection is established with the database
  }) //when complete,
  .catch((err) => {
    console.log(err);
  }); //catch error

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
// app.listen(process.env.PORT, function () {
//   console.log("listening on port ", process.env.PORT);
// });
