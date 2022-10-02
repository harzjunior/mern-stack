const express = require("express");
const mongoose = require("mongoose");
const app = express();
const workoutFitness = require("./routes/fitness_4");

const port = 4004;

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//imported API endpoint router as workoutRoutes
app.use("/api/fitness/", workoutFitness);

let uri =
  "mongodb+srv://harzjunior:mern123@mern-app.3v0ujnm.mongodb.net/?retryWrites=true&w=majority"; //from mongodb atlass

//listen for requests
mongoose
  .connect(uri)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to MongoDB & listening on port ", port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
