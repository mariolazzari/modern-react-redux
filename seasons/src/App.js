import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, error: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ error: err.message })
    );
  }

  renderContent() {
    const { lat, error } = this.state;

    if (lat && !error) {
      return <SeasonDisplay lat={lat} />;
    }

    if (!lat && error) {
      return <div>Error: {error}</div>;
    }

    return <Spinner text="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

export default App;
