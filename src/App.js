import React from "react";
import Navbar from "./components/navbar";

import NumberOfProject from "./components/NumberOfProject";
import ProjectAnaly from "./components/ProjectAnalysis";
import GeospatialData from "./components/GeospatialData";
import OperatlonalAnalysis from "./components/OperatlonalAnalysis";

import "./App.css";
function App() {
  return (
    <div className="App ">
      <Navbar />
      <NumberOfProject />
      <ProjectAnaly />
      <GeospatialData />
      <OperatlonalAnalysis />
    </div>
  );
}

export default App;
