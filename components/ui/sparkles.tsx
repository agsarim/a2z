"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  animationDuration: number;
  delay: number;
}

export const SparklesCore = ({
  minSize = 0.5,
  maxSize = 1.5,
  particleDensity = 50,
  className,
  colors = ["#FFFFFF", "#8888FF", "#FF88FF"],
}: {
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  colors?: string[];
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const generateSparkle = useCallback((): Sparkle => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = minSize + Math.random() * (maxSize - minSize);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const animationDuration = 1 + Math.random() * 2; // 1 to 3 seconds
    const delay = Math.random() * 2; // 0 to 2 seconds delay

    return {
      id: Math.random().toString(36).substring(2, 9),
      x,
      y,
      size,
      color,
      animationDuration,
      delay,
    };
  }, [minSize, maxSize, colors]);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: particleDensity }, generateSparkle);
    setSparkles(newSparkles);
  }, [particleDensity, generateSparkle]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            backgroundColor: sparkle.color,
            boxShadow: `0 0 ${sparkle.size * 2}px ${sparkle.color}`,
            pointerEvents: "none",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.animationDuration,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeOut",
            delay: sparkle.delay,
          }}
        />
      ))}
    </div>
  );
};
