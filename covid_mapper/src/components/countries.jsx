import React, { Component } from "react";
import Country from './country.jsx'

class Countries extends Component {
  state = {
    countries: [
      { id: 1, name: "UK", infections: "10", deaths: "2", recoveries: "3" },
      { id: 2, name: "USA", infections: "10", deaths: "2", recoveries: "3" },
      { id: 3, name: "Italy", infections: "10", deaths: "2", recoveries: "3" },
      { id: 4, name: "Spain", infections: "10", deaths: "2", recoveries: "3" }
    ]
  };

  render() {
    return (
      <div className="countries">
        <h4>Country Statistics</h4>
      {this.state.countries.map(country => (
        <Country
        key={country.id}
        name={country.name}
        infections={country.infections}
        deaths={country.deaths}
        recoveries={country.recoveries}
         />
      ))}
    </div>
    );
  }
}

export default Countries;
