import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Map from "./components/map";
import Graph from "./components/graph";
import Countries from "./components/countries";
import CountryData from "./components/api";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Container">
        <Countries />
        <Map />
        <Graph />
        <CountryData />
      </div>
    </div>
  );
}

export default App;
