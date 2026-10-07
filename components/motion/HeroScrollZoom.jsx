"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScrollZoom() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage 1: Proportional expansion to full screen (0 -> 0.6)
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.68, 1.0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.52], ["32px", "0px"]);
  const innerImgScale = useTransform(scrollYProgress, [0, 0.6], [1.16, 1.0]);

  // Overlay text fade out (0.05 -> 0.35)
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.32], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.32], [0, -25]);

  // Stage 2: Slide-up exit to reveal HeroReimagined underneath (0.6 -> 1.0)
  const containerY = useTransform(scrollYProgress, [0.6, 1.0], ["0%", "-100%"]);
  const containerOpacity = useTransform(scrollYProgress, [0.75, 1.0], [1, 0.6]);

  return (
    <div
      ref={containerRef}
      className="relative h-[160vh] w-full bg-canvas-base z-30"
    >
      {/* Sticky Stage Viewport */}
      <motion.div
        style={{
          y: containerY,
          opacity: containerOpacity,
        }}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-30 pointer-events-none"
      >
        {/* Expanding Photo Monolith Card */}
        <motion.div
          style={{
            scale,
            borderRadius,
          }}
          className="relative w-[90vw] sm:w-[82vw] max-w-6xl h-[68vh] sm:h-[74vh] max-h-[740px] overflow-hidden shadow-feature border border-white/40 bg-forest-dark transition-shadow duration-300"
        >
          {/* Inner Image */}
          <motion.div
            style={{ scale: innerImgScale }}
            className="relative w-full h-full"
          >
            <Image
              src="/images/hero-cinematic.jpg"
              alt="CyberShield Botanical Architecture Studio"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/85 via-forest-dark/30 to-transparent" />
            <div className="absolute inset-0 bg-forest-dark/20 backdrop-blur-[0.5px]" />
          </motion.div>

          {/* Cinematic Overlay Text */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY,
            }}
            className="absolute inset-0 p-6 sm:p-10 md:p-14 flex flex-col justify-between text-white pointer-events-none z-10"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-dark/85 backdrop-blur-md border border-white/20">
                <span className="w-2 h-2 rounded-full bg-sage-light animate-pulse-glow" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-sage-light font-semibold">
                  CYBERSHIELD ARCHITECTURAL HORIZON
                </span>
              </div>
              <span className="font-mono text-xs text-white/70 hidden sm:inline-block">
                EST. 2019
              </span>
            </div>

            {/* Bottom Caption & Prompt */}
            <div className="space-y-3">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-sage-light/90 block">
                  CRAFT • TENURE • OWNERSHIP
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                  Engineered for the decade, <br />
                  <span className="italic font-normal text-sage-light underline decoration-sage-stroke decoration-2 underline-offset-8">
                    not the demo
                  </span>
                  .
                </h2>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-sage-light animate-bounce">
                <ChevronDown className="w-4 h-4" />
                <span className="tracking-widest uppercase text-[11px]">
                  SCROLL TO EXPAND & ENTER STUDIO
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
