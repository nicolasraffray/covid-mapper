import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MapContainer from "./components/map";
import Graph from "./components/graph";
import Countries from "./components/countries";
import ref_country_codes from "./components/assets/countries-lat-long.json";
import us_codes from "./components/assets/USlatlong.json";

class App extends Component {
  state = {
    countries: [],
    US: [],
    error: null,
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=US",
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
            countries: this.createCountry(response.data["covid19Stats"]),
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

  createCountry(api_countries, updateUS) {
    const countries = [];
    const usa = [];
    ref_country_codes.ref_country_codes.forEach(one =>
      api_countries.forEach(two => {
        if (two.country === "US") {
          usa.push(two);
        }
        if (one.country === two.country) {
          countries.push({
            country: two.country,
            recovered: two.recovered,
            deaths: two.deaths,
            confirmed: two.confirmed,
            center: { lat: one.latitude, lng: one.longitude }
          });
        }
      })
    );

    this.updateUS(usa);

    return countries;
  }

  updateUS(USA) {
    var totalStates = {};

    USA.forEach(function(d) {
      if (totalStates.hasOwnProperty(d.province)) {
        totalStates[d.province].deaths += d.deaths;
        totalStates[d.province].confirmed += d.confirmed;
        totalStates[d.province].recovered += d.recovered;
      } else {
        totalStates[d.province] = {
          deaths: d.deaths,
          confirmed: d.confirmed,
          recovered: d.recovered
        };
      }
    });
    return totalStates;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Container">
          {/* <Countries countries={this.state.countries} /> */}
          <MapContainer countries={this.state.countries} />
          {/* <Graph /> */}
        </div>
      </div>
    );
  }
}

export default App;
