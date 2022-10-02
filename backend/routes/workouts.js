//import express from 'express'; 1
const express = require("express");
const {
  getWorkouts,
  createWorkout,
  getSingleWorkout,
  deleteSingleWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
// const workoutModels = require("../models/workoutModels"); // no need for this, it's has been moved to  workoutController.js

//create instance router 2
const router = express.Router();

//attach handlers to routes 3
//API Endpoints

//METHODS: GET
//GET /workouts   --> gets all the workouts document
router.get("/", getWorkouts);

//METHODS: GET
//GET /workouts/:id   --> gets a single workout document
router.get("/:id", getSingleWorkout);

//METHODS: POST,    sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts   --> creates a new workouts document
router.post(
  "/",
  createWorkout

  // async (req, res) => {
  //   // req.body = JSON.stringify(req.body); //

  //   const { title, reps, load } = req.body; // the schema properties from req and set to req body object 5

  //   // add a new document to the workout collection 6
  //   try {
  //     const workout = await workoutModels.create({
  //       //object that represent the the new document we wanna create 8
  //       title,
  //       reps,
  //       load,
  //     }); // create a knew workout ( using oiur workoutModels model) 7. this is async
  //     res.status(200).json(workout); // send a wourk responds if everything is ok 9
  //   } catch (err) {
  //     res.status(400).json({ error: err.message }); // if there is an error then send back a json error message 10
  //   }
  //   // res.json({ msg: "POST a new Workout!" }); // we dont need this test anymore
  // } // we dont need this test anymore, because we have made it into a function in workoutController.js
); // to make this file cleaner and organized, we'd create a file called workoutController.js and write all the handlers functions 11

//METHODS: DELETE
//GET /workouts/:id   --> deletes a single workout document
router.delete("/:id", deleteSingleWorkout);

//METHODS: PATCH     sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts   --> updates a single workouts document
router.patch("/:id", updateWorkout);

//export the router instance 4
module.exports = router;
