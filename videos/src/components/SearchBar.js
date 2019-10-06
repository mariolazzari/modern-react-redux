import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onInputSearch = e => this.setState({ term: e.target.value });

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video search</label>
            <input type="text" value={term} onChange={this.onInputSearch} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
