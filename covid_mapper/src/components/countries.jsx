import React, { Component } from "react";

class Countries extends Component {
  state = {
    countries: [
      { id: 1, name: "", infections: "", deaths: "", recoveries: "" },
      { id: 2, name: "", infections: "", deaths: "", recoveries: "" },
      { id: 3, name: "", infections: "", deaths: "", recoveries: "" },
      { id: 4, name: "", infections: "", deaths: "", recoveries: "" }
    ]
  };

  render() {
    return;
    <div>
      {countries.map(country => (
        <Country />
      ))}
    </div>;
  }
}

export default Countries;
