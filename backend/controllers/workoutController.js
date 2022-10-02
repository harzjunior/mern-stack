// our handler functions
//we will need our workoutModels
const workoutModels = require("../models/workoutModels");

//============================================================================
//METHODS: GET
//GET /workouts
//--> gets all the workouts document
const getWorkouts = (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
};

//============================================================================

//METHODS: GET
//GET /workouts/:id
//--> gets a single workout document
const getSingleWorkout = (req, res) => {
  res.json({ msg: "DELETE a Workout!" });
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
    res.status(200).json(workout); // send a wourk responds if everything is ok 9
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
module.exports = { getWorkouts,createWorkout };
