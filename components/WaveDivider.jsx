import React from "react";

export default function WaveDivider({
  color = "#ece8df",
  bgColor = "#0A1333",
  inverted = false,
  className = "",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 ${className}`}
      style={{
        transform: inverted ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-16 block preserve-3d"
        preserveAspectRatio="none"
      >
        {/* Layer 2: Counter Wave Accent */}
        <path
          d="M0,32 C240,64 480,12 720,44 C960,76 1200,24 1440,48 L1440,96 L0,96 Z"
          fill="#d1ddcc"
          fillOpacity="0.45"
        />
        {/* Layer 1: Primary Foreground Wave */}
        <path
          d="M0,48 C320,16 640,72 960,36 C1200,12 1360,56 1440,64 L1440,96 L0,96 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
