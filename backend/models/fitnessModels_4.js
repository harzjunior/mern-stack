const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//defining our schema object
const fitnessSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    des: {
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
module.exports = mongoose.model("Fitness", fitnessSchema); // create a model with name Workout (will be our db collection name) and the schema object
