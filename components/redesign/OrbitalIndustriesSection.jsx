"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { industriesData } from "@/data/siteData";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Industry Quotes & Benchmarks (8 Sectors)
const industryQuotes = [
  {
    code: "/01",
    sector: "Banking & Finance",
    quote: "“Secure distributed ledger integration with real-time audit compliance and settlement.”",
    highlight: "Sub-Second Latency",
    id: "finance",
  },
  {
    code: "/02",
    sector: "Clinical Healthcare",
    quote: "“HIPAA-compliant data pipelines and patient management workflows with zero leakage.”",
    highlight: "HIPAA Compliant",
    id: "healthcare",
  },
  {
    code: "/03",
    sector: "Digital Commerce",
    quote: "“High-concurrency headless cart architectures processing peak seasonal checkout surges.”",
    highlight: "99.9% Availability",
    id: "retail",
  },
  {
    code: "/04",
    sector: "Media & Streaming",
    quote: "“Low-latency edge content delivery and automated programmatic digital media assets.”",
    highlight: "Edge Accelerated",
    id: "media",
  },
  {
    code: "/05",
    sector: "Industrial Robotics",
    quote: "“Industrial automation telemetry and predictive equipment maintenance platforms.”",
    highlight: "Real-Time Telemetry",
    id: "manufacturing",
  },
  {
    code: "/06",
    sector: "Real Estate Tech",
    quote: "“Intelligent property management platforms and automated tenant operations.”",
    highlight: "Automated Ops",
    id: "realestate",
  },
  {
    code: "/07",
    sector: "Autonomous Logistics",
    quote: "“Route intelligence, dynamic shipment tracking, and automated dispatch engines.”",
    highlight: "Route Intelligence",
    id: "logistics",
  },
  {
    code: "/08",
    sector: "Cognitive EdTech",
    quote: "“Adaptive skill development graphs tailoring individualized curriculum and mastery.”",
    highlight: "Adaptive Learning",
    id: "education",
  },
];

export default function OrbitalIndustriesSection() {
  // Start with the third card active on load (index 2)
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  const total = industryQuotes.length;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Automatic fan deal swap timer with smooth settling cadence (2.4s)
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2400);

    return () => clearInterval(timer);
  }, [isHovered, total]);

  return (
    <section
      id="industries"
      className="relative py-20 sm:py-28 bg-canvas-base text-navy overflow-hidden border-y border-border-card"
    >
      {/* Ambient Volumetric Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Radial Grid Texture */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(27, 163, 190, 0.4) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />

      <div className="container-anchor relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-border-card">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-navy font-bold bg-surface-light px-3 py-0.5 rounded-full border border-border-card backdrop-blur-md">
                SECTOR ARCHITECTURE FAN
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              WHERE SOFTWARE <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                RESHAPES THE GROUND
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-1">
              Eight mission-critical industries dealt symmetrically along a downward arc. Advance the deck or let it auto-swap continuously.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/industries"
              className="btn-secondary !py-2.5 !px-5 text-xs whitespace-nowrap"
            >
              <span>Explore All 8 Sectors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* TRANSPARENT FAN CAROUSEL STAGE CONTAINER */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-[540px] sm:h-[580px] flex items-center justify-center select-none overflow-visible"
        >
          {/* THE CARDS: Perfectly Symmetric & Liquid Smooth Transition */}
          <div className="relative w-full h-full overflow-hidden sm:overflow-visible">
            {industryQuotes.map((item, idx) => {
              // Calculate signed position pos relative to activeIndex wrapped symmetrically in [-3, +3]
              let diff = idx - activeIndex;
              while (diff > total / 2) diff -= total;
              while (diff < -total / 2) diff += total;

              // When diff is exactly 4 or -4 (the opposite 8th card), hide it smoothly in background
              const isHidden = Math.abs(diff) > 3;
              const pos = diff;
              const isCenter = pos === 0;

              // Fan Carousel Math with balanced spacing
              const translateX = pos * 370 * 0.45;
              const translateY = Math.abs(pos) * 62 * 0.6 + (isCenter ? 22 : 0);
              const rotate = pos * 7.5;

              // Opacity curve: Center 1, pos 1 -> 0.72, pos 2 -> 0.48, pos 3 -> 0.28, hidden -> 0
              let opacity = 0;
              if (!isHidden) {
                if (isCenter) opacity = 1;
                else if (Math.abs(pos) === 1) opacity = 0.72;
                else if (Math.abs(pos) === 2) opacity = 0.48;
                else if (Math.abs(pos) === 3) opacity = 0.28;
              }

              const zIndex = isHidden ? 0 : 100 - Math.abs(pos);

              return (
                <div
                  key={item.code}
                  onClick={() => !isHidden && setActiveIndex(idx)}
                  className={`absolute will-change-transform flex flex-col justify-between ${
                    isHidden ? "pointer-events-none" : "cursor-pointer pointer-events-auto"
                  }`}
                  style={{
                    top: "6%",
                    left: "50%",
                    marginLeft: "-117px",
                    width: "235px",
                    height: "288px",
                    borderRadius: "26px",
                    padding: "22px",
                    transform: `translate3d(${translateX}px, ${translateY}px, 0px) rotate(${rotate}deg)`,
                    opacity: opacity,
                    zIndex: zIndex,
                    // Ultra-smooth liquid settling curve (680ms cubic-bezier)
                    transition:
                      "transform 680ms cubic-bezier(0.16, 1, 0.3, 1), opacity 680ms cubic-bezier(0.16, 1, 0.3, 1), background-color 680ms cubic-bezier(0.16, 1, 0.3, 1), border-color 680ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 680ms cubic-bezier(0.16, 1, 0.3, 1)",
                    ...(isCenter
                      ? {
                          backgroundColor: "#0b1522",
                          color: "#ffffff",
                          boxShadow:
                            "0 22px 55px rgba(11,21,34,0.38), 0 0 45px rgba(27,163,190,0.4)",
                          border: "2px solid #1ba3be",
                        }
                      : {
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          color: "#0b1522",
                          boxShadow: "0 12px 34px rgba(11,21,34,0.09)",
                          border: "1px solid rgba(226, 220, 209, 0.95)",
                        }),
                  }}
                >
                  {/* Top: Sector Code & Prominent Header Title */}
                  <div
                    className={`space-y-2 pb-2.5 border-b transition-colors duration-500 ${
                      isCenter ? "border-white/15" : "border-border-subtle/80"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-full transition-colors duration-500 ${
                          isCenter
                            ? "bg-cyan text-navy-dark"
                            : "bg-surface-warm text-navy border border-border-subtle"
                        }`}
                      >
                        {item.code}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                          isCenter ? "bg-cyan animate-pulse" : "bg-navy/30"
                        }`}
                      />
                    </div>

                    {/* Prominent Visible Sector Heading */}
                    <h4
                      className={`font-display font-extrabold text-sm sm:text-base leading-tight tracking-tight truncate transition-colors duration-500 ${
                        isCenter ? "text-white" : "text-navy"
                      }`}
                    >
                      {item.sector}
                    </h4>
                  </div>

                  {/* Middle: Typographic Quote */}
                  <div className="my-auto text-center px-1">
                    <p
                      className={`font-sans font-medium text-center transition-colors duration-500 ${
                        isCenter ? "text-white/90" : "text-text-body"
                      }`}
                      style={{
                        fontSize: "12.5px",
                        lineHeight: "1.55",
                        fontWeight: 500,
                      }}
                    >
                      {item.quote}
                    </p>
                  </div>

                  {/* Bottom: Production Benchmark Badge */}
                  <div
                    className={`pt-2.5 border-t flex items-center justify-between text-[10px] font-mono font-bold transition-colors duration-500 ${
                      isCenter ? "border-white/15" : "border-border-subtle/80"
                    }`}
                  >
                    <span className={isCenter ? "text-cyan" : "text-text-muted"}>
                      {item.highlight}
                    </span>
                    <span className={isCenter ? "text-cyan" : "text-navy"}>
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NAV: Two 40px Round Buttons Centered at Bottom 16 with 10px Gap */}
          <div
            className="absolute flex items-center justify-center gap-[10px] z-[120]"
            style={{ bottom: "16px", left: "50%", transform: "translateX(-50%)" }}
          >
            {/* Ghost Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous quote card"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-navy bg-surface-light border border-border-card transition-transform duration-200 hover:scale-105 active:scale-95 shadow-subtle hover:bg-white focus:outline-none"
            >
              <ChevronLeft className="w-4 h-4 text-navy" />
            </button>

            {/* Solid Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next quote card"
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white bg-navy transition-transform duration-200 hover:scale-105 active:scale-95 shadow-feature hover:bg-navy-hover focus:outline-none"
            >
              <ChevronRight className="w-4 h-4 text-cyan" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
