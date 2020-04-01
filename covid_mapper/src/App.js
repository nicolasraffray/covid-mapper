import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MapContainer from "./components/map";
import ref_country_codes from "./components/assets/countries-lat-long.json";
import us_codes from "./components/assets/USlatlong.json";

class App extends Component {
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
            countries: this.createCountry(response.data["covid19Stats"]),
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

    var unique = usa.filter((v, i, a) => a.indexOf(v) === i);

    let abc = this.updateUS(unique);
    us_codes.us_codes.forEach(state =>
      abc.forEach(obj => {
        if (obj.stateName === state.state) {
          countries.push({
            country: state.state,
            recovered: obj.recovered,
            deaths: obj.deaths,
            confirmed: obj.confirmed,
            center: { lat: state.latitude, lng: state.longitude }
          });
        }
      })
    );
    return countries;
  }

  updateUS(USA) {
    var totalStates = {};
    let finalArray = [];

    var unique = USA.filter((v, i, a) => a.indexOf(v) === i);

    unique.forEach(function(d) {
      if (totalStates.hasOwnProperty(d.province)) {
        totalStates[d.province].deaths += d.deaths;
        totalStates[d.province].confirmed += d.confirmed;
        totalStates[d.province].recovered += d.recovered;
      } else {
        totalStates[d.province] = {
          stateName: d.province,
          deaths: d.deaths,
          confirmed: d.confirmed,
          recovered: d.recovered
        };
      }
    });

    finalArray = Object.keys(totalStates).map(k => totalStates[k]);
    return finalArray;
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="Container">
          <MapContainer countries={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;
