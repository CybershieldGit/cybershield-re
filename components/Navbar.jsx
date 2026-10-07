"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig, sisterBrands } from "@/data/siteData";
import CyberShieldLogo from "@/components/brand/CyberShieldLogo";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
  Bot,
  MessageSquare,
  GraduationCap,
  Megaphone,
  Briefcase,
  Headphones,
} from "lucide-react";

// Brand metadata and vector logos for The Collective 6
const BRAND_META = {
  adlyngo: {
    accent: "#FF5500",
    glow: "rgba(255, 85, 0, 0.22)",
    category: "Media & UGC",
    tagline: "Viral UGC creator studios & high-ROI programmatic paid media acquisition.",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0" fill="none">
        <path d="M18 4L32 30H23L18 20L13 30H4L18 4Z" fill="url(#nav-adlyngo-grad)" />
        <path d="M18 20L22.5 29H13.5L18 20Z" fill="#FF8A65" />
        <defs>
          <linearGradient id="nav-adlyngo-grad" x1="4" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3B30" />
            <stop offset="1" stopColor="#FF6B00" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  phonotell: {
    accent: "#6366F1",
    glow: "rgba(99, 102, 241, 0.22)",
    category: "Voice AI & IVR",
    tagline: "Sub-200ms autonomous voice AI agents & intelligent enterprise IVR telephony.",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0" fill="none">
        <rect x="5" y="6" width="9" height="24" rx="4.5" fill="#3B82F6" />
        <path d="M14 6H23C27.5 6 31 9.5 31 14C31 18.5 27.5 22 23 22H14V6Z" fill="url(#nav-phonotell-grad)" />
        <defs>
          <linearGradient id="nav-phonotell-grad" x1="14" y1="6" x2="31" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  converro: {
    accent: "#10B981",
    glow: "rgba(16, 185, 129, 0.22)",
    category: "Workflow CRM",
    tagline: "Unified enterprise CRM orchestrating pipelines, journeys & automations.",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0" fill="none">
        <path
          d="M26 12C23 8.5 18 8.5 14.5 11.5C10 15 9.5 22 13.5 26.5C17.5 30.5 24 30.5 27.5 26.5L30.5 29.5C25 35 16 35 10 29.5C4 23.5 4.5 13.5 11 8.5C16.5 4 25 4 30 9.5L26 12Z"
          fill="url(#nav-converro-grad)"
        />
        <defs>
          <linearGradient id="nav-converro-grad" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E699" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  ids: {
    accent: "#FF3B30",
    glow: "rgba(255, 59, 48, 0.22)",
    category: "Live EdTech",
    tagline: "Executive live cohorts in AI engineering, data science & modern tech craft.",
    renderLogo: () => (
      <div className="font-display font-black text-xs tracking-tight leading-none flex items-center shrink-0">
        <span className="text-white">i</span>
        <span className="text-white">D</span>
        <span className="text-[#FF3B30]">S</span>
      </div>
    ),
  },
  senderbot: {
    accent: "#25D366",
    glow: "rgba(37, 211, 102, 0.22)",
    category: "WhatsApp API",
    tagline: "Official WhatsApp Business API for automated conversational ops & sales.",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0" fill="none">
        <path
          d="M26 8H15C11 8 8 11 8 15C8 19 11 21 15 22L21 23.5C25 24.5 28 26.5 28 30.5C28 34.5 25 37 21 37H10"
          stroke="url(#nav-senderbot-grad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="nav-senderbot-grad" x1="8" y1="8" x2="28" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E676" />
            <stop offset="1" stopColor="#00C853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  skillgrow: {
    accent: "#FF7A00",
    glow: "rgba(255, 122, 0, 0.22)",
    category: "Masterclasses",
    tagline: "Democratized pre-recorded masterclasses for modular digital upskilling.",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-5 h-5 shrink-0" fill="none">
        <rect x="5" y="16" width="5" height="15" rx="2.5" fill="#FF7A00" />
        <rect x="12.5" y="11.5" width="5" height="19.5" rx="2.5" fill="#FF5252" />
        <rect x="20" y="7" width="5" height="24" rx="2.5" fill="#FF4081" />
        <rect x="27.5" y="3.5" width="5" height="27.5" rx="2.5" fill="#E040FB" />
      </svg>
    ),
  },
};

// Icon fallback mapping for the 6 sister brands
const BRAND_ICONS = {
  adlyngo: Megaphone,
  phonotell: Headphones,
  converro: Layers,
  ids: GraduationCap,
  senderbot: MessageSquare,
  skillgrow: Briefcase,
};

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collectiveMenuOpen, setCollectiveMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCollectiveMenuOpen(false);
  }, [pathname]);

  // Click outside to close collective dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCollectiveMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isDarkHero = pathname === "/" || pathname === "/contact";
  const isLightNav = !isDarkHero;

  const getLinkClass = (href) => {
    const isBlogActive = (href === "/work" || href === "/case-studies" || href === "/blog") &&
      (pathname === "/work" || pathname === "/case-studies" || pathname === "/blog" || pathname === "/blogs");
    const isCareerActive = (href === "/career" || href === "/careers") && (pathname === "/career" || pathname === "/careers");
    const isActive = pathname === href || isBlogActive || isCareerActive;
    if (isLightNav) {
      return isActive
        ? "text-[#000416] font-bold"
        : "text-[#000416]/80 hover:text-[#000416]";
    }
    return isActive
      ? "text-white font-bold"
      : "text-white/90 hover:text-white";
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isLightNav
            ? "bg-white/95 backdrop-blur-xl border-b border-[#000416]/[0.08] shadow-[0_4px_24px_rgba(0,4,22,0.06)] py-3 sm:py-4"
            : "bg-[#000416]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,4,22,0.35)] py-3 sm:py-4"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
        <nav
          className="w-full flex items-center justify-between"
          aria-label="CyberShield Collective Navigation"
        >
          {/* Brand Logo & Stance */}
          <Link
            href="/"
            className="flex items-center focus:outline-none group py-0.5 shrink-0"
          >
            <CyberShieldLogo 
              isLightNav={isLightNav}
              className="h-[34px] sm:h-[38px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9 relative" ref={dropdownRef}>
            <Link
              href="/"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/")}`}
            >
              Home
            </Link>

            {/* The Collective Mega-Menu Trigger */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setCollectiveMenuOpen(!collectiveMenuOpen)}
                onMouseEnter={() => setCollectiveMenuOpen(true)}
                className={`text-[16px] font-semibold flex items-center gap-2 transition-colors duration-200 ${
                  isLightNav
                    ? collectiveMenuOpen
                      ? "text-[#000416]"
                      : "text-[#000416]/80 hover:text-[#000416]"
                    : collectiveMenuOpen
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                }`}
                aria-expanded={collectiveMenuOpen}
              >
                <span>The Collective</span>
                <span className="px-2 py-0.5 text-[11px] font-mono font-bold rounded-full bg-[#fffe6a] text-[#000416] border border-black/10">
                  6
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    collectiveMenuOpen
                      ? "rotate-180 text-[#fffe6a]"
                      : isLightNav
                        ? "text-[#000416]/70"
                        : "text-white/70"
                  }`}
                />
              </button>

              {/* Neurex-Style Dark Obsidian Mega-Menu Dropdown */}
              <AnimatePresence>
                {collectiveMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    onMouseLeave={() => setCollectiveMenuOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-[850px] max-w-[calc(100vw-32px)] bg-[#000416]/95 backdrop-blur-2xl border border-white/[0.12] rounded-[28px] p-6 sm:p-7 shadow-[0_30px_90px_rgba(0,0,0,0.75),0_0_0_1px_rgba(255,255,255,0.06)] z-50 text-white overflow-hidden"
                  >
                    {/* Ambient subtle back-glows */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1CA3BB]/15 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#fffe6a]/10 blur-3xl pointer-events-none" />

                    {/* Header Bar */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08] relative z-10">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.08] border border-white/15 text-[11px] font-mono font-bold tracking-widest uppercase text-[#fffe6a]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#fffe6a] animate-pulse" />
                            Operating Collective
                          </span>
                          <span className="text-sm font-semibold text-white/90">
                            6 Specialized Flagship Divisions
                          </span>
                        </div>
                        <p className="text-[13px] text-white/65 mt-1 font-normal leading-normal">
                          Enterprise AI, custom software systems, omnichannel automation & workforce upskilling.
                        </p>
                      </div>

                      <Link
                        href="/#sister-brands"
                        onClick={() => setCollectiveMenuOpen(false)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-white/25 text-xs font-semibold text-white transition-all group shrink-0"
                      >
                        <span>Explore Matrix</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#fffe6a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>

                    {/* 2-Column Grid of the 6 Sister Brands */}
                    <div className="grid grid-cols-2 gap-3 relative z-10">
                      {sisterBrands.map((brand) => {
                        const meta = BRAND_META[brand.id] || {
                          accent: "#1CA3BB",
                          glow: "rgba(28, 163, 187, 0.2)",
                          category: brand.category || "Division",
                          tagline: brand.tagline,
                          renderLogo: () => {
                            const Icon = BRAND_ICONS[brand.id] || Layers;
                            return <Icon className="w-5 h-5 text-white" />;
                          },
                        };

                        return (
                          <a
                            key={brand.id}
                            href={brand.link}
                            target={brand.link.startsWith("http") ? "_blank" : "_self"}
                            rel={brand.link.startsWith("http") ? "noopener noreferrer" : ""}
                            className="group relative p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.07] hover:border-white/20 transition-all duration-200 flex items-start gap-3.5 overflow-hidden"
                          >
                            {/* Radial Glow on Hover */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{
                                background: `radial-gradient(circle at 12% 18%, ${meta.glow} 0%, transparent 65%)`,
                              }}
                            />

                            {/* Brand Icon Tile */}
                            <div
                              className="w-11 h-11 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-white/[0.12] transition-all relative z-10"
                              style={{
                                boxShadow: `0 0 0 1px ${meta.accent}25`,
                              }}
                            >
                              {meta.renderLogo()}
                            </div>

                            {/* Brand Details */}
                            <div className="flex-1 min-w-0 relative z-10">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-semibold text-[15px] text-white group-hover:text-white transition-colors">
                                  {brand.name}
                                </span>
                                <div className="flex items-center gap-1.5">
                                  <span
                                    className="text-[10.5px] font-mono font-medium px-2 py-0.5 rounded-md border whitespace-nowrap"
                                    style={{
                                      backgroundColor: `${meta.accent}18`,
                                      color: meta.accent,
                                      borderColor: `${meta.accent}35`,
                                    }}
                                  >
                                    {meta.category}
                                  </span>
                                  <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#fffe6a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100" />
                                </div>
                              </div>
                              <p className="text-[12.5px] text-white/60 group-hover:text-white/85 line-clamp-2 mt-1 leading-snug transition-colors">
                                {meta.tagline}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>

                    {/* Bottom Ribbon */}
                    <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/55 relative z-10">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          <span className="font-mono text-[11px] text-white/75">100% In-House Craft</span>
                        </div>
                        <span className="hidden sm:inline text-white/20">·</span>
                        <span className="hidden sm:inline text-white/60 text-[11px]">Multi-Industry Reach</span>
                        <span className="hidden sm:inline text-white/20">·</span>
                        <span className="hidden sm:inline text-white/60 text-[11px]">Enterprise Reliability</span>
                      </div>

                      <Link
                        href="/about"
                        onClick={() => setCollectiveMenuOpen(false)}
                        className="text-[11.5px] font-semibold text-[#fffe6a] hover:text-[#fffec0] transition-colors flex items-center gap-1"
                      >
                        <span>Our Operating Ethos</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/case-studies"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/case-studies")}`}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/about")}`}
            >
              About
            </Link>

            <Link
              href="/career"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/career")}`}
            >
              Careers
            </Link>
          </div>

          {/* Right Action CTAs (Pill Contact button) */}
          <div className="hidden md:flex items-center">
            {/* Pill button like Neurex Contact us */}
            <div className="btn-wrap">
              <Link
                href="/contact"
                className={
                  isLightNav
                    ? "inline-block bg-[#eeeeee] hover:bg-[#000416] text-[#000416] hover:text-white px-5 py-2 rounded-full font-semibold text-[16px] transition-all duration-200 border border-black/5"
                    : "inline-block btn-01-white text-[#000416]"
                }
              >
                <span className="btn-text-wrap">
                  <span className="btn-text _01">Contact us</span>
                  <span className="btn-text _02">Contact us</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button (Single clean square hamburger button matching Neurex) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-11 h-11 rounded-[10px] flex items-center justify-center transition-all ${
                isLightNav
                  ? "bg-black/[0.04] border border-black/15 text-[#000416] hover:bg-black/[0.08]"
                  : "bg-white/[0.08] border border-white/20 text-white hover:bg-white/[0.15] backdrop-blur-md"
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex flex-col gap-[5px] items-center justify-center w-5">
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                </div>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu (Exact Neurex White Rounded Card Floating Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto lg:hidden fixed inset-x-4 top-[74px] sm:top-[82px] bg-white text-[#000416] border border-black/10 rounded-[24px] p-6 shadow-[0_25px_60px_rgba(0,4,22,0.18)] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Home
              </Link>
              
              {/* The Collective Expandable on Mobile */}
              <div>
                <button
                  type="button"
                  onClick={() => setCollectiveMenuOpen(!collectiveMenuOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <span>The Collective</span>
                    <span className="px-2 py-0.5 text-[11px] font-mono font-bold rounded-full bg-[#fffe6a] text-[#000416]">
                      6
                    </span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${collectiveMenuOpen ? "rotate-180" : ""}`} />
                </button>
                
                {collectiveMenuOpen && (
                  <div className="grid grid-cols-1 gap-1.5 p-2 bg-[#000416] text-white rounded-2xl my-1 border border-black/10 shadow-inner">
                    {sisterBrands.map((brand) => {
                      const meta = BRAND_META[brand.id] || {
                        accent: "#1CA3BB",
                        category: brand.category,
                      };
                      return (
                        <a
                          key={brand.id}
                          href={brand.link}
                          target={brand.link.startsWith("http") ? "_blank" : "_self"}
                          rel={brand.link.startsWith("http") ? "noopener noreferrer" : ""}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-2.5 px-3 rounded-xl flex items-center justify-between text-sm text-white hover:bg-white/[0.08] transition-colors"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: meta.accent }}
                            />
                            <div className="flex flex-col min-w-0">
                              <span className="font-semibold text-white truncate text-[14px]">{brand.name}</span>
                              <span className="text-[11px] text-white/50 truncate max-w-[180px] xs:max-w-xs">{brand.tagline}</span>
                            </div>
                          </div>
                          <span
                            className="text-[10px] font-mono px-2 py-0.5 rounded-md ml-2 shrink-0 border"
                            style={{
                              backgroundColor: `${meta.accent}18`,
                              color: meta.accent,
                              borderColor: `${meta.accent}35`,
                            }}
                          >
                            {meta.category}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                About
              </Link>
              <Link
                href="/career"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Careers
              </Link>
              
              <div className="pt-4 mt-2 border-t border-[#ebebeb]">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-[#000416] text-white font-medium text-base hover:bg-[#1a233a] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
