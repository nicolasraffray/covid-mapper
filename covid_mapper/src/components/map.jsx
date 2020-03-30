import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
import styles from './assets/mapStyle.json'


export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      lng: null,
      data: null
    };
  }

  onMapClicked = (mapProps, map, event) => {
    console.log("YOU CLICKED ON THE MAP")
  }

  onMarkerClicked = (mapProps, marker, event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log("You Clicked on a Marker")
    console.log("lat long",lat, lng)
    console.log("Props", mapProps);
    console.log("Map", marker)
    console.log("event", event)
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
    return this.props.countries.map((country, index) => {
      return <Marker key={index} 
                     id={country.country} 
                     position={ country.center}
                     onClick={this.onMarkerClicked}
                     onMouseOver={this.onMarkerClicked}/>
    }
  )}


  render() {
    console.log(styles)
    return (
      <Map
      google={this.props.google}
      styles={styles}
      zoom={2.25}
      initialCenter={{ lat: 52.37572357014853, lng: -0.8866606942867694}}
      onClick={this.onMapClicked}
    >
      {this.generateMarkers()}
    </Map>
    );
    // };
  }
}
const googleAPIKey = "AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ";

export default GoogleApiWrapper({
  apiKey: googleAPIKey
})(MapContainer);