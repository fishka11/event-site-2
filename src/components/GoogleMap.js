import React, { Component, createRef } from "react";

import "./GoogleMap.css";

export default class GoogleMap extends Component {
  googleMapRef = createRef();
  render() {
    return <div id="google-map" ref={this.googleMapRef}></div>;
  }
}
