import React, { Component } from "react";
import Geocode from "react-geocode";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


export class MapContainer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      lat: null, 
      lng: null,
      data: null
    }
  }


  onMapClicked = (mapProps, map, event) => {
    const lat = event.latLng.lat()
    const lng = event.latLng.lng()
    console.log(lat, lng)
    // google


    // let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ`
    // fetch(url)
    //   .then(response => 
    //     this.setState(
    //       {
    //         data: response
    //       }
    //     ))
  }

  render() {
    console.log(this.state.data)
    return (
  
      <Map 
        google={this.props.google} 
        initialCenter={{
          lat: 51.507351,
          lng: -0.127758
        }}
        zoom={2}
        onClick={this.onMapClicked}
        circle={this.handleCircle}> 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ")
})(MapContainer)
