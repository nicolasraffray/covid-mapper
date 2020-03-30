import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MapContainer from "./components/map";
import Graph from "./components/graph";
import Countries from "./components/countries";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Countries />
        <MapContainer />
        <Graph />
      </div>
    </div>
  );
}

export default App;
