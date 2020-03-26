import React, { Component } from "react";

class Graph extends Component {
  render() {
    return (
      <div className="graph">
        <img
          className="graphImage"
          height="400px"
          width="600px"
          src="data:image/png;base64,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"
        ></img>
      </div>
    );
  }
}

export default Graph;