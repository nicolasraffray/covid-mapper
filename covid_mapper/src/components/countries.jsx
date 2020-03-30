import React, { Component } from "react";
import Country from "./country.jsx";
import ref_country_codes from './assets/countries-lat-long.json' 

class Countries extends Component {

  render() {
    return (
      <div className="countries">
        <h4>Country Statistics</h4>
        {this.props.countries.map(country => (
          <Country
            key={country.country}
            name={country.country}
            infections={country.confirmed}
            deaths={country.deaths}
            recoveries={country.recovered}
            long={country.long}
            lat={country.lat}
          />
        ))}
      </div>
    );
  }
}

export default Countries;
