import React from "react";
import { ChartHolder, ChartTitle, LineChart } from "./SQ.element";
const Chart = ({ chartname, percentage, color }) => {
  return (
    <>
      <ChartHolder>
        <ChartTitle>{chartname}</ChartTitle>
        <LineChart percentage={percentage} color={color}></LineChart>
      </ChartHolder>
    </>
  );
};

export default Chart;
