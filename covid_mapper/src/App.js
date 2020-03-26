import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Map from "./components/map";
import Graph from "./components/graph";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Map />
        <Graph />
      </div>
    </div>
  );
}

export default App;
