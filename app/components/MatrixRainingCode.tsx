"use client";

import React, { useEffect, useRef } from "react";

type MatrixRainingCodeProps = {
  className?: string;
};

const MatrixRainingCode: React.FC<MatrixRainingCodeProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    const characters = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charArray = characters.split("");
    let drops: number[] = Array(columns).fill(1);

    const frameRate = 25;
    let lastFrameTime = Date.now();

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "rgba(34, 197, 94, 0.45)";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const animate = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - lastFrameTime;

      if (elapsedTime > 1000 / frameRate) {
        draw();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = Array(columns).fill(1);
    };

    const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);
    if (!isMobileDevice) {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (!isMobileDevice) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const classes = [
    "matrix-canvas",
    "fixed",
    "inset-0",
    "w-full",
    "h-full",
    "pointer-events-none",
    "z-0",
    "opacity-20",
    className,
  ]
    .filter((cls): cls is string => Boolean(cls))
    .join(" ");

  return <canvas ref={canvasRef} className={classes}></canvas>;
};

export default MatrixRainingCode;
