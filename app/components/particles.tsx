"use client";

import React, { useRef, useEffect } from "react";
import { useMousePosition } from "@/util/mouse";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
}

export default function Particles({
  className = "",
  quantity = 300, // Increased quantity for denser digital rain
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  // Array of Katakana characters for the digital rain effect
  const katakanaChars = [
    "ア","イ","ウ","エ","オ",
    "カ","キ","ク","ケ","コ",
    "サ","シ","ス","セ","ソ",
    "タ","チ","ツ","テ","ト",
    "ナ","ニ","ヌ","ネ","ノ",
    "ハ","ヒ","フ","ヘ","ホ",
    "マ","ミ","ム","メ","モ",
    "ヤ","ユ","ヨ",
    "ラ","リ","ル","レ","ロ",
    "ワ","ヲ","ン",
    "ガ","ギ","グ","ゲ","ゴ",
    "ザ","ジ","ズ","ゼ","ゾ",
    "ダ","ヂ","ヅ","デ","ド",
    "バ","ビ","ブ","ベ","ボ",
    "パ","ピ","プ","ペ","ポ"
  ];

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    onMouseMove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition.x, mousePosition.y]);

  useEffect(() => {
    initCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    createParticles();
  };

  const onMouseMove = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const { w, h } = canvasSize.current;
      const x = mousePosition.x - rect.left - w / 2;
      const y = mousePosition.y - rect.top - h / 2;
      const inside =
        x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
      }
    }
  };

  type Particle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
    char: string;
    color: string;
    speed: number;
  };

  const resizeCanvas = () => {
    if (
      canvasContainerRef.current &&
      canvasRef.current &&
      context.current
    ) {
      particles.current = []; // Reset particles
      canvasSize.current.w = canvasContainerRef.current.offsetWidth;
      canvasSize.current.h = canvasContainerRef.current.offsetHeight;
      canvasRef.current.width = canvasSize.current.w * dpr;
      canvasRef.current.height = canvasSize.current.h * dpr;
      canvasRef.current.style.width = `${canvasSize.current.w}px`;
      canvasRef.current.style.height = `${canvasSize.current.h}px`;
      context.current.scale(dpr, dpr);
      // Fill the background with black
      context.current.fillStyle = "black";
      context.current.fillRect(0, 0, canvasSize.current.w, canvasSize.current.h);
    }
  };

  const getRandomChar = (): string => {
    const index = Math.floor(Math.random() * katakanaChars.length);
    return katakanaChars[index];
  };

  const getRandomGreen = (): string => {
    // Generate a random green shade between #00FF00 and #007700
    const greenIntensity = Math.floor(Math.random() * 128) + 128; // 128 to 255
    return `rgb(0, ${greenIntensity}, 0)`;
  };

  const createParticles = () => {
    particles.current = [];
    for (let i = 0; i < quantity; i++) {
      const particle = createParticle();
      particles.current.push(particle);
      drawParticle(particle);
    }
  };

  const createParticle = (): Particle => {
    const x = Math.floor(Math.random() * canvasSize.current.w);
    const y = Math.floor(Math.random() * canvasSize.current.h);
    const translateX = 0;
    const translateY = 0;
    const size = 16; // Font size in pixels
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.5 + 0.3).toFixed(2));
    const dx = (Math.random() - 0.5) * 0.5;
    const dy = (Math.random() - 0.5) * 0.5;
    const magnetism = 0.1 + Math.random() * 4;
    const char = getRandomChar();
    const color = getRandomGreen();
    const speed = Math.random() * 1 + 0.5; // Speed between 0.5 and 1.5

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
      char,
      color,
      speed,
    };
  };

  const drawParticle = (particle: Particle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha, char, color } = particle;
      context.current.save();
      context.current.translate(translateX, translateY);
      context.current.globalAlpha = alpha;
      context.current.fillStyle = color;
      context.current.font = `${size}px monospace`;
      context.current.fillText(char, x, y);
      context.current.restore();

      if (!update) {
        particles.current.push(particle);
      }
    }
  };

  const clearContext = () => {
    if (context.current) {
      // Draw a semi-transparent black rectangle to create trailing effect
      context.current.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.current.fillRect(
        0,
        0,
        canvasSize.current.w,
        canvasSize.current.h
      );
    }
  };

  const createParticlesTrail = () => {
    // Initial creation is handled in createParticles
  };

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  };

  const animate = () => {
    clearContext();
    particles.current.forEach((particle: Particle, i: number) => {
      // Handle the alpha value
      const edge = [
        particle.x + particle.translateX - particle.size, // distance from left edge
        canvasSize.current.w - particle.x - particle.translateX - particle.size, // distance from right edge
        particle.y + particle.translateY - particle.size, // distance from top edge
        canvasSize.current.h - particle.y - particle.translateY - particle.size, // distance from bottom edge
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      );
      if (remapClosestEdge > 1) {
        particle.alpha += 0.02;
        if (particle.alpha > particle.targetAlpha) {
          particle.alpha = particle.targetAlpha;
        }
      } else {
        particle.alpha = particle.targetAlpha * remapClosestEdge;
      }

      // Update position
      particle.x += particle.dx * particle.speed;
      particle.y += particle.dy * particle.speed;

      // Update translation based on mouse position
      particle.translateX +=
        (mouse.current.x / (staticity / particle.magnetism) - particle.translateX) /
        ease;
      particle.translateY +=
        (mouse.current.y / (staticity / particle.magnetism) - particle.translateY) /
        ease;

      // Update character periodically to simulate changing code
      if (Math.random() < 0.01) { // 1% chance each frame
        particle.char = getRandomChar();
      }

      // Boundary conditions: if particle goes out of the canvas, reset it
      if (
        particle.x < -particle.size ||
        particle.x > canvasSize.current.w + particle.size ||
        particle.y < -particle.size ||
        particle.y > canvasSize.current.h + particle.size
      ) {
        // Reset particle to a new position
        particles.current[i] = createParticle();
      }

      // Draw the updated particle
      drawParticle(particle, true);
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div
      className={`${className} relative overflow-hidden bg-black`}
      ref={canvasContainerRef}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
