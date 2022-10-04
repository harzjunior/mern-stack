const fitnessModels = require("../models/fitnessModels_4");
const mongoose = require("mongoose"); // to check id hex type

// Our handler functions

//============================================================================
//METHODS: GET
//GET /fitness
//--> gets all fitness doc
const getFitness = async (req, res) => {
  const fitness = await fitnessModels.find({}).sort({ createdAt: -1 });

  res.status(200).json(fitness);
};

//============================================================================
//METHODS: GET
//GET /fitness/:id
//--> gets a single fitness doc
const getSingleFitness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const fitness = await fitnessModels.findById(id);
  if (!fitness) {
    return res.status(400).json({ error: "Workout not found" });
  }
  res.status(200).json(fitness);
};

//============================================================================
//METHODS: POST
//POST /fitness
//--> create a new fitness doc
const createFitness = async (req, res) => {
  const { title, des, reps, load } = req.body;

  const emptyFields = []; //arra to handle form errors

  //logics for the fitness property empty fields
  if (!title) {
    emptyFields.push("title");
  }
  if (!des) {
    emptyFields.push("description");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (!load) {
    emptyFields.push("load");
  }
  //check if the length of emptyField > 0.
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in the required fields", emptyFields }); // the error message and the emptyFields array for the form
  }

  try {
    const fitness = await fitnessModels.create({
      title,
      des,
      reps,
      load,
    });
    res.status(200).json(fitness);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

//============================================================================
//METHODS: DELETE
//DELETE /fitness/:id
//--> delete a fitness doc
const deleteSingleFitness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const fitness = await fitnessModels.findByIdAndDelete({ _id: id });

  if (!fitness) {
    return res.status(400).json({ error: "Workout not found" });
  }
  res.status(200).json(fitness);
};

//============================================================================
//METHODS: UPDATE
//PATCH /fitness/:id
//--> update a fitness doc
const updateFitness = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Invalid id" });
  }

  const fitness = await fitnessModels.findByIdAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!fitness) {
    return res.status(400).json({ error: "Workout not found" });
  }
  res.status(200).json(fitness);
};

//export all the functions
module.exports = {
  getFitness,
  getSingleFitness,
  createFitness,
  deleteSingleFitness,
  updateFitness,
};
