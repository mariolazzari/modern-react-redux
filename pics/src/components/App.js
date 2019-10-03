import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const { data } = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: data.results });
  };

  render() {
    const { images } = this.state;

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {images.length} images
      </div>
    );
  }
}

export default App;
