import React, { Component } from "react";

class Country extends Component {
  // state = {
  //   name: "UK",
  //   infections: 0,
  //   deaths: 0,
  //   recoveries: 0
  // };

  render() {
    return (
      <React.Fragment>
          {this.props.name}
          <ul>
            <li>Infections: {this.props.infections}</li>
            <li>Deaths: {this.props.deaths}</li>
            <li>Recoveries: {this.props.recoveries}</li>
          </ul>
      </React.Fragment>
    );
  }
}

export default Country;
