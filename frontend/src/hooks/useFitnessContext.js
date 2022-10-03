import { useContext } from "react";
import { FitnessContext } from "../context/FitnessContext"; //import our created FitnessContext from fitnessContext

export const useFitnessContext = () => {
  const context = useContext(FitnessContext); //usesContext returns the values of our FitnessContext

  //logic to check if the fitness context is used outide the root app component
  if (!context) {
    throw Error(
      "useFitnessContext is not available outside of fitnessContextProvider"
    );
  }
  return context;
};
