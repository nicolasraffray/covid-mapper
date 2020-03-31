import React, { Component } from "react";
import Country from "./country.jsx";

class Countries extends Component {

  render() {
    return (
      <div className="countries">
        <h4>Country Statistics</h4>
        {this.props.countries.map((country, index)  => (
          <Country
            key={index}
            name={country.country}
            infections={country.confirmed}
            deaths={country.deaths}
            recoveries={country.recovered}
          />
        ))}
      </div>
    );
  }
}

export default Countries;
