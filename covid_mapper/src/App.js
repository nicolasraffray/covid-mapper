import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MapContainer from "./components/map";
import Graph from "./components/graph";
import Countries from "./components/countries";
import ref_country_codes from "./components/assets/countries-lat-long.json";

class App extends Component {
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
            countries: this.createCountry(
              response.data["covid19Stats"].slice(3261, 3430)
            ),
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

  createCountry(api_countries) {
    const countries = [];
    ref_country_codes.ref_country_codes.forEach(one =>
      api_countries.forEach(two => {
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
    return countries;
  }

  updateUS(USA) {
    const total = [0, 0, 0];
    USA.map(state => (total[0] += state.confirmed));
    USA.map(state => (total[1] += state.recovered));
    USA.map(state => (total[2] += state.deaths));
    return [
      {
        country: "US",
        confirmed: total[0],
        recovered: total[1],
        deaths: total[2]
      }
    ];
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Container">
          <Countries countries={this.state.countries} />
          <MapContainer countries={this.state.countries} />
          <Graph />
        </div>
      </div>
    );
  }
}

export default App;
