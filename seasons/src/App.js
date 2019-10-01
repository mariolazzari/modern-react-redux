import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = { lat: null, error: "" };

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message })
    );

    const { lat, error } = this.state;

    if (lat && !error) {
      return <div>Latitude: {lat}</div>;
    }

    if (!lat && error) {
      return <div>Error: {error}</div>;
    }

    return <div>Loading...</div>;
  }
}

export default App;
