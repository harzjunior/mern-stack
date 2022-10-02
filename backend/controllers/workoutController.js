// our handler functions
//we will need our workoutModels
const workoutModels = require("../models/workoutModels");
const mongoose = require("mongoose"); // to check id hex type

//============================================================================
//METHODS: GET
//GET /workouts
//--> gets all the workouts document
const getWorkouts = async (req, res) => {
  //object that represent the the new document we wanna get
  const workouts = await workoutModels
    .find({}) //empty arguments finds all documents, e.g if we want to get just reps then finds({reps: 20});
    .sort({ createdAt: -1 }); //sort by created date in descending  order

  res.status(200).json(workouts); // send a workouts responds if everything (our received document) is ok
};

//============================================================================

//METHODS: GET
//GET /workouts/:id
//--> gets a single workout document
const getSingleWorkout = async (req, res) => {
  //object that represent the the new document we wanna get
  const { id } = req.params; //grab by id which will be used to get the single doc, all routes parameters are stored in params properties

  //check if id is 12 bytes or a string of 24 hex characters
  //if not valid return 404
  // if (!mongoose.isObjectIdOrHexString(id)) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  //object that represent the the new document we wanna get
  const workout = await workoutModels.findById(id); //id arguments finds doc by id, e.g if we want to get an _id then findById(_id: ...);

  //handle error if workout is null/empty
  //if workout does not exist then 404, not found
  if (!workout) {
    return res.status(404).json({ error: "Workout not found" });
  }
  //if workout exists return workout
  res.status(200).json(workout);
};

//============================================================================

//METHODS: POST,    sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts
//--> creates a new workouts document
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body; // the schema properties from req and set to req body object 5

  // add a new document to db 6
  try {
    const workout = await workoutModels.create({
      //object that represent the the new document we wanna create 8
      title,
      reps,
      load,
    }); // create a knew workout ( using oiur workoutModels model) 7. this is async
    res.status(200).json(workout); // send a workout responds if everything is ok 9
  } catch (err) {
    res.status(400).json({ error: err.message }); // if there is an error then send back a json error message 10
  }
};

//============================================================================

//METHODS: DELETE
//GET /workouts/:id
//--> deletes a single workout document
const deleteSingleWorkout = (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
};

//============================================================================

//METHODS: PATCH     sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts
//--> updates a single workouts document
const updateSingleWorkout = (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
};

//export all the functions
module.exports = { getWorkouts, getSingleWorkout, createWorkout };
