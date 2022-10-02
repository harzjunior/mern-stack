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

  res.status(200).json(workouts); // returns all the workouts result if everything (our received document) is ok
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
  //if workout does not exist then 400, not found
  if (!workout) {
    return res.status(400).json({ error: "Workout not found" });
  }
  //if workout exists return workout
  res.status(200).json(workout); // returns the single workout result
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
    res.status(200).json(workout); // send the workout created if everything is ok 9
  } catch (err) {
    res.status(400).json({ error: err.message }); // if there is an error then send back a json error message 10
  }
};

//============================================================================

//METHODS: DELETE
//GET /workouts/:id
//--> deletes a single workout document
const deleteSingleWorkout = async (req, res) => {
  //object that represent the the new document we wanna get
  const { id } = req.params; //grab by id which will be used to get the single doc, all routes parameters are stored in params properties

  //check if id is 12 bytes or a string of 24 hex characters
  //if not valid return 404
  // if (!mongoose.isObjectIdOrHexString(id)) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  //object that represent the the new document we wanna get
  const workout = await workoutModels.findByIdAndDelete({ _id: id }); // find id value by the {_id} property since that's the property name in mongodb and delete that.

  //handle error if workout is null/empty
  //if workout does not exist then 400, not found
  if (!workout) {
    return res.status(400).json({ error: "Workout not found" });
  }
  //if workout exists return workout
  res.status(200).json(workout); //returns the workout deleted
};

//============================================================================

//METHODS: PATCH     sends data to the server, we can access that from request params/object. we can access that using express.json middleware in server files
//GET /workouts
//--> updates a single workouts document
const updateWorkout = async (req, res) => {
  //object that represent the the new document we wanna get
  const { id } = req.params; //grab by id which will be used to get the single doc, all routes parameters are stored in params properties

  //check if id is 12 bytes or a string of 24 hex characters
  //if not valid return 404
  // if (!mongoose.isObjectIdOrHexString(id)) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  //object that represent the the new document we wanna get
  const workout = await workoutModels.findByIdAndUpdate(
    { _id: id },
    {
      //we can either update 1 or 2 or all our shema properties (title, reps and load)
      //when we send a patch request, we are sending data with tht request. and that data is what we wan to update.
      //we might send along a json object with title, reps and load properties
      //we will get the properties sent by using req.body
      ...req.body, //we need the previous data copied first by using spread syntax
    }
  ); // find id value by the {_id} property since that's the property name in mongodb, and an object which represent the update we want to make.

  //handle error if workout is null/empty
  //if workout does not exist then 400, not found
  if (!workout) {
    return res.status(400).json({ error: "Workout not found" });
  }
  //if workout exists return workout
  res.status(200).json(workout); //returns the workout object
};

//export all the functions
module.exports = {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteSingleWorkout,
  updateWorkout,
};
