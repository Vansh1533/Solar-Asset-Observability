import { useEffect, useRef } from "react";
import { getColor } from "../utils/colorScale";

export default function PerformanceMap({ layout, performance }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    layout.forEach(asset => {
      const pr = performance[asset.id];
      ctx.fillStyle = getColor(pr);

      ctx.fillRect(
        asset.x * 20,
        asset.y * 20,
        18,
        18
      );
    });
  }, [layout, performance]);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
