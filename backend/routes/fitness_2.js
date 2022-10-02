const express = require("express");

//create instance router
const router = express.Router();

//attach handlers to routes
//API Endpoints

//METHODS: GET
//GET /fitness   --> get all doc
router.get("/", (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
});

//METHODS: GET
//GET /fitness/:id   --> get single doc
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single Fitness!" });
});

//METHODS: POST,
//GET /fitness   --> create a new doc
router.post("/", (req, res) => {
  res.json({ msg: "POST a new Fitness!" });
});

//METHODS: DELETE
//GET /fitness/:id   --> delete a doc
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a Fitness!" });
});

//METHODS: PATCH
//GET /fitness   --> update a doc
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a Fitness!" });
});

//export the router instance
module.exports = router;
