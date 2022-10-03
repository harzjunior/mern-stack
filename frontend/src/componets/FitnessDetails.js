import React from "react";

const FitnessDetails = ({ fitness }) => {
  const { title, des, reps, load, createdAt } = fitness;
  return (
    <div className="fitness-details">
      <h4>{title}</h4>
      <p>Description {des}</p>
      <p>
        <strong>Load: (kg)</strong> {load}
      </p>
      <p>
        <strong>Repetition:</strong> {reps}
      </p>
      <p>
        <em>{createdAt}</em>
      </p>
    </div>
  );
};

export default FitnessDetails;
