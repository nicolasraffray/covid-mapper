import React, { Component } from "react";
import Geocode from "react-geocode";
import GoogleMapReact from "google-maps-react";

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
    const googleAPIKey = "AIzaSyA6sCpEaxSZBY0P5v7ugZZ2HgJlAdlyhiQ";

    // const MapExample = ({ center, zoom }) => {
    return (
      <GoogleMapReact
        google={this.props.google}
        bootstrapURLKeys={{ key: googleAPIKey }}
        yesIWantToUseGoogleMapApiInternals={true}
        defaultZoom={2}
        defaultCenter={{ lng: 51.5074, lat: 0.1278 }}
        onGoogleApiLoaded={({ map, maps }) =>
          this.apiIsLoaded(map, maps, { lng: 51.5074, lat: 0.1278 })
        }
      />
    );
    // };
  }
}
export default MapContainer;
