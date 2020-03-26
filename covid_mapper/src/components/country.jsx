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
        <button>
          {this.props.name}
        </button>
      </React.Fragment>
    );
  }
}

export default Country;
