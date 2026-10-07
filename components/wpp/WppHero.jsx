"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ShieldCheck,
} from "lucide-react";

// Mechanical Character Reel for the Slot Machine Tumbler
const NARROW_CHARS = ["1", "7", "I", "J", "L", "T"];
const CHAR_SET = [
  "A", "7", "X", "0", "9", "K", "Q", "M", "Z", "4", "R", "L", "T",
];

// 10% CTA Colors for the "SHIELD" tumbler (1CA3BB)
const CTA_GRADIENT_COLORS = [
  "#1CA3BB",
  "#20b1cb",
  "#25bfdb",
  "#20b1cb",
  "#1CA3BB",
  "#168ea3",
];

function SlotLetter({ targetChar, delay = 0, color = "dark" }) {
  const [reel, setReel] = useState([targetChar]);

  useEffect(() => {
    const isNarrow =
      targetChar === "I" || targetChar === "L" || targetChar === "T";
    const pool = isNarrow ? NARROW_CHARS : CHAR_SET;
    const randomizedTrail = [
      pool[Math.floor(Math.random() * pool.length)],
      pool[Math.floor(Math.random() * pool.length)],
      pool[Math.floor(Math.random() * pool.length)],
      targetChar,
    ];
    setReel(randomizedTrail);
  }, [targetChar]);

  const isCustomColor = color.startsWith("#") || color.startsWith("rgb");

  return (
    <span className="inline-block relative overflow-hidden h-[0.95em] align-top shrink-0">
      <span
        className="invisible block h-[0.95em] leading-[0.95] select-none pointer-events-none"
        aria-hidden="true"
      >
        {targetChar}
      </span>
      <motion.span
        initial={{ y: "0%" }}
        animate={{ y: `-${(reel.length - 1) * 25}%` }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute top-0 left-0 w-full flex flex-col select-none will-change-transform"
      >
        {reel.map((char, index) => (
          <span
            key={index}
            style={isCustomColor ? { color } : undefined}
            className={`block h-[0.95em] leading-[0.95] shrink-0 text-center ${
              isCustomColor
                ? ""
                : color === "white"
                ? "text-white"
                : "text-[#0A1333]"
            }`}
          >
            {char}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

// The 6 Sister Brands Data Matrix with real DOM typography, authentic SVGs, and studio artwork
const SISTER_BRAND_CARDS = [
  {
    id: "adlyngo",
    name: "Adlyngo",
    headline: "Growth & Digital Marketing",
    description: "Performance marketing, content, UGC and digital growth for modern brands.",
    link: "https://www.adlyngo.com",
    artImage: "/images/brands/adlyngo-art.jpg",
    accent: "#FF4500",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF3B30]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
        <path d="M18 4L32 30H23L18 20L13 30H4L18 4Z" fill="url(#hero-adlyngo-grad)" />
        <path d="M18 20L22.5 29H13.5L18 20Z" fill="#FF8A65" />
        <defs>
          <linearGradient id="hero-adlyngo-grad" x1="4" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3B30" />
            <stop offset="1" stopColor="#FF6B00" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "phonotell",
    name: "Phonotell",
    headline: "AI Communication Infrastructure",
    description: "AI voice agents and intelligent IVR systems for enterprises.",
    link: "https://www.phonotel.com",
    artImage: "/images/brands/phonotell-art.jpg",
    accent: "#6366F1",
    ctaTextClass: "text-[#6366F1] group-hover:text-[#4F46E5]",
    ctaCircleClass: "border border-purple-300 text-purple-600 bg-purple-50/60 group-hover:bg-[#6366F1] group-hover:border-[#6366F1] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
        <rect x="5" y="6" width="9" height="24" rx="4.5" fill="#3B82F6" />
        <path d="M14 6H23C27.5 6 31 9.5 31 14C31 18.5 27.5 22 23 22H14V6Z" fill="url(#hero-phonotell-grad)" />
        <defs>
          <linearGradient id="hero-phonotell-grad" x1="14" y1="6" x2="31" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "converro",
    name: "Converro",
    headline: "Enterprise CRM & Workflow",
    description: "A unified platform to manage customers, workflows and operations.",
    link: "https://www.converro.io",
    artImage: "/images/brands/converro-art.jpg",
    accent: "#10B981",
    ctaTextClass: "text-gray-900 group-hover:text-[#10B981]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
        <path
          d="M26 12C23 8.5 18 8.5 14.5 11.5C10 15 9.5 22 13.5 26.5C17.5 30.5 24 30.5 27.5 26.5L30.5 29.5C25 35 16 35 10 29.5C4 23.5 4.5 13.5 11 8.5C16.5 4 25 4 30 9.5L26 12Z"
          fill="url(#hero-converro-grad)"
        />
        <defs>
          <linearGradient id="hero-converro-grad" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E699" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "ids",
    name: "iDS",
    headline: "Professional Tech Education",
    description: "Live, industry-focused learning in digital, data, marketing and more.",
    link: "https://idigitalstudies.com/",
    artImage: "/images/brands/ids-art.jpg",
    accent: "#FF3B30",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF3B30]",
    ctaCircleClass: "bg-[#FF3B30] text-white shadow-sm group-hover:bg-[#D32F2F]",
    renderLogo: () => (
      <div className="font-display font-black text-lg sm:text-xl tracking-tighter leading-none flex items-center">
        <span className="text-gray-900">i</span>
        <span className="text-gray-900">D</span>
        <span className="text-[#FF3B30]">S</span>
      </div>
    ),
  },
  {
    id: "senderbot",
    name: "Senderbot",
    headline: "WhatsApp Business Automation",
    description: "Automate conversations and workflows on WhatsApp.",
    link: "https://senderbot.io",
    artImage: "/images/brands/senderbot-art.jpg",
    accent: "#25D366",
    ctaTextClass: "text-gray-900 group-hover:text-[#25D366]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
        <path
          d="M26 8H15C11 8 8 11 8 15C8 19 11 21 15 22L21 23.5C25 24.5 28 26.5 28 30.5C28 34.5 25 37 21 37H10"
          stroke="url(#hero-senderbot-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="hero-senderbot-grad" x1="8" y1="8" x2="28" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E676" />
            <stop offset="1" stopColor="#00C853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "skillgrow",
    name: "Skillgrow",
    headline: "Accessible Digital Learning",
    description: "Affordable, recorded courses to build practical skills.",
    link: "/ecosystem#skillgrow",
    artImage: "/images/brands/skillgrow-art.jpg",
    accent: "#FF7A00",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF7A00]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" fill="none">
        <rect x="5" y="16" width="5" height="15" rx="2.5" fill="#FF7A00" />
        <rect x="12.5" y="11.5" width="5" height="19.5" rx="2.5" fill="#FF5252" />
        <rect x="20" y="7" width="5" height="24" rx="2.5" fill="#FF4081" />
        <rect x="27.5" y="3.5" width="5" height="27.5" rx="2.5" fill="#E040FB" />
      </svg>
    ),
  },
];

export default function WppHero() {
  const containerRef = useRef(null);
  const { openConsultation } = useModal();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Circle expansion: smoothly scales up to cover entire viewport
  const circleScale = useTransform(scrollYProgress, [0, 0.40, 1], [1, 28, 50]);
  const circleOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    [0.95, 1, 1]
  );

  // Initial hero text transforms: fades out smoothly as circle expands
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.30],
    [1, 0.5, 0]
  );
  const badgeY = useTransform(scrollYProgress, [0, 0.24], [0, -30]);

  // Blue transition: Hero Title Section for Sister Brands transforms
  const brandsIntroOpacity = useTransform(
    scrollYProgress,
    [0.32, 0.42, 0.84, 0.95],
    [0, 1, 1, 0]
  );
  const brandsIntroY = useTransform(
    scrollYProgress,
    [0.32, 0.44, 0.84, 0.96],
    [45, 0, 0, -45]
  );
  const brandsIntroScale = useTransform(
    scrollYProgress,
    [0.32, 0.44, 0.88],
    [0.96, 1, 1.01]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[290vh] bg-[#ece8df] w-full z-10"
    >
      {/* Sticky Hero Viewport (100vh) - Full bleed 100vw */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-6 sm:pb-8 px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 transform-gpu">
        {/* Expanding Gradient Orb (#1CA3BB to #0A1333) */}
        <div
          style={{ zIndex: -10 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-none -z-10 overflow-visible select-none"
        >
          <motion.div
            style={{
              scale: circleScale,
              opacity: circleOpacity,
              transformOrigin: "center center",
            }}
            className="transform-gpu will-change-transform pointer-events-none"
          >
            <motion.div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 1.15,
                  behavior: "smooth",
                });
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 22,
              }}
              className="w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px] rounded-full cursor-pointer relative group transform-gpu will-change-transform pointer-events-auto"
            >
              <div
                className="w-full h-full rounded-full transition-transform duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, #25bfdb 0%, #1CA3BB 35%, #0f1b45 75%, #0A1333 100%)",
                  filter: "drop-shadow(0 -10px 35px rgba(28, 163, 187, 0.45))",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Floating Monospace Metadata (Fades cleanly with initial hero content) */}
        <motion.div
          style={{ opacity: contentOpacity, zIndex: 20 }}
          className="absolute hidden lg:flex items-center gap-3.5 right-12 top-[30%] pointer-events-none select-none z-20"
        >
          <div className="w-10 h-[1.5px] bg-[#1CA3BB]" />
          <div className="font-mono text-[10px] xl:text-[11px] uppercase tracking-[0.25em] text-[#0A1333]/80 font-bold leading-relaxed">
            <div>INTELLIGENCE</div>
            <div>OVER SILOS</div>
            <div>EST. 2019</div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: contentOpacity, zIndex: 20 }}
          className="absolute hidden lg:flex flex-col gap-2.5 right-12 top-[54%] pointer-events-none select-none z-20"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1CA3BB] ring-4 ring-[#1CA3BB]/30" />
          </div>
          <div className="pl-3.5 border-l border-[#1CA3BB]/40 font-mono text-[9.5px] xl:text-[10px] uppercase tracking-[0.25em] text-[#0A1333]/80 font-semibold leading-loose">
            <div>01 AI & SOFTWARE</div>
            <div>02 CONVERSATIONAL</div>
            <div>03 ENTERPRISE CRM</div>
            <div>04 GROWTH & TALENT</div>
          </div>
        </motion.div>

        {/* Top Status Badge */}
        <motion.div
          style={{ y: badgeY, opacity: contentOpacity, zIndex: 20 }}
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-between gap-3 pt-2 w-full relative z-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#fbf9f4] border border-[#ded6c7] shadow-[0_4px_14px_rgba(10,19,51,0.06)] text-xs font-mono text-[#0A1333]">
            <span className="w-2 h-2 rounded-full bg-[#1CA3BB] animate-pulse" />
            <span className="font-bold tracking-wider">CYBERSHIELD PARENT GROUP</span>
            <span className="text-[#1CA3BB]">·</span>
            <span className="text-[#0A1333]/70">6 Operating Divisions</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-[#0A1333]/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#1CA3BB]" />
              <span>Enterprise AI Architecture</span>
            </span>
            <span className="text-[#1CA3BB]">|</span>
            <span>Noida West · Global Deployments</span>
          </div>
        </motion.div>

        {/* Main Editorial Hero Typography & Value Proposition */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity, zIndex: 20 }}
          className="flex-1 flex flex-col justify-center max-w-5xl relative z-20 my-auto py-6"
        >
          {/* Eyebrow / Pillar Lead */}
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#0A1333] bg-[#1CA3BB]/15 px-3 py-1 rounded-full border border-[#1CA3BB]/40">
              The Enterprise Collective
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-[#0A1333]/70">
              Unified Intelligence · 6 Operating Brands
            </span>
          </div>

          {/* Kinetic Headline with Mechanical Tumbler */}
          <h1 className="font-display font-medium text-[#0A1333] tracking-tight leading-[0.98] text-[2.5rem] sm:text-[3.75rem] md:text-[4.75rem] lg:text-[5.5rem] select-none">
            <span className="block font-normal text-[#0A1333]/80 text-[0.45em] uppercase tracking-[0.16em] mb-2 font-mono font-semibold">
              Intelligent Systems For The AI Era
            </span>
            <span className="block font-bold">
              WE ARE{" "}
              <span className="whitespace-nowrap inline-flex items-baseline">
                {["C", "Y", "B", "E", "R"].map((char, index) => (
                  <SlotLetter
                    key={`cyber-${index}`}
                    targetChar={char}
                    delay={0.1 + index * 0.05}
                    color="#0A1333"
                  />
                ))}
              </span>
              <span className="whitespace-nowrap inline-flex items-baseline ml-1">
                {["S", "H", "I", "E", "L", "D"].map((char, index) => (
                  <SlotLetter
                    key={`shield-${index}`}
                    targetChar={char}
                    delay={0.35 + index * 0.06}
                    color={CTA_GRADIENT_COLORS[index]}
                  />
                ))}
              </span>
            </span>
          </h1>

          {/* Narrative Lead */}
          <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-[#0A1333]/85 font-normal leading-relaxed">
            An enterprise AI & custom software powerhouse. We engineer mission-critical systems for enterprises while commanding an operating collective of 6 specialized brands across Conversational Voice AI, Enterprise CRM, WhatsApp APIs, Performance UGC Media, and Tech Academies.
          </p>

          {/* 10% CTA Actions (#1CA3BB) */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => openConsultation("Hero CTA")}
              className="btn-primary group"
            >
              <span>Enterprise Consultation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href="#the-collective"
              className="btn-secondary flex items-center gap-2"
            >
              <span>Explore The 6 Sister Brands</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Bottom Metrics Bar */}
        <motion.div
          style={{ opacity: contentOpacity, zIndex: 20 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#ded6c7] relative z-20 text-[#0A1333]"
        >
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">06</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#0A1333]/65 mt-0.5 font-bold">
              Operating Sister Brands
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">50+</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#0A1333]/65 mt-0.5 font-bold">
              Enterprise AI Deployments
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">10M+</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#0A1333]/65 mt-0.5 font-bold">
              Monthly Automated API Ops
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight">99.9%</div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#0A1333]/65 mt-0.5 font-bold">
              Production SLA Telemetry
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            BLUE TRANSITION HERO TITLE SECTION FOR SISTER BRANDS
            Exact cards, logos, typography, and studio artwork from WppBrandsMatrix
           ========================================================================= */}
        <motion.div
          style={{
            opacity: brandsIntroOpacity,
            y: brandsIntroY,
            scale: brandsIntroScale,
            zIndex: 30,
          }}
          className="absolute inset-0 pointer-events-none flex flex-col justify-center px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden"
        >
          <div className="max-w-[1720px] mx-auto w-full flex flex-col justify-between h-full max-h-[94vh] pointer-events-auto">
            {/* Sister Brands Hero Title Header */}
            <div className="max-w-4xl pt-1 sm:pt-2 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-[11px] font-mono font-bold tracking-widest uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#25bfdb] ring-4 ring-[#25bfdb]/30 animate-pulse" />
                <span>THE CYBERSHIELD HOLDING COLLECTIVE</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]">
                Six specialized brands.{" "}
                <span className="font-normal italic text-white/90">One unified architecture.</span>
              </h2>
              <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-white/85 max-w-2xl leading-relaxed">
                CyberShield serves as the enterprise parent company, powering a distributed network of standalone leaders in Conversational AI, Workflow CRM, WhatsApp APIs, Performance Media, and Technical Education.
              </p>
            </div>

            {/* The 6 Authentic Brand Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-3.5 xl:gap-4 w-full my-auto py-2">
              {SISTER_BRAND_CARDS.map((brand) => (
                <a
                  key={brand.id}
                  href={brand.link}
                  target={brand.link.startsWith("http") ? "_blank" : "_self"}
                  rel={brand.link.startsWith("http") ? "noopener noreferrer" : ""}
                  className="group bg-white rounded-2xl xl:rounded-3xl border border-white/40 shadow-[0_12px_36px_rgba(10,19,51,0.22)] hover:shadow-[0_24px_50px_rgba(10,19,51,0.35)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                  aria-label={`${brand.name} - ${brand.headline}`}
                >
                  {/* Top Typography & Details Section */}
                  <div className="p-3.5 sm:p-4 xl:p-4 pb-2 flex flex-col flex-1">
                    {/* Brand Logo Emblem & Name */}
                    <div className="flex items-center gap-2">
                      {brand.renderLogo()}
                      {brand.id !== "ids" && (
                        <span className="font-display font-bold text-base sm:text-lg text-gray-900 tracking-tight">
                          {brand.name}
                        </span>
                      )}
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-bold text-[13px] sm:text-[14px] text-[#0A1333] tracking-tight leading-snug mt-2.5 min-h-[36px] line-clamp-2">
                      {brand.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] sm:text-[11.5px] text-gray-500 leading-relaxed mt-1 min-h-[40px] line-clamp-2">
                      {brand.description}
                    </p>

                    {/* Visit Site CTA Row */}
                    <div className="flex items-center justify-between pt-2.5 pb-1 border-t border-gray-100/80 mt-auto">
                      <span className={`text-[11px] font-bold tracking-tight flex items-center gap-1 transition-colors ${brand.ctaTextClass}`}>
                        Visit Site <ArrowRight className="w-2.5 h-2.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all ${brand.ctaCircleClass}`}>
                        <ArrowRight className="w-3 h-3 stroke-[2.2]" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Visual Graphic: Studio Artwork */}
                  <div className="relative w-full h-24 sm:h-28 xl:h-32 overflow-hidden rounded-b-2xl xl:rounded-b-3xl mt-auto bg-gray-50">
                    <Image
                      src={brand.artImage}
                      alt={`${brand.name} visual preview`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 17vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Status / Explore Nav Row */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/20 text-white/80 text-xs font-mono">
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25bfdb] animate-ping" />
                <span>Inter-brand data routing & enterprise single-sign-on (SSO) active</span>
              </div>
              <div className="flex items-center gap-3 mx-auto sm:mx-0">
                <a
                  href="#the-collective"
                  className="inline-flex items-center gap-2 text-white hover:text-[#25bfdb] transition-colors font-bold tracking-wider uppercase text-[11px] px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25"
                >
                  <span>Explore Full Architecture & Case Matrix</span>
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
