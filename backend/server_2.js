const express = require("express");
const app = express();
const workoutFitness = require("./routes/fitness_2");

const port = 4002;

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//imported API endpoint router as workoutRoutes
app.use("/", workoutFitness);

//listen for requests
app.listen(port, function () {
  console.log("listening on port ", port);
});
