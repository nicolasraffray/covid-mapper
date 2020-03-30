import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

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
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    console.log(lat, lng);
    // google

    // let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ`
    // fetch(url)
    //   .then(response =>
    //     this.setState(
    //       {
    //         data: response
    //       }
    //     ))
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

  render() {

    // const MapExample = ({ center, zoom }) => {
    return (
      <Map
      google={this.props.google}
      zoom={2}
      initialCenter={{ lat: 52.37572357014853, lng: -0.8866606942867694}}
      onClick={this.onMapClicked}
    >
      <Marker position={{ lat: 51.49547659152124, lng: -0.130530550286716}} />
    </Map>
    );
    // };
  }
}
const googleAPIKey = "AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ";

export default GoogleApiWrapper({
  apiKey: googleAPIKey
})(MapContainer);