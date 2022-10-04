import React, { useState } from "react";
import { useFitnessContext } from "../hooks/useFitnessContext";

const FitnessForm = () => {
  //we need to update our dispatch action when we successfully added new doc to our database
  //therefore, we'll need the useFitnessContext hook we created earlier
  const { dispatch } = useFitnessContext(); //we only need the dispatch function,

  //states for our properties
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  //functions: async, because we are reaching out to the API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fitness = { title, des, reps, load };

    //fetch request to post fitness data and its path (fitness/)
    const response = await fetch(`fitness/`, {
      method: "POST",
      body: JSON.stringify(fitness),
      headers: { "Content-Type": "application/json" },
    }); //stringify changes (fitness) body to JSON string: and header property content type is json

    const json = await response.json(); // the created request doc in json object format

    //check if response is not ok then update the state
    if (!response.ok) {
      setError(json.error); //the error property
      setEmptyFields(json.emptyFields); //the empty fields from the server_4
    }

    if (response.ok) {
      // reset all states when formsubmited
      setTitle("");
      setDes("");
      setReps("");
      setLoad("");
      setError(null);
      console.log("New Fitness Successfully Added", json);
      setEmptyFields([]);
      dispatch({
        type: "CREATE_FITNESS",
        payload: json, //payload will be the single fitness doc that was created
      }); //we will use dispatch only when a new doc has been added to the database
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Fitness</h3>

      <label>Fitness title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "errorfield" : ""} //styling error field dyanmically
      />

      <label>Fitness Description:</label>
      <textarea
        type="text"
        onChange={(e) => setDes(e.target.value)}
        value={des}
        className={emptyFields.includes("description") ? "errorfield" : ""} //styling error field dyanmically
      />

      <label>Fitness Reps:</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "errorfield" : ""} //styling error field dyanmically
      />

      <label>Fitness Load in (kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "errorfield" : ""} //styling error field dyanmically
      />
      <button>Add Fitness</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default FitnessForm;
