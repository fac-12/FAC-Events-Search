import React, { Component } from "react";

class SearchByTerm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ searchTerm: e.currentTarget.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onTermSearch(this.state.searchTerm);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="search_text_form">
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.onChange}
          placeholder="search..."
        />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchByTerm;
