const express = require("express");
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//API Endpoints

//METHODS: GET
//GET /workouts   --> get all doc
app.get("/", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: GET
//GET /workouts/:id   --> get single doc
app.get("/:id", (req, res) => {
  res.json({ msg: "GET single Workout!" });
});

//METHODS: POST,
//GET /workouts   --> create a new doc
app.post("/", (req, res) => {
  res.json({ msg: "POST a new Workout!" });
});

//METHODS: DELETE
//GET /workouts/:id   --> delete a doc
app.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
});

//METHODS: PATCH
//GET /workouts   --> update a doc
app.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a Workout!" });
});

//listen for requests
app.listen(port, function () {
  console.log("listening on port ", 4001);
});
