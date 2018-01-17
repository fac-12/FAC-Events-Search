import React, { Component } from "react";
import "react-dates/initialize";
import "./datepicker.css";
import { DateRangePicker } from "react-dates";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "../../helpers/constants";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  passData = () => {
    const { startDate, endDate } = this.state;
    this.props.onDateSearch({
      startDate: startDate ? startDate._d.getTime() : DEFAULT_START_DATE,
      endDate: endDate ? endDate._d.getTime() : DEFAULT_END_DATE
    });
  };

  render() {
    return (
      <div className="datepicker">
        <DateRangePicker
          startDate={this.state.startDate}
          startDateId="start_date_id"
          endDate={this.state.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput });
          }}
        />
        <button
          onClick={this.passData}
          type="submit"
          className="datepicker_submit"
        >
          Search
        </button>
      </div>
    );
  }
}

export default DatePicker;
