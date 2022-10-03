import React, { useEffect, useState } from "react";
import FitnessDetails from "../componets/FitnessDetails";

const Home = () => {
  const [fitness, setFitness] = useState(null);

  //fetch data from our API
  useEffect(() => {
    const fetchFitness = async () => {
      const response = await fetch(`fitness/`);
      const json = await response.json(); //parse json, returns our fitness object

      console.log(json);
      //check if response is ok
      if (response.ok) {
        //update local states
        setFitness(json);
      }
    };
    fetchFitness(); //call the function
  }, []);

  return (
    <div className="home">
      <div className="fitness">
        {fitness &&
          fitness.map((fit) => <FitnessDetails key={fit._id} fitness={fit} />)}
      </div>
    </div>
  );
};

export default Home;
