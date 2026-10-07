"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  target,
  duration = 1.8,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayValue, setDisplayValue] = useState("0");

  const valString = String(value ?? target ?? "0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value and suffix safely
    const match = valString.match(/^([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(valString);
      return;
    }

    const targetNumber = parseFloat(match[1]) || 0;
    const suffix = match[2] || "";
    const isDecimal = match[1].includes(".");
    const decimalPlaces = isDecimal ? (match[1].split(".")[1] || "").length : 0;

    let startTime = null;

    const updateCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = targetNumber * easedProgress;

      if (isDecimal) {
        setDisplayValue(`${current.toFixed(decimalPlaces)}${suffix}`);
      } else {
        setDisplayValue(`${Math.floor(current)}${suffix}`);
      }

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(valString);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, valString, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
