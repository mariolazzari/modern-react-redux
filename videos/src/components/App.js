import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    try {
      const res = await youtube.get("/search", {
        q: term
      });

      console.log(res);

      this.setState({ videos: res.data.items });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />I have{" "}
        {this.state.videos.lenght} videos.
      </div>
    );
  }
}

export default App;
