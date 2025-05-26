import React from "react";
import "./WeeklyBarChart.css";

const data = [
  [  "blue","cyan","gray"],
  ["blue","cyan","gray"],
  ["blue", "cyan","gray"],
  [ "blue", "cyan","gray"],
  [ "blue","cyan","gray" ],
  [  "blue","cyan","gray"],
  [  "blue","cyan","gray"],
];

const dayNames = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const WeeklyBarChart = () => {
  return (
    <div className="bar-chart-container">
      {data.map((bars, index) => (
        <div key={index} className="day-column">
          <div className="bars">
            {bars.map((color, i) => (
              <div key={i} className={`bar ${color}`}></div>
            ))}
          </div>
          <div className="day-label">{dayNames[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyBarChart;
