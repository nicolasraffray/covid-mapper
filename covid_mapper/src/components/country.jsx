import React, { Component } from "react";

class Country extends Component {


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
