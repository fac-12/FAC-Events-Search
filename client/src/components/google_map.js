import React, { Component } from "react";

const google = window.google;

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 16,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" className="mapStyle" />;
  }
}

export default GoogleMap;
