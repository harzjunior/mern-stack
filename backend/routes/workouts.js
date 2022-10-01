//import express from 'express'; 1
const express = require("express");

//create instance router 2
const router = express.Router();

//attach handlers to routes 3
//API Endpoints

//METHODS: GET
//GET /workouts   --> gets all the workouts document
router.get("/", (req, res) => {
  res.json({ msg: "GET all Workouts!" });
});

//METHODS: GET
//GET /workouts/:id   --> gets a single workout document
router.get("/:id", (req, res) => {
  res.json({ msg: "GET single Workout!" });
});

//METHODS: POST,    sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts   --> creates a new workouts document
router.post("/", (req, res) => {
  //   req.body = JSON.stringify(req.body); //
  res.json({ msg: "POST a new Workout!" });
});

//METHODS: DELETE
//GET /workouts/:id   --> deletes a single workout document
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
});

//METHODS: PATCH     sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts   --> updates a single workouts document
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a Workout!" });
});

//export the router instance 4
module.exports = router;
