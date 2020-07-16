import React, { Component, createRef } from "react";

import { GOOGLE_MAP_API_KEY } from "../constans/Secret";

import "./GoogleMap.css";
export default class GoogleMap extends Component {
  googleMapRef = createRef();

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 11,
      center: { lat: 49.324068, lng: 20.107692 },
      disableDefaultUI: false,
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 49.324068, lng: 20.107692 },
      title: "Centrum Rekreacji i Biznesu GRAND Stasinda",
      map: this.googleMap,
    });

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=geometry,search&v=3.exp&language=pl&region=pl`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  render() {
    console.log(this.googleMapRef);
    return <div id="google-map" ref={this.googleMapRef}></div>;
  }
}
