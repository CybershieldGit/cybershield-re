"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink, ChevronRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

// The 6 Sister Brands Data Matrix
const SISTER_BRANDS = [
  {
    id: "adlyngo",
    position: "left",
    index: "01",
    name: "Adlyngo",
    pillar: "Growth & Performance Media",
    category: "Agency / Media & UGC",
    tagline: "Viral UGC pipelines & programmatic paid advertising.",
    description:
      "Full-funnel digital growth agency specializing in high-converting UGC creative studios, performance paid acquisition, and programmatic brand scaling.",
    problemCatered: "Customer acquisition bottlenecks, ad fatigue, and high CAC.",
    shortProblem: "Acquisition & CAC Fatigue",
    solutionDelivered: "Viral UGC pipelines & high-converting paid media campaigns.",
    highlights: ["UGC Creator Studios", "Performance Paid Ads", "Full-Funnel Scaling"],
    link: "https://www.adlyngo.com",
    externalLabel: "Visit Adlyngo",
    accent: "#FF4500",
    glowColor: "rgba(255, 69, 0, 0.25)",
    artImage: "/images/brands/adlyngo-art.jpg",
    renderLogo: (isActive) => (
      <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0 transition-transform duration-300" fill="none">
        <path d="M18 4L32 30H23L18 20L13 30H4L18 4Z" fill="url(#plat-adlyngo-grad)" />
        <path d="M18 20L22.5 29H13.5L18 20Z" fill="#FF8A65" />
        <defs>
          <linearGradient id="plat-adlyngo-grad" x1="4" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3B30" />
            <stop offset="1" stopColor="#FF6B00" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "phonotell",
    position: "left",
    index: "02",
    name: "PhonoTell",
    pillar: "Enterprise Voice AI & Telephony",
    category: "IVR & Voice Intelligence",
    tagline: "Sub-200ms autonomous voice AI agents & smart IVR.",
    description:
      "Carrier-grade programmable voice infrastructure powering next-generation conversational AI agents, smart multi-lingual IVR, and automated real-time call intelligence.",
    problemCatered: "Overloaded phone lines, slow human response, and costly telecom overhead.",
    shortProblem: "Voice Telecom & Support Latency",
    solutionDelivered: "Sub-200ms autonomous conversational voice AI agents & smart IVR.",
    highlights: ["Autonomous Voice AI", "Smart Enterprise IVR", "Sub-200ms Latency"],
    link: "https://www.phonotel.com",
    externalLabel: "Visit PhonoTell",
    accent: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.25)",
    artImage: "/images/brands/phonotell-art.jpg",
    renderLogo: (isActive) => (
      <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0 transition-transform duration-300" fill="none">
        <rect x="5" y="6" width="9" height="24" rx="4.5" fill="#3B82F6" />
        <path d="M14 6H23C27.5 6 31 9.5 31 14C31 18.5 27.5 22 23 22H14V6Z" fill="url(#plat-phonotell-grad)" />
        <defs>
          <linearGradient id="plat-phonotell-grad" x1="14" y1="6" x2="31" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "converro",
    position: "left",
    index: "03",
    name: "Converro",
    pillar: "Enterprise Workflow CRM",
    category: "CRM & Operational Pipelines",
    tagline: "Central operational CRM for pipelines & complex workflows.",
    description:
      "The unified operational hub for enterprise teams. Deep workflow automation, customer journey mapping, and relationship intelligence across global pipelines.",
    problemCatered: "Fragmented lead data silos, broken handoffs, and operational workflow chaos.",
    shortProblem: "Data Silos & Workflow Chaos",
    solutionDelivered: "Centralized operational CRM uniting pipelines and team automation.",
    highlights: ["Workflow Automation", "Pipeline Intelligence", "SOC 2 Type II"],
    link: "https://www.converro.io",
    externalLabel: "Visit Converro",
    accent: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.25)",
    artImage: "/images/brands/converro-art.jpg",
    renderLogo: (isActive) => (
      <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0 transition-transform duration-300" fill="none">
        <path
          d="M26 12C23 8.5 18 8.5 14.5 11.5C10 15 9.5 22 13.5 26.5C17.5 30.5 24 30.5 27.5 26.5L30.5 29.5C25 35 16 35 10 29.5C4 23.5 4.5 13.5 11 8.5C16.5 4 25 4 30 9.5L26 12Z"
          fill="url(#plat-converro-grad)"
        />
        <defs>
          <linearGradient id="plat-converro-grad" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E699" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "ids",
    position: "right",
    index: "04",
    name: "iDS",
    fullName: "Institute of Digital Studies",
    pillar: "Premier Live EdTech",
    category: "Live Cohorts (Online & Offline)",
    tagline: "Live cohort academy in digital skills, AI & web engineering.",
    description:
      "Interactive live cohort academy offering intensive online and offline courses in Digital Marketing, Data Science, AI platforms, and Full-Stack Engineering.",
    problemCatered: "Severe scarcity of industry-ready tech, AI, and data engineering talent.",
    shortProblem: "High-Tier Tech Talent Shortage",
    solutionDelivered: "Intensive live cohorts led by practitioner faculty with real-world builds.",
    highlights: ["Live Cohorts (Online & Offline)", "Data Science & AI", "Industry Faculty"],
    link: "https://idigitalstudies.com/",
    externalLabel: "Explore iDS",
    accent: "#FF3B30",
    glowColor: "rgba(255, 59, 48, 0.25)",
    artImage: "/images/brands/ids-art.jpg",
    renderLogo: (isActive) => (
      <div className="font-display font-black text-xl tracking-tight leading-none flex items-center shrink-0">
        <span className="text-[#000416]">i</span>
        <span className="text-[#000416]">D</span>
        <span className="text-[#FF3B30]">S</span>
      </div>
    ),
  },
  {
    id: "senderbot",
    position: "right",
    index: "05",
    name: "SenderBot",
    pillar: "WhatsApp API & Conversational Ops",
    category: "WhatsApp API Automation",
    tagline: "Official WhatsApp Business API for automated engagement.",
    description:
      "Enterprise-grade WhatsApp automation engine enabling automated conversational sales, real-time customer support routing, and broadcast lifecycle messaging.",
    problemCatered: "Plummeting email open rates and friction in real-time mobile customer conversion.",
    shortProblem: "Mobile Chat & Conversion Friction",
    solutionDelivered: "Official WhatsApp API engine with automated chat routing & broadcasts.",
    highlights: ["Official WhatsApp API", "Automated Chat Workflows", "99.99% Delivery"],
    link: "https://senderbot.io",
    externalLabel: "Visit SenderBot",
    accent: "#25D366",
    glowColor: "rgba(37, 211, 102, 0.25)",
    artImage: "/images/brands/senderbot-art.jpg",
    renderLogo: (isActive) => (
      <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0 transition-transform duration-300" fill="none">
        <path
          d="M26 8H15C11 8 8 11 8 15C8 19 11 21 15 22L21 23.5C25 24.5 28 26.5 28 30.5C28 34.5 25 37 21 37H10"
          stroke="url(#plat-senderbot-grad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="plat-senderbot-grad" x1="8" y1="8" x2="28" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E676" />
            <stop offset="1" stopColor="#00C853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "skillgrow",
    position: "right",
    index: "06",
    name: "SkillGrow",
    pillar: "Accessible On-Demand EdTech",
    category: "Recorded Masterclasses",
    tagline: "Self-paced pre-recorded masterclasses for digital upskilling.",
    description:
      "Self-paced learning platform giving aspiring professionals, students, and teams affordable, immediate access to world-class tech and marketing masterclasses.",
    problemCatered: "Expensive, rigid training programs that prevent continuous workforce upskilling.",
    shortProblem: "Scalable Team Training Barriers",
    solutionDelivered: "Self-paced, modular masterclasses engineered for accessible upskilling.",
    highlights: ["Pre-recorded Masterclasses", "Self-Paced Learning", "Affordable Access"],
    link: "/ecosystem#skillgrow",
    externalLabel: "Start Learning",
    accent: "#FF7A00",
    glowColor: "rgba(255, 122, 0, 0.25)",
    artImage: "/images/brands/skillgrow-art.jpg",
    renderLogo: (isActive) => (
      <svg viewBox="0 0 36 36" className="w-7 h-7 shrink-0 transition-transform duration-300" fill="none">
        <rect x="5" y="16" width="5" height="15" rx="2.5" fill="#FF7A00" />
        <rect x="12.5" y="11.5" width="5" height="19.5" rx="2.5" fill="#FF5252" />
        <rect x="20" y="7" width="5" height="24" rx="2.5" fill="#FF4081" />
        <rect x="27.5" y="3.5" width="5" height="27.5" rx="2.5" fill="#E040FB" />
      </svg>
    ),
  },
];

export default function NeurexPlatformSection() {
  const { openConsultation } = useModal();
  const [hoveredBrandId, setHoveredBrandId] = useState(null);
  const [lockedBrandId, setLockedBrandId] = useState(null);
  const leaveTimerRef = useRef(null);

  const handleBrandEnter = (brandId) => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setHoveredBrandId(brandId);
    setLockedBrandId(brandId);
  };

  const handleBrandLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setHoveredBrandId(null);
      setLockedBrandId(null);
    }, 180);
  };

  const handleCenterEnter = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
  };

  const handleCenterLeave = () => {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    leaveTimerRef.current = setTimeout(() => {
      setHoveredBrandId(null);
      setLockedBrandId(null);
    }, 120);
  };

  const activeBrandId = hoveredBrandId || lockedBrandId || null;
  const activeBrand = activeBrandId ? SISTER_BRANDS.find((b) => b.id === activeBrandId) : null;
  const leftBrands = SISTER_BRANDS.filter((b) => b.position === "left");
  const rightBrands = SISTER_BRANDS.filter((b) => b.position === "right");

  return (
    <section className="w-full py-20 sm:py-28 lg:py-36 bg-white text-[#000416] relative overflow-hidden" id="sister-brands">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#fffe6a]/5 via-[#1ca3bb]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Container: max-w 1240px as per Neurex design standards */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[620px]"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f7f7f8] border border-[#ebebeb] text-xs font-semibold text-[#4a4d5a] uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1CA3BB] animate-pulse" />
              <span>The Operating Collective</span>
              <span className="text-[#a0a3af]">·</span>
              <span className="text-[#000416] font-bold">06 Specialized Brands</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-medium leading-[1.12] lg:leading-[62px] tracking-[-1.2px] lg:tracking-[-1.8px] text-[#000416]">
              One collective powering <br className="hidden sm:block" />
              6 specialized sister brands
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="self-start md:self-auto flex items-center gap-3"
          >
            <div className="btn-wrap">
              <button
                onClick={() => openConsultation("Sister Brands Section CTA")}
                className="btn-01-neon text-[#000416] font-medium px-6 py-2.5 sm:px-7 sm:py-3 shadow-sm hover:shadow-md"
              >
                <span className="btn-text-wrap">
                  <span className="btn-text _01">Explore The Collective</span>
                  <span className="btn-text _02">Explore The Collective</span>
                </span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* 3-Column Layout Grid: 3 Left Brands, 1 Center Dynamic Card Stage, 3 Right Brands */}
        <div 
          onMouseLeave={handleBrandLeave}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr_1fr] gap-8 lg:gap-10 items-center"
        >
          
          {/* Left Column: Brands 01, 02, 03 (order-1: 2-column grid on mobile, vertical column on desktop) */}
          <div className="order-1 grid grid-cols-2 lg:flex lg:flex-col gap-3.5 sm:gap-5 lg:gap-6">
            {leftBrands.map((brand) => {
              const isActive = activeBrandId === brand.id;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => handleBrandEnter(brand.id)}
                  onMouseLeave={handleBrandLeave}
                  onClick={() => handleBrandEnter(brand.id)}
                  tabIndex={0}
                  onFocus={() => handleBrandEnter(brand.id)}
                  className={`group relative flex flex-col p-3.5 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 cursor-pointer border text-left outline-none ${
                    isActive
                      ? "bg-[#fafafc] border-[#000416] shadow-md shadow-black/[0.04] scale-[1.01]"
                      : "bg-white border-[#f0f0f2] hover:border-[#d9d9df] hover:bg-[#fbfbfd]"
                  }`}
                >
                  {/* Active brand accent border marker */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar-left"
                      className="absolute right-0 top-4 bottom-4 w-1 rounded-l-full hidden lg:block"
                      style={{ backgroundColor: brand.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    {/* Icon container */}
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-md border"
                          : "bg-[#f7f7f8] group-hover:bg-white group-hover:shadow-sm"
                      }`}
                      style={{ borderColor: isActive ? `${brand.accent}40` : "transparent" }}
                    >
                      {brand.renderLogo(isActive)}
                    </div>

                    {/* Brand index & pillar badge */}
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-mono font-bold text-[#8f92a1]">
                        {brand.index}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                          isActive ? "text-[#000416] translate-x-0.5" : "text-[#c2c4ce] group-hover:text-[#4a4d5a]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Brand Name & Short Description */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col xs:flex-row xs:items-baseline gap-0.5 xs:gap-2">
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-medium tracking-tight transition-colors duration-200 ${
                          isActive ? "text-[#000416] font-semibold" : "text-[#1d202d] group-hover:text-[#000416]"
                        }`}
                      >
                        {brand.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-[#717482] font-medium tracking-wide truncate max-w-[120px]">
                        {brand.pillar}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#5b5e6d] font-normal leading-relaxed line-clamp-2">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Dynamic Brand Card Stage (order-2 on both mobile & desktop) */}
          <div className="w-full order-2 my-2 lg:my-0">
            <div 
              onMouseEnter={handleCenterEnter}
              onMouseLeave={handleCenterLeave}
              className="w-full h-[420px] sm:h-[500px] lg:h-[640px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl relative bg-[#000416] border border-black/10"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBrand ? activeBrand.id : "collective-overview"}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full flex flex-col justify-between p-5 sm:p-7 z-10 overflow-hidden bg-[#000416]"
                >
                  {activeBrand ? (
                    /* Individual Brand Showcase Card */
                    <>
                      {/* Background Artwork */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                          src={activeBrand.artImage}
                          alt={activeBrand.name}
                          fill
                          priority
                          className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                        />
                        {/* Deep gradient overlay for crystal clear typography */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000416] via-[#000416]/70 to-[#000416]/30" />
                        {/* Radial top-right ambient glow */}
                        <div
                          className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40 transition-colors duration-500 pointer-events-none"
                          style={{ backgroundColor: activeBrand.accent }}
                        />
                      </div>

                      {/* Card Top: Brand Meta Header */}
                      <div className="flex items-center justify-between gap-3 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: activeBrand.accent }}
                          />
                          <span>{activeBrand.category}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setHoveredBrandId(null);
                              setLockedBrandId(null);
                            }}
                            className="text-[11px] font-medium text-white/70 hover:text-white px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                            title="View 6-Brand Collective Story"
                          >
                            ← All 6 Brands
                          </button>
                          <span className="text-white/60 font-mono text-xs tracking-wider">
                            {activeBrand.index} / 06
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom: Rich Brand Showcase Content */}
                      <div className="flex flex-col gap-3 sm:gap-4 relative z-10 mt-auto">
                        {/* Brand Title & Logo Row */}
                        <div className="flex items-center gap-3.5">
                          <div
                            className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg shrink-0 border"
                            style={{ borderColor: activeBrand.accent }}
                          >
                            {activeBrand.renderLogo(true)}
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
                              {activeBrand.name}
                            </h3>
                            <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                              {activeBrand.pillar}
                            </p>
                          </div>
                        </div>

                        {/* Value Proposition Description */}
                        <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {activeBrand.description}
                        </p>

                        {/* Problem Catered Highlight Pill */}
                        <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-start gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#fffe6a] shrink-0 mt-0.5">
                            Problem Catered:
                          </span>
                          <span className="text-xs text-white/90 leading-tight">
                            {activeBrand.problemCatered}
                          </span>
                        </div>

                        {/* Key Capabilities Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {activeBrand.highlights.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/15 backdrop-blur-md text-white border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Link Row & Interactive Nav Dots */}
                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/15 mt-1">
                          <Link
                            href={activeBrand.link}
                            target={activeBrand.link.startsWith("http") ? "_blank" : "_self"}
                            rel={activeBrand.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 shadow-md group/btn"
                            style={{
                              backgroundColor: activeBrand.accent,
                              color: "#ffffff",
                            }}
                          >
                            <span>{activeBrand.externalLabel}</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </Link>

                          {/* Brand Switcher Dots: Overview + 01..06 */}
                          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setHoveredBrandId(null);
                                setLockedBrandId(null);
                              }}
                              title="View Collective Overview"
                              className="h-2.5 px-2 rounded-full transition-all duration-300 flex items-center justify-center text-[9px] font-bold bg-white/20 text-white hover:bg-[#fffe6a] hover:text-[#000416] cursor-pointer"
                            >
                              ALL
                            </button>
                            {SISTER_BRANDS.map((b) => (
                              <button
                                key={b.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBrandEnter(b.id);
                                }}
                                title={b.name}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                  activeBrand.id === b.id
                                    ? "w-5 bg-white"
                                    : "w-2 bg-white/40 hover:bg-white/70"
                                }`}
                                aria-label={`Show ${b.name}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* The Collective 6-Brand Story Showcase Card (When not hovering on any brand) */
                    <>
                      {/* Background Artwork matching other brand cards */}
                      <div className="absolute inset-0 z-0 overflow-hidden">
                        <Image
                          src="/images/brands/collective-overview-art.jpg"
                          alt="The Operating Collective"
                          fill
                          priority
                          className="object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                        />
                        {/* Deep gradient overlay for crystal clear typography */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#000416] via-[#000416]/75 to-[#000416]/30" />
                        {/* Ambient cyber cyan glow */}
                        <div
                          className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-35 transition-colors duration-500 pointer-events-none"
                          style={{ backgroundColor: "#1CA3BB" }}
                        />
                      </div>

                      {/* Card Top: Brand Meta Header */}
                      <div className="flex items-center justify-between gap-3 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-[#1CA3BB] animate-pulse" />
                          <span>The Operating Collective</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-white/60 font-mono text-xs tracking-wider">
                            06 DIVISIONS · 1 ARCHITECTURE
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom: Rich Brand Showcase Content */}
                      <div className="flex flex-col gap-3 sm:gap-4 relative z-10 mt-auto">
                        {/* Brand Title & Logo Row */}
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg shrink-0 border border-[#1CA3BB]/40">
                            <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 shrink-0">
                              <circle cx="50" cy="50" r="48" fill="#0A1333" stroke="#1CA3BB" strokeWidth="1.5" strokeOpacity="0.4" />
                              <path d="M26 31H42V37H32V60.5L50 78L68 60.5V31H75V63.5L50 87L26 63.5V31Z" fill="#ffffff" />
                              <path d="M48 31H59V61L48 50V31Z" fill="#ffffff" />
                              <path d="M68 31H75V63.5L68 57V31Z" fill="#ffffff" />
                              <path d="M37 42H43V54.5L64 71.5L59.5 75.5L37 57.5V42Z" fill="#1CA3BB" />
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">
                              The Operating Collective
                            </h3>
                            <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                              Enterprise AI &amp; 6 Specialized Divisions
                            </p>
                          </div>
                        </div>

                        {/* Value Proposition Description */}
                        <p className="text-xs sm:text-sm text-white/85 font-normal leading-relaxed line-clamp-2 sm:line-clamp-3">
                          Six specialized operating divisions engineered as one continuous enterprise architecture — uniting customer acquisition, conversational AI, workflow CRM, and engineering talent into a unified growth engine.
                        </p>

                        {/* Interactive Division Navigation Pills */}
                        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 pt-0.5">
                          {SISTER_BRANDS.map((b) => (
                            <button
                              key={b.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleBrandEnter(b.id);
                              }}
                              onMouseEnter={() => handleBrandEnter(b.id)}
                              className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/35 transition-all text-left flex items-center gap-1.5 group/pill cursor-pointer"
                              title={`Explore ${b.name}`}
                            >
                              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: b.accent }} />
                              <span className="text-[11px] font-semibold text-white truncate">{b.name}</span>
                            </button>
                          ))}
                        </div>

                        {/* Key Capabilities Pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {["Customer Acquisition", "Autonomous Voice AI", "Workflow CRM", "Official WhatsApp API", "Live Tech Cohorts"].map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/15 backdrop-blur-md text-white border border-white/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Link Row & Interactive Nav Dots */}
                        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/15 mt-1">
                          <button
                            onClick={() => openConsultation("Collective Architecture Center Card")}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm bg-[#fffe6a] hover:bg-white text-[#000416] transition-all duration-300 shadow-md group/btn cursor-pointer"
                          >
                            <span>Explore The Collective</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                          </button>

                          {/* Brand Switcher Dots: Overview + 01..06 */}
                          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setHoveredBrandId(null);
                                setLockedBrandId(null);
                              }}
                              title="Collective Story Overview"
                              className="h-2.5 px-2 rounded-full transition-all duration-300 flex items-center justify-center text-[9px] font-bold bg-[#fffe6a] text-[#000416] cursor-pointer"
                            >
                              ALL
                            </button>
                            {SISTER_BRANDS.map((b) => (
                              <button
                                key={b.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBrandEnter(b.id);
                                }}
                                title={`View ${b.name}`}
                                className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/70 transition-all duration-300 cursor-pointer"
                                aria-label={`Show ${b.name}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Brands 04, 05, 06 (order-3: 2-column grid on mobile, vertical column on desktop) */}
          <div className="order-3 grid grid-cols-2 lg:flex lg:flex-col gap-3.5 sm:gap-5 lg:gap-6">
            {rightBrands.map((brand) => {
              const isActive = activeBrandId === brand.id;
              return (
                <div
                  key={brand.id}
                  onMouseEnter={() => handleBrandEnter(brand.id)}
                  onMouseLeave={handleBrandLeave}
                  onClick={() => handleBrandEnter(brand.id)}
                  tabIndex={0}
                  onFocus={() => handleBrandEnter(brand.id)}
                  className={`group relative flex flex-col p-3.5 sm:p-5 lg:p-6 rounded-2xl transition-all duration-300 cursor-pointer border text-left outline-none ${
                    isActive
                      ? "bg-[#fafafc] border-[#000416] shadow-md shadow-black/[0.04] scale-[1.01]"
                      : "bg-white border-[#f0f0f2] hover:border-[#d9d9df] hover:bg-[#fbfbfd]"
                  }`}
                >
                  {/* Active brand accent border marker */}
                  {isActive && (
                    <motion.div
                      layoutId="active-bar-right"
                      className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full hidden lg:block"
                      style={{ backgroundColor: brand.accent }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-2 mb-2 sm:mb-3">
                    {/* Icon container */}
                    <div
                      className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-white shadow-md border"
                          : "bg-[#f7f7f8] group-hover:bg-white group-hover:shadow-sm"
                      }`}
                      style={{ borderColor: isActive ? `${brand.accent}40` : "transparent" }}
                    >
                      {brand.renderLogo(isActive)}
                    </div>

                    {/* Brand index & pillar badge */}
                    <div className="flex items-center gap-1">
                      <span className="text-[11px] font-mono font-bold text-[#8f92a1]">
                        {brand.index}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${
                          isActive ? "text-[#000416] translate-x-0.5" : "text-[#c2c4ce] group-hover:text-[#4a4d5a]"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Brand Name & Short Description */}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col xs:flex-row xs:items-baseline gap-0.5 xs:gap-2">
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-medium tracking-tight transition-colors duration-200 ${
                          isActive ? "text-[#000416] font-semibold" : "text-[#1d202d] group-hover:text-[#000416]"
                        }`}
                      >
                        {brand.name}
                      </h3>
                      <span className="text-[10px] sm:text-[11px] text-[#717482] font-medium tracking-wide truncate max-w-[120px]">
                        {brand.pillar}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[13px] text-[#5b5e6d] font-normal leading-relaxed line-clamp-2">
                      {brand.tagline}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
