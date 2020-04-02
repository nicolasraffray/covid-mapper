import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav  className="navbar navbar-dark bg-dark nav-fill w-100">
        <a className="navbar-brand" href="https://github.com/nicolasraffray/Covid19Project2020">
           COVID-19 Worldwide:
           <span className="badge badge-pill badge-warning m-2">Cases: {this.props.total.total_cases}</span>
           <span className="badge badge-pill badge-success m-2">Recoveries: {this.props.total.total_recovered}</span>
           <span className="badge badge-pill badge-danger m-2">Deaths: {this.props.total.total_deaths}</span>
           <span className="badge badge-pill badge m-2">Last Updated: {this.props.total.statistic_taken_at}</span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
