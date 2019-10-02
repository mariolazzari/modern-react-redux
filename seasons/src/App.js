import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message })
    );
  }

  render() {
    const { lat, error } = this.state;

    if (lat && !error) {
      return <SeasonDisplay lat={lat} />;
    }

    if (!lat && error) {
      return <div>Error: {error}</div>;
    }

    return <div>Loading...</div>;
  }
}

export default App;
