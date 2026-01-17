import { useState, useMemo } from "react";
import layout from "./data/map_ICR17";
import prData from "./data/pr_ICR17";

import PerformanceMap from "./components/PerformanceMap";
import Timeline from "./components/Timeline";

export default function App() {
  const timestamps = useMemo(
    () => [...new Set(prData.map(d => d.timestamp))],
    []
  );

  const [timeIndex, setTimeIndex] = useState(0);

  const performanceAtTime = useMemo(() => {
    const map = {};
    const selectedTime = timestamps[timeIndex];

    prData.forEach(d => {
      if (d.timestamp === selectedTime) {
        map[d.asset_id] = d.pr;
      }
    });

    return map;
  }, [timeIndex, timestamps]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Solar Performance Map</h2>

      <Timeline
        timestamps={timestamps}
        currentIndex={timeIndex}
        onChange={setTimeIndex}
      />

      <PerformanceMap
        layout={layout}
        performance={performanceAtTime}
      />
    </div>
  );
}
