import React, { Component } from "react";
import Country from "./country.jsx";

class Countries extends Component {
  state = {
    countries: [],
    US: [],
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
            countries: response.data["covid19Stats"].slice(3261, 3430),
            US: this.updateUS(response.data["covid19Stats"].slice(0, 3170)),
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

  updateUS(USA) {
    const total = [0,0,0]
    USA.map(state => (
      total[0] += state.confirmed
    ))
    USA.map(state => (
      total[1] += state.recovered
    ))
    USA.map(state => (
      total[2] += state.deaths
    ))
    return ([{"country": "US", 
            "confirmed": total[0],
            "recovered": total[1],
            "deaths": total[2]}])
  }


  render() {
    
    console.log(this.state.countries)
    console.log(this.state.US)
  
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
        {this.state.US.map(country => (
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
