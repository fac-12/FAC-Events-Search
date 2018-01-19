import React, { Component } from "react";
import DatePicker from "./DatePicker";
import SearchByTerm from "./SearchByTerm";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "../../helpers/constants";

export default class SearchOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      startDate: DEFAULT_START_DATE,
      endDate: DEFAULT_END_DATE
    };
    this.onDateSearch = this.onDateSearch.bind(this);
    this.onTermSearch = this.onTermSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }
  onDateSearch(data) {
    this.props.onSearch({ startDate: data.startDate, endDate: data.endDate });
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
    this.setState({ searchTerm: "" });
    this.props.onSearch({
      searchTerm: "",
      startDate: this.state.startDate,
      endDate: this.state.endDate
    });
  }
  render() {
    return (
      <section className="sidebar_search">
        <h3>Search Events</h3>
        <p>by keyword</p>
        <SearchByTerm
          searchTerm={this.state.searchTerm}
          onTermSearch={this.onTermSearch}
          clearBtn={this.state.searchTerm.length > 0}
          resetSearch={this.resetSearch}
          submitSearch={this.submitSearch}
        />
        <p>by date</p>
        <DatePicker onDateSearch={this.onDateSearch} />
        <button className="sidebar_btn" onClick={this.submitSearch}>
          Search
        </button>
      </section>
    );
  }
}
