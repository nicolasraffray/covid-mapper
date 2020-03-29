import React, { Component } from "react";
import Country from "./country.jsx";

class Countries extends Component {
  state = {
    countries: [],
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
          "x-rapidapi-key": "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef"
        }
      }
    )
      .then(response => response.json())
      .then(response =>
        this.setState(
          {
            countries: response.data["covid19Stats"].slice(3257, 3430),
            isLoaded: true,
            error: false
          },
          error => {
            this.setState({
              isLoaded: false,
              error: true
            });
          }
        )
      );
  }


  render() {
    
    console.log(this.state.countries)
  
    return (
      <div className="countries">
        <h4>Country Statistics</h4>
        {this.state.countries.map(country => (
          <Country
            key={country.country}
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
