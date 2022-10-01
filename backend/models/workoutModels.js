//Schema: we will need mongoose for this schema
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define our schema object
//first params, title, reps (repeations), loads (weights in kg).
//second params, timestamps
const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

//make a model object based on the Schema object.
module.exports = mongoose.model("Workout", workoutSchema); // create a model with name Workout (will be our db collection name) and the schema object

//e.g Workout.fin(), finds all the docs in the collection db
