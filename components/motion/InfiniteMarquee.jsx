"use client";

import React from "react";

export default function InfiniteMarquee({
  items,
  speed = 35,
  direction = "left",
  className = "",
  separator = "✦",
  itemClassName = "text-navy",
  separatorClassName = "text-cyan",
}) {
  const content = items || [
    "CYBERSHIELD TECHNOLOGIES",
    "AI PLATFORMS",
    "ENTERPRISE SOFTWARE",
    "SAAS ECOSYSTEMS",
    "APPLIED AI",
    "DISTRIBUTED LEDGERS",
    "GREATER NOIDA HQ",
    "7 VENTURES",
    "120+ CRAFTSMEN",
  ];

  return (
    <div
      className={`relative w-full overflow-hidden whitespace-nowrap select-none py-3 sm:py-4 flex items-center ${className}`}
    >
      <div
        className="flex items-center w-max will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `marqueeFlow ${speed}s linear infinite ${
            direction === "right" ? "reverse" : "normal"
          }`,
        }}
      >
        {/* Double rendering to make infinite loop seamless */}
        {[...Array(2)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center shrink-0">
            {content.map((text, idx) => (
              <div key={idx} className="flex items-center shrink-0 mx-4 sm:mx-8">
                <span
                  className={`font-display font-bold uppercase tracking-tight leading-normal inline-block text-sm sm:text-base md:text-lg lg:text-xl ${itemClassName}`}
                >
                  {text}
                </span>
                <span className={`ml-4 sm:ml-8 text-xs sm:text-sm inline-block ${separatorClassName}`}>
                  {separator}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marqueeFlow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
