import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import "./DateGraphComp.css";
export default function DateGraphComp({ data }) {
  const defaultDates = data.map((item) =>
    new Date(item.createdAt).toLocaleDateString()
  );
  const dates = defaultDates.map((dateString) => {
    const [day, month, year] = dateString.split("/").map(Number); 
    return new Date(year, month-1 , day); 
  });
  console.log(dates);
  const quantities = data.map((item) => item.quantity);

  return (
    <div className="graph-container">
      <LineChart
        xAxis={[{ data: dates, scaleType: "time" }]}
        series={[
          {
            data: quantities,
            curve:'catmullRom',
            area:'true',
            // showMark:false,
            label:"Quantity vs Date"
          },
        ]}
        height={350}
        colors={[ "#048921","black"]}
        width={550}
        title="Request History"
        curve="smooth"
        className="graph"
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
