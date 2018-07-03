import React, { Component } from "react";
import DayPicker from "react-day-picker";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class SelectFilter extends Component {
  state = {
    from: null,
    to: null
  };

  handleDayClick = day => {
    this.setState(DateUtils.addDayToRange(day, this.state));
  };

  render() {
    const { from, to } = this.state;
    const selectRange =
      from && to && `${from.toDateString()} - ${to.toDateString()}`;
    return (
      <div className="date-range">
        <DayPicker
          ref="daypicker"
          selectedDays={day => DateUtils.isDayInRange(day, { from, to })}
        />
        {selectRange}
      </div>
    );
  }
}

export default SelectFilter;
