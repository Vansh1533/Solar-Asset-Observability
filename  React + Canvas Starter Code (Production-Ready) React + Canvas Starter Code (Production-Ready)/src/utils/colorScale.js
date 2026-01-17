export function getColor(pr) {
  if (pr >= 0.9) return "#2ecc71";   // green
  if (pr >= 0.75) return "#f1c40f";  // yellow
  return "#e74c3c";                  // red
}