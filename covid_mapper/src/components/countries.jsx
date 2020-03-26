import React, { Component } from "react";
import Country from './country.jsx'
import CountryData from './api'

class Countries extends Component {
  state = {
    countries: [
      { id: 1, name: "Iceland", infections: "10", deaths: "2", recoveries: "3" }
    ]
  };

  
  render() {
    console.log(this.getData())
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
