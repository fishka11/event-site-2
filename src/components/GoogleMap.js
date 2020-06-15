import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      ></Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "API KEY",
})(MapContainer);
