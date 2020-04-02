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
    isLoaded: false,
    total: []
  };

  componentDidMount() {
    Promise.all([
      fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "2bb49386fdmsh5daac6ca9add22ep1484a8jsn9816903163ef"
        }
      }),
      fetch(
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "a04279196bmsh77bb3ff9e6f2e74p1f4d03jsn5bc0fbe15879"
          }
        }
      ),
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
    ])

    .then(([res1, res2, res3]) => { 
      return Promise.all([res1.json(), res2.json(), res3.json() ]) 
    })
    
    .then(([res1, res2, res3]) => {
      console.log(res2)
      console.log(res3)
      this.setState ({
        countries: this.createCountry(res2.countries_stat, res3.data['covid19Stats']),
        total: res1
      })
    })      
  }


  createCountry(api_countries, states) {
    const countries = [];
    const usa = [];
    ref_country_codes.ref_country_codes.forEach(one =>
      api_countries.forEach(two => {
        if (two.country_name === "US") {
          usa.push(two);
        }
        if (one.country === two.country_name) {
          countries.push({
            country: two.country_name,
            recovered: two.total_recovered,
            deaths: two.deaths,
            confirmed: two.cases,
            center: { lat: one.latitude, lng: one.longitude }
          });
        }
      })
    );
    
    console.log(countries)
    let a = this.updateUS(states, countries)
  
    return a;
  }

  updateUS(USA, countries) {
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
  

      us_codes.us_codes.forEach(state =>
      finalArray.forEach(obj => {
        if(obj.stateName === 'Georgia'){
          obj.stateName = "Georgia, US"
        }
        if (obj.stateName === state.state) {
          countries.push({
            us: true,
            country: state.state,
            recovered: obj.recovered,
            deaths: obj.deaths,
            confirmed: obj.confirmed,
            center: { lat: state.latitude, lng: state.longitude }
          })
      }})
    )
    return countries
  }


  render() {
    console.log("countries", this.state.countries)
    console.log("totals", this.state.total)
    return (
      <div className="App">
        <Navbar total={this.state.total} />
        <div className="Container">
          <MapContainer countries={this.state.countries} />
        </div>
      </div>
    );
  }
}

export default App;
