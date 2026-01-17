export default function Timeline({ timestamps, currentIndex, onChange }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="range"
        min={0}
        max={timestamps.length - 1}
        value={currentIndex}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />
      <p style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
        Timestamp: <strong>{timestamps[currentIndex]}</strong>
      </p>
    </div>
  );
}
