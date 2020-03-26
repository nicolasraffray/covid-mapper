import React, { Component } from "react";

class Map extends Component {
  render() {
    return (
      <div className="map">
        <img
          className="mapImage"
          height="500px"
          width="750px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/World_map_%28Miller_cylindrical_projection%2C_blank%29.svg/1280px-World_map_%28Miller_cylindrical_projection%2C_blank%29.svg.png"
        ></img>
      </div>
    );
  }
}

export default Map;
