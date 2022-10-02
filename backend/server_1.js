const express = require("express");
const app = express();
const port = 4001;

//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//API Endpoints

//METHODS: GET
//GET /fitness   --> get all doc
app.get("/", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: GET
//GET /fitness/:id   --> get single doc
app.get("/:id", (req, res) => {
  res.json({ msg: "GET single Fitness!" });
});

//METHODS: POST,
//GET /fitness   --> create a new doc
app.post("/", (req, res) => {
  res.json({ msg: "POST a new Fitness!" });
});

//METHODS: DELETE
//GET /fitness/:id   --> delete a doc
app.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a Fitness!" });
});

//METHODS: PATCH
//GET /fitness   --> update a doc
app.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a Fitness!" });
});

//listen for requests
app.listen(port, function () {
  console.log("listening on port ", port);
});
