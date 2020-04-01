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
      lat: null,
      lng: null,
      data: null,
      selectedPlace: {},
      activeMarker: {}
    };
  }

  onMapClicked = (mapProps, map, event) => {
    console.log("YOU CLICKED ON THE MAP");

    this.setState({
      isMarkerShowing: false,
      activeMarker: ""
    });
    console.log("mapClicked", this.state.isMarkerShowing);
  };

  onMarkerClicked = (props, marker, event) => {
    console.log("THIS IS THE MARKER ID", marker.id);

    this.setState({
      isMarkerShowing: true,
      selectedPlace: props,
      activeMarker: marker
      // activeMarker: marker.id
    });

    console.log("isMarkerShowing", this.state.isMarkerShowing);
    // console.log("You Clicked on a Marker");
    // console.log("MapProps", mapProps);
    // console.log("marker", marker);
    // console.log("event", event);
    // console.log("lat long", lat, lng);
    // console.log("Props", mapProps);
    console.log("Map", marker);
    console.log("event", event);
  };

  apiIsLoaded = (map, maps, center) => {
    const circle = maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.3,
      map,
      center: center,
      radius: 60000
    });
  };

  generateMarkers = () => {
    return this.props.countries.map((country, i) => {
      return (
        <Marker
          id={country.country}
          key={i}
          position={country.center}
          onClick={this.onMarkerClicked}
        ></Marker>
      );
    });
  };

  render() {
    // console.log(styles)
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
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
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
