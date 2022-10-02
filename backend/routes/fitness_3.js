const express = require("express");
const {
  getFitness,
  getSingleFitness,
  createFitness,
  deleteSingleFitness,
  updateFitness,
} = require("../controllers/fitnessController_3");

//create instance router
const router = express.Router();

//attach handlers to routes
//API Endpoints

//METHODS: GET
//GET /workouts   --> get all doc
router.get("/", getFitness);

//METHODS: GET
//GET /workouts/:id   --> get single doc
router.get("/:id", getSingleFitness);

//METHODS: POST,
//GET /workouts   --> create a new doc
router.post("/", createFitness);

//METHODS: DELETE
//GET /workouts/:id   --> delete a doc
router.delete("/:id", deleteSingleFitness);

//METHODS: PATCH
//GET /workouts   --> update a doc
router.patch("/:id", updateFitness);

//export the router instance
module.exports = router;