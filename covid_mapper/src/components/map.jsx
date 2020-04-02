import React, { Component } from "react";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  Circle
} from "google-maps-react";
import styles from "./assets/mapStyle.json";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShowing: true,
      activeMarker: null,
      selectedPlace: {},
      activeMarker: {}
    };
  }

  onMapClicked = (mapProps, map, event) => {
    this.setState({
      isMarkerShowing: false,
      activeMarker: ""
    });
  };

  onMarkerClicked = (props, marker, event) => {
    this.setState({
      isMarkerShowing: true,
      selectedPlace: props,
      activeMarker: marker
    });
  };

  // updateMarkerColour() {
  //     if(country.country === "US") {
  //       return "http://maps.google.com/mapfiles/ms/icons/blue.png"
  //     } else {
  //       return "http://maps.google.com/mapfiles/ms/icons/red.png"
  //     }
  //   }
  // };



  generateMarkers = () => {
    return this.props.countries.map((country, i) => {
      return (
        <Marker
          id={country.country}
          key={i}
          position={country.center}
          onClick={this.onMarkerClicked}
          icon={ country.us ? "http://maps.google.com/mapfiles/ms/icons/blue.png" : "http://maps.google.com/mapfiles/ms/icons/red.png"}
          // options={{ icon: { url:"https://cdn3.iconfinder.com/data/icons/science-116/64/virus-lab-scientist-biology-cell-medical-512.png", scaledSize: {width: 25, height: 25}} }}
        ></Marker>
      );
    });
  };



  render() {
    return (
      <Map
        google={this.props.google}
        styles={styles}
        initialCenter={{ lat: 29.94, lng: 31.548 }}
        zoom={2.25}
        minZoom={2.24}
        maxZoom={12}
        onClick={this.onMapClicked}
      >
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.isMarkerShowing}
        >
          {this.props.countries.map(country => {
            if (country.country === this.state.selectedPlace.id) {
              return (
                <div>
                  <h6>{country.country}</h6>
                  Confirmed Cases: {country.confirmed}
                  <br></br>
                  Deaths: {country.deaths}
                  <br></br>
                  Recoveries: {country.recovered}
                </div>
              );
            }
          })}
        </InfoWindow>
        {this.generateMarkers()}
      </Map>
    );
    // };
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API
})(MapContainer);
