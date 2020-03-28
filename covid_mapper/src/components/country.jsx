import React, { Component } from "react";

class Country extends Component {
  state = {
    handleShow: false
  }

  handleShowData = () => {
    this.setState({
      handleShow: !this.state.handleShow
    }
    )
  }
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleShowData}>{this.props.name}</button>
        {this.state.handleShow && 
        <ul>
          <li>Infections: {this.props.infections}</li>
          <li>Deaths: {this.props.deaths}</li>
          <li>Recoveries: {this.props.recoveries}</li>
        </ul>}
      </React.Fragment>
    );
  }
}

export default Country;
