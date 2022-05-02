import React, { useEffect, useRef } from "react";
import "./App.css";
import * as d3 from "d3";

const DUMMY_DATA = [
  { id: "d1", value: 10, region: "China" },
  { id: "d2", value: 20, region: "China" },
  { id: "d3", value: 30, region: "India" },
  { id: "d4", value: 40, region: "India" },
  { id: "d5", value: 50, region: "US" },
];

function App() {
  const containerRef = useRef<HTMLDivElement>();
  useEffect(() => {
    const container = d3.select(".container").style("border", "1px solid red");
    const bars = container
      .selectAll(".bar")
      .data(DUMMY_DATA)
      .enter()
      .append("div")
      .classed("bar", true)
      .style("width", 50 + 'px')
      .style("height", (d) => d.value * 10 + 'px');
  }, []);
  return (
    <div className="App">
      <div
        className="container"
        ref={(ref) => {
          if (ref) {
            containerRef.current = ref;
          }
        }}
      >

      </div>
    </div>
  );
}

export default App;
