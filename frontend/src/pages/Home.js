import React, { useEffect, useState } from "react";

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
    <div>
      <div className="fitness">
        {fitness && fitness.map((fit) => <p key={fit._id}>{fit.des}</p>)}
      </div>
    </div>
  );
};

export default Home;
