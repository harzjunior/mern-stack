// Our handler functions

//============================================================================
//METHODS: GET
const getFitness = (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
};

//============================================================================
//METHODS: GET
const getSingleFitness = (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
};

//============================================================================
//METHODS: POST
const createFitness = (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
};

//============================================================================
//METHODS: DELETE
const deleteSingleFitness = (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
};

//============================================================================
//METHODS: UPDATE
const updateFitness = (req, res) => {
  res.json({ msg: "Welcome young Wizard!" });
};

//export all the functions
module.exports = {
  getFitness,
  getSingleFitness,
  createFitness,
  deleteSingleFitness,
  updateFitness,
};
