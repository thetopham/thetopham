"use client";

import React, { useRef, useEffect } from "react";

export default function Particles({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
      initMatrix();
      window.addEventListener("resize", initMatrix);
    }

    return () => {
      window.removeEventListener("resize", initMatrix);
    };
  }, []);

  const initMatrix = () => {
    if (canvasRef.current && context.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      context.current.font = "15px monospace";
      startMatrix();
    }
  };

  const startMatrix = () => {
    const matrixChars =
      "アカサタナハマヤラワヰヱヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 16;
    const columns = canvasRef.current!.width / fontSize;
    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * canvasRef.current!.height;
    }

    const draw = () => {
      if (context.current) {
        context.current.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.current.fillRect(
          0,
          0,
          canvasRef.current!.width,
          canvasRef.current!.height
        );

        context.current.fillStyle = "#0F0"; // Green text
        for (let i = 0; i < drops.length; i++) {
          const text = matrixChars.charAt(
            Math.floor(Math.random() * matrixChars.length)
          );
          context.current.fillText(text, i * fontSize, drops[i]);

          if (drops[i] > canvasRef.current!.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          drops[i] += fontSize;
        }
      }
      window.requestAnimationFrame(draw);
    };

    draw();
  };

  return (
    <div className={`${className} w-full h-full`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
