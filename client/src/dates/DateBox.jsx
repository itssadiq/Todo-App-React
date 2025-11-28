import React from "react";
import {
  currentDate,
  currentDay,
  day2date,
  day2day,
  day3date,
  day3day,
  day4date,
  day4day,
  tomorrowDate,
  tomorrowDay,
  yesterdayDate,
  yesterdayDay,
} from ".";

const DateBox = () => {
  return (
    <div className="date">
      <div className="date-box">
        <div>{yesterdayDay}</div>
        <div>{yesterdayDate}</div>
      </div>
      <div className="date-box current-date">
        <div>{currentDay}</div>
        <div>{currentDate}</div>
      </div>
      <div className="date-box">
        <div>{tomorrowDay}</div>
        <div>{tomorrowDate}</div>
      </div>
      <div className="date-box">
        <div>{day2day}</div>
        <div>{day2date}</div>
      </div>
      <div className="date-box">
        <div>{day3day}</div>
        <div>{day3date}</div>
      </div>
      <div className="date-box">
        <div>{day4day}</div>
        <div>{day4date}</div>
      </div>
    </div>
  );
};

export default DateBox;
