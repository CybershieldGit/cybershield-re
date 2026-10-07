"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import { useModal } from "@/context/ModalContext";
import MagneticButton from "@/components/motion/MagneticButton";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { ArrowUpRight, ArrowRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   SLOT MACHINE ROLLING TEXT EFFECT — Precision Tumbler Reels
───────────────────────────────────────────────────────────── */
const RANDOM_GLYPHS = [
  "0", "X", "7", "A", "9", "K", "4", "Z", "8", "W", "1", "M", "3", "Q", "5", "R", "J", "E"
];

function SlotMachineChar({
  targetChar,
  index,
  baseDelay = 0.1,
  className = "",
  style = {},
}) {
  if (targetChar === " ") {
    return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  }

  // Build slot reel: 9 rapidly spinning characters + final targetChar
  const reel = [
    RANDOM_GLYPHS[(index * 3 + 1) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 5 + 3) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 7 + 5) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 2 + 7) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 4 + 9) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 6 + 2) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 8 + 4) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 3 + 8) % RANDOM_GLYPHS.length],
    RANDOM_GLYPHS[(index * 7 + 2) % RANDOM_GLYPHS.length],
    targetChar,
  ];

  // Exact percentage of the total reel height to reveal the targetChar at the bottom
  const rollDistance = `-${((reel.length - 1) / reel.length) * 100}%`;
  const duration = 1.2 + index * 0.12; // Staggered spin duration
  const delay = baseDelay + index * 0.06; // Staggered start delay

  return (
    <span
      className={`inline-block overflow-hidden h-[1.12em] align-top select-none ${className}`}
      style={style}
    >
      <motion.span
        initial={{ y: "0%", filter: "blur(4px)" }}
        animate={{ y: rollDistance, filter: "blur(0px)" }}
        transition={{
          duration,
          delay,
          ease: [0.14, 0.96, 0.22, 1.0], // Snappy mechanical slot machine deceleration curve
        }}
        className="flex flex-col will-change-transform"
      >
        {reel.map((char, i) => (
          <span
            key={i}
            className="flex items-center justify-center h-[1.12em] leading-none shrink-0"
          >
            {char}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

function SlotMachineWord({
  text,
  baseDelay = 0.1,
  className = "",
  style = {},
}) {
  const chars = Array.from(text);
  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      aria-label={text}
      style={style}
    >
      {chars.map((char, i) => (
        <SlotMachineChar
          key={i}
          targetChar={char}
          index={i}
          baseDelay={baseDelay}
        />
      ))}
    </span>
  );
}

export default function HeroUnified() {
  const { openConsultation } = useModal();
  const heroRunwayRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  /* ─── Scroll-Driven Kinetic Runway (240vh) ─── */
  const { scrollYProgress } = useScroll({
    target: heroRunwayRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  /* ─── Interactive Mouse Parallax ─── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spMouseX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const spMouseY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const mouseHlX = useTransform(spMouseX, [-1, 1], [-14, 14]);
  const mouseHlY = useTransform(spMouseY, [-1, 1], [-8, 8]);

  /* ─── Scroll Transformation Choreography ─── */
  // 1. Brand name split: CYBER drifts Left, SHIELD drifts Right on scroll
  const scrollCyberX = useTransform(smoothProgress, [0, 0.7], ["0%", "-14%"]);
  const scrollShieldX = useTransform(smoothProgress, [0, 0.7], ["0%", "14%"]);
  const scrollBrandScale = useTransform(smoothProgress, [0, 0.65], [1.0, 0.88]);
  const scrollBrandOpacity = useTransform(
    smoothProgress,
    [0.35, 0.75],
    [1.0, 0.0],
  );
  const scrollBrandY = useTransform(
    smoothProgress,
    [0, 0.75],
    ["0px", "-60px"],
  );

  // 2. Framing lines stretch wider as user scrolls
  const lineScaleX = useTransform(smoothProgress, [0, 0.5], [1.0, 2.2]);

  // 3. Middle body thesis & CTAs departure
  const subContentOpacity = useTransform(smoothProgress, [0, 0.28], [1.0, 0.0]);
  const subContentY = useTransform(smoothProgress, [0, 0.28], ["0px", "-40px"]);

  // 4. Bottom stats strip subtle outward spread & fade
  const statSpreadLeft = useTransform(
    smoothProgress,
    [0, 0.4],
    ["0px", "-20px"],
  );
  const statSpreadRight = useTransform(
    smoothProgress,
    [0, 0.4],
    ["0px", "20px"],
  );
  const statsOpacity = useTransform(smoothProgress, [0.15, 0.45], [1.0, 0.0]);

  // 5. Scroll progress edge indicator
  const progressScaleY = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={heroRunwayRef}
      className="relative w-full h-[240vh] bg-canvas-base text-navy selection:bg-cyan selection:text-navy"
    >
      {/* ─── SCROLL PROGRESS EDGE INDICATOR ─── */}
      <div className="fixed right-0 top-0 w-[2px] h-screen z-50 pointer-events-none bg-navy/[0.08]">
        <motion.div
          style={{ scaleY: progressScaleY, transformOrigin: "top" }}
          className="w-full h-full bg-cyan shadow-[0_0_10px_rgba(27,163,190,0.5)]"
        />
      </div>

      {/* ─── STICKY CINEMATIC STAGE ─── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between bg-canvas-base">
        {/* TOP NAV TELEMETRY STRIP */}
        <AnimatePresence>
          {mounted && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 pt-7 border-b border-navy/[0.08] pb-4"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan shadow-[0_0_8px_rgba(27,163,190,0.8)]" />
                </span>
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-navy">
                  PARENT TECHNOLOGY GROUP
                </span>
              </div>

              <div className="hidden md:flex items-center gap-5 font-mono text-[11px] text-navy/60">
                <span className="px-2.5 py-0.5 rounded-full bg-white/70 border border-navy/[0.12] text-navy font-semibold shadow-xs">
                  GREATER NOIDA HQ
                </span>
                <span className="text-navy/25">·</span>
                <span>7 VENTURES</span>
                <span className="text-navy/25">·</span>
                <span>120+ ENGINEERS</span>
                <span className="text-navy/25">·</span>
                <span className="font-semibold text-navy">EST. 2019</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── MAIN KINETIC BRAND LOCKUP STAGE ─── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 my-auto">
          {mounted && (
            <>
              {/* Assembling Category Tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ opacity: subContentOpacity, y: subContentY }}
                className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-navy/[0.12] bg-white/80 backdrop-blur-md shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_rgba(27,163,190,0.8)]" />
                <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-cyan">
                  PARENT TECHNOLOGY CORPORATION · EST. 2019
                </span>
              </motion.div>

              {/* GRAND KINETIC BRAND NAME: CYBER SHIELD TECHNOLOGIES */}
              <motion.div
                style={{
                  x: mouseHlX,
                  y: mouseHlY,
                  scale: scrollBrandScale,
                  opacity: scrollBrandOpacity,
                  translateY: scrollBrandY,
                }}
                className="space-y-2 sm:space-y-3 mb-6 max-w-5xl will-change-transform"
              >
                {/* Line 1: CYBER SHIELD with Slot Machine Tumbler Roll & Scroll Split */}
                <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 overflow-visible select-none">
                  {/* Word 1: CYBER — Slot Machine Roll, drifts LEFT on scroll */}
                  <motion.div
                    style={{ x: scrollCyberX }}
                    className="leading-none"
                  >
                    <SlotMachineWord
                      text="CYBER"
                      baseDelay={0.18}
                      className="font-outfit font-black tracking-[-0.03em] uppercase text-navy text-[clamp(3.6rem,9.2vw,9.6rem)] leading-none"
                    />
                  </motion.div>

                  {/* Word 2: SHIELD — Slot Machine Roll, drifts RIGHT on scroll */}
                  <motion.div
                    style={{ x: scrollShieldX }}
                    className="leading-none"
                  >
                    <SlotMachineWord
                      text="SHIELD"
                      baseDelay={0.38}
                      className="font-outfit font-black tracking-[-0.03em] uppercase text-cyan text-[clamp(3.6rem,9.2vw,9.6rem)] leading-none drop-shadow-[0_0_25px_rgba(27,163,190,0.35)]"
                    />
                  </motion.div>
                </div>

                {/* Line 2: TECHNOLOGIES — Expanding framing brackets */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.52,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center justify-center gap-3 sm:gap-6 overflow-hidden"
                >
                  {/* Left Framing Line */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.58,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "right", scaleX: lineScaleX }}
                    className="h-px flex-1 max-w-[90px] bg-gradient-to-r from-transparent to-navy/35 hidden sm:block"
                  />

                  {/* Center Word: TECHNOLOGIES */}
                  <motion.span
                    initial={{ letterSpacing: "0.55em", opacity: 0 }}
                    animate={{ letterSpacing: "0.28em", opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="font-outfit font-extrabold uppercase text-[clamp(1.3rem,3.4vw,3.8rem)] text-navy/85 leading-none select-none tracking-[0.28em]"
                  >
                    TECHNOLOGIES
                  </motion.span>

                  {/* Right Framing Line */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.58,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ transformOrigin: "left", scaleX: lineScaleX }}
                    className="h-px flex-1 max-w-[90px] bg-gradient-to-l from-transparent to-navy/35 hidden sm:block"
                  />
                </motion.div>
              </motion.div>

              {/* Body Thesis & CTAs — Assembles Upward, departs on scroll */}
              <motion.div
                style={{ opacity: subContentOpacity, y: subContentY }}
                className="flex flex-col items-center max-w-2xl"
              >
                {/* Body Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-sm sm:text-base md:text-lg leading-relaxed text-text-body mb-8 font-normal"
                >
                  The parent technology corporation architecting digital
                  systems, enterprise software, and market-defining subsidiaries
                  for permanent tenure.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.75,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
                >
                  <MagneticButton strength={18}>
                    <motion.button
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 0 28px rgba(27,163,190,0.45)",
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => openConsultation("Hero Parent Company")}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan text-white hover:bg-[#189bb5] transition-all duration-300 shadow-[0_4px_18px_rgba(27,163,190,0.3)]"
                    >
                      <span>Book Free Consultation</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </motion.button>
                  </MagneticButton>

                  <MagneticButton strength={14}>
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider border border-navy/20 bg-white/80 text-navy hover:bg-white hover:border-navy/40 transition-all duration-300 shadow-xs backdrop-blur-sm"
                      >
                        <span>Explore Our Work</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </>
          )}
        </div>

        {/* ─── BOTTOM: STAT STRIP + EDGE-TO-EDGE MARQUEES ─── */}
        <div className="relative z-20 w-full">
          {/* Assembling Stat Strip */}
          {mounted && (
            <motion.div
              style={{ opacity: statsOpacity }}
              className="flex items-center justify-center gap-8 sm:gap-16 pb-5 px-4"
            >
              {[
                { v: "7", l: "In-House Ventures" },
                { v: "120+", l: "Engineers" },
                { v: "99.9%", l: "System Uptime" },
                { v: "2019", l: "Year Founded" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    x: i < 2 ? statSpreadLeft : statSpreadRight,
                  }}
                  className="flex flex-col items-center gap-0.5"
                >
                  <span className="font-outfit font-black text-xl sm:text-2xl text-navy leading-none">
                    {s.v}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-navy/55 font-semibold">
                    {s.l}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Edge-to-Edge Marquee Strips */}
          <div className="w-full border-t border-navy/[0.08]">
            {/* Strip 1: Crisp Off-White Architectural Strip */}
            <div className="w-full bg-white/80 py-1.5 border-b border-navy/[0.06] backdrop-blur-xs">
              <InfiniteMarquee
                speed={28}
                direction="left"
                itemClassName="text-navy/85 tracking-widest text-xs py-0.5 font-bold"
                separatorClassName="text-cyan font-bold"
                separator="✦"
                items={[
                  "CYBERSHIELD TECHNOLOGIES",
                  "PARENT CORPORATION",
                  "AI PLATFORMS",
                  "ENTERPRISE SOFTWARE",
                  "SAAS VENTURE ECOSYSTEM",
                  "APPLIED RESEARCH",
                  "GLOBAL TENURE",
                  "SOC 2 TYPE II",
                ]}
              />
            </div>
            {/* Strip 2: Linen Accent Strip with Cyan Monospace */}
            <div className="w-full bg-[#e6e2d8]/70 py-1.5 border-b border-navy/[0.04]">
              <InfiniteMarquee
                speed={34}
                direction="right"
                itemClassName="text-cyan text-xs font-mono py-0.5 font-bold"
                separatorClassName="text-navy/30 font-bold"
                separator="✦"
                items={[
                  "01 CONVERRO CRM",
                  "02 ADLYNGO",
                  "03 INST. DIGITAL STUDIES",
                  "04 SKILLGROW",
                  "05 SENDERBOT",
                  "06 PHONOTEL",
                  "07 FUTURE AI VENTURES",
                  "120+ ENGINEERS",
                  "99.9% SYSTEM UPTIME",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
