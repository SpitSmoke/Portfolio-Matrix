import { useEffect } from "react";
import { Background } from "./Styles";

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas")!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = Array(256).fill(0);

    function drawMatrix() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = "16pt monospace";

      letters.forEach((y, i) => {
        const text = String.fromCharCode(65 + Math.random() * 33);
        const x = i * 20;
        ctx.fillText(text, x, y);
        letters[i] =
          y > canvas.height || y > 10000 * Math.random() ? 0 : y + 20;
      });
    }
    setInterval(drawMatrix, 50);
  }, []);

  return <Background />;
};

export default MatrixBackground;
