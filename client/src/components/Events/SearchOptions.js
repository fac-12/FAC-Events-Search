import React, { Component } from "react";
import DatePicker from "./DatePicker";
import SearchByTerm from "./SearchByTerm";

export default class SearchOption extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", startDate: null, endDate: null };
    this.onDateSearch = this.onDateSearch.bind(this);
    this.onTermSearch = this.onTermSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }
  onDateSearch(data) {
    this.setState({ startDate: data.startDate, endDate: data.endDate });
  }
  onTermSearch(term) {
    this.setState({ searchTerm: term });
  }
  submitSearch(e) {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
  resetSearch(e) {
    this.setState({ searchTerm: "", startDate: null, endDate: null });
  }
  render() {
    return (
      <section className="sidebar_search">
        <h3>Search Events</h3>
        <SearchByTerm
          searchTerm={this.state.searchTerm}
          onTermSearch={this.onTermSearch}
          clearBtn={this.state.searchTerm.length > 0}
          resetSearch={this.resetSearch}
        />
        <DatePicker onDateSearch={this.onDateSearch} />
        <button className="sidebar_btn" onClick={this.submitSearch}>
          Search
        </button>
      </section>
    );
  }
}