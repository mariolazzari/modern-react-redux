import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";

class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );

    return (
      <div>
        Latitude:
        <SeasonDisplay />
      </div>
    );
  }
}

export default App;
