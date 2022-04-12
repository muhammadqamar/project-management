import React from "react";
import { VictoryPie } from "victory";
import "./App.css";
function App() {
  return (
    <div className="App ">
      <h1 className="mt-5 se">Active Project Management</h1>

      <VictoryPie
        colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
        data={[
          { x: "Cats", y: 35 },
          { x: "Dogs", y: 40 },
          { x: "Birds", y: 55 },
        ]}
      />
    </div>
  );
}

export default App;
