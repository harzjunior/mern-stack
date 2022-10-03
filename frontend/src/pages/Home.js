import React, { useEffect } from "react";
import FitnessDetails from "../componets/FitnessDetails";
import FitnessForm from "../componets/FitnessForm";
import { useFitnessContext } from "../hooks/useFitnessContext";

const Home = () => {
  //Our global context state hook is used here instead of useState hooks
  // const [fitness, setFitness] = useState(null); //we don't need this test state anymore. because we have our own custom state
  //we can use useFitnessContext() and destructure it, so we can fitness and dispatch it provided us with
  const { fitness, dispatch } = useFitnessContext(); //fitness is the initial state from fitnessContext which is null

  //fetch data from our API
  useEffect(() => {
    const fetchFitness = async () => {
      const response = await fetch(`fitness/`);
      const json = await response.json(); //parse json, returns our fitness object

      console.log(json);
      //check if response is ok
      if (response.ok) {
        //update local states
        // setFitness(json); no need for this anymore
        //payload: json is the full array of fitness data from the server_4
        dispatch({ type: "SET_FITNESS", payload: json }); //dispatch action here is SET_FITNESS from fitnessContext (fitnessReducer). while the payload is what we get from the server_4
      }
    };
    fetchFitness(); //call the function
  }, [dispatch]);

  return (
    <div className="home">
      <div className="fitness">
        {fitness &&
          fitness.map((fit) => <FitnessDetails key={fit._id} fitness={fit} />)}
      </div>
      <FitnessForm />
    </div>
  );
};

export default Home;
