import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FitnessContextProvider } from "./context/FitnessContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FitnessContextProvider>
      <App />
    </FitnessContextProvider>
  </React.StrictMode>
);
