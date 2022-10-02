const express = require("express");

//create instance router
const router = express.Router();

//attach handlers to routes
//API Endpoints

//METHODS: GET
//GET /workouts   --> get all doc
router.get("/", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: GET
//GET /workouts/:id   --> get single doc
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single Workout!" });
});

//METHODS: POST,
//GET /workouts   --> create a new doc
router.post("/", (req, res) => {
  res.json({ msg: "POST a new Workout!" });
});

//METHODS: DELETE
//GET /workouts/:id   --> delete a doc
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
});

//METHODS: PATCH
//GET /workouts   --> update a doc
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a Workout!" });
});

//export the router instance
module.exports = router;
