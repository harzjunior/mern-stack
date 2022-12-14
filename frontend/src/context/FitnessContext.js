import { createContext, useReducer } from "react";

//create a custom context provider component
export const FitnessContext = createContext();

// to update the state object, we'll need the dispatch function, with an object arg.
// that demostrate the state changes that we'd like to make

//the arg. inside the dispatch is known as action. this invokes the fitnessReducer function which can then use the data

//our reducer function.
//state --> intial state { fitness: null} from useReducer state
//action --> the dispatch function from useReducer state
export const fitnessReducer = (state, action) => {
  switch (action.type) {
    case "SET_FITNESS": //will be used as a dispatch to fetch the fitness doc
      return {
        fitness: action.payload, //will be what we get from the server_4
      };
    case "CREATE_FITNESS": //will be used as a dispatch to update our state only when doc has been created and submitted to the db
      return {
        fitness: [action.payload, ...state.fitness], //new object plus the previously copied object
      };
    case "DELETE_FITNESS": //will be used as a dispatch to fetch the fitness doc to be deleted
      return {
        //filter throught the initial state by ID before making any changes and return true if we want to doc to remain else false if we don't
        fitness: state.fitness.filter((fit) => fit._id !== action.payload._id), // the doc with ID not equal
      };
    default:
      break;
  }
};

//using the children prop, in this case app componet is the child
//that's being wrapped by FitnessContextProvider
export const FitnessContextProvider = ({ children }) => {
  // fitnessReducer --> reducer and {...} --> initialState
  const [state, dispatch] = useReducer(fitnessReducer, {
    fitness: null,
  });

  // //to update the state object, we'll need the dispatch function, with an object arg.
  // // that demostrate the state changes that we'd like to make
  // dispatch({
  //   type: "SET_FITNESS",
  //   payload: [{}]
  // }); //the arg. inside the dispatch is known as action. this invokes the fitnessReducer function which can then use the data

  // we can provide our app wit state value e.g our fitness objects properties. value={{ fitness: [] }}
  // but since need a dynamic value, so no need to hard code the values to the provider
  //therefore we can create a custome component and pass the state value to the provider
  return (
    //to consume {{ state, dispatch }}, we will use useContext or create custom hook
    //get all the previous state, this could also be just fitness
    <FitnessContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FitnessContext.Provider>
  );
};
