import React, { Component } from "react";
import "react-dates/initialize";
import "./datepicker.css";
import { DateRangePicker } from "react-dates";

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  passData = (startDate, endDate) => {
    this.props.onDateSearch({
      startDate: startDate ? startDate._d.getTime() : null,
      endDate: endDate ? endDate._d.getTime() : null
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
            console.log("dates changed");
            this.setState({ startDate, endDate });
            this.passData(startDate, endDate);
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput });
          }}
          showClearDates={true}
          readOnly={true}
          displayFormat="MMM DD"
          startDatePlaceholderText="Start"
          endDatePlaceholderText="End"
        />
      </div>
    );
  }
}

export default DatePicker;
