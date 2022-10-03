import React from "react";
import { useFitnessContext } from "../hooks/useFitnessContext";

const FitnessDetails = ({ fitness }) => {
  const { title, des, reps, load, createdAt, _id } = fitness;

  //use our custom useFitnessContext hook, only need the dispatch function.
  const { dispatch } = useFitnessContext();

  //functions
  const handleDelete = async () => {
    //fetch request to delete fitness data and its path (fitness/)
    const response = await fetch("fitness/" + _id, {
      method: "DELETE",
    });
    const json = await response.json(); // the delete request doc in json object format

    //check if response is ok then delete the doc
    if (response.ok) {
      dispatch({
        type: "DELETE_FITNESS",
        payload: json, //payload will be the single fitness doc that we want to delete
      }); //dispatch action here is DELETE_FITNESS from fitnessContext (fitnessReducer). while the payload is what we get from the server_4
    }
  };

  return (
    <div className="fitness-details">
      <h4>{title}</h4>
      <p>
        <strong>Description:</strong> {des}
      </p>
      <p>
        <strong>Load: (kg)</strong> {load}
      </p>
      <p>
        <strong>Repetition:</strong> {reps}
      </p>
      <p>
        <em>{createdAt}</em>
      </p>
      {/* a delete button for a doc */}
      <span onClick={handleDelete}>delete</span>
    </div>
  );
};

export default FitnessDetails;
