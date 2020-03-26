import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="h">
          COVID-19 <span className="badge badge-pill badge-secondary"></span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
