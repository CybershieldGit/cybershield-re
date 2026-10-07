"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Pause,
  Play,
} from "lucide-react";

const PROJECTS = [
  {
    id: "01",
    client: "Rakaa Rituals",
    url: "https://rakaarituals.com",
    category: "D2C E-COMMERCE & SHOPPING",
    title: "Headless D2C E-Commerce & Rituals Storefront",
    description:
      "A luxury digital shopping destination engineered for high-conversion lifestyle rituals, instantaneous product browsing, and a zero-friction mobile checkout pipeline.",
    metrics: [
      { label: "Architecture", value: "Headless D2C" },
      { label: "Mobile Ergonomics", value: "100% Fluid" },
      { label: "Checkout Flow", value: "Sub-Second" },
    ],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    tags: ["Headless Commerce", "Next.js", "Tailwind CSS", "Live Production"],
  },
  {
    id: "02",
    client: "The Wellness Ahead",
    url: "https://thewellnessahead.com",
    category: "HEALTHCARE & WELLNESS PORTAL",
    title: "Holistic Health & Patient Wellness Digital Portal",
    description:
      "A comprehensive digital wellness ecosystem connecting patients with holistic health guidance, clinical consultation resources, and verified wellness practices.",
    metrics: [
      { label: "Domain", value: "Healthcare UX" },
      { label: "Patient Trust", value: "Privacy-First" },
      { label: "Navigation", value: "Zero-Latency" },
    ],
    image:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Health Portal",
      "Consultation Flow",
      "Patient Experience",
      "Live Production",
    ],
  },
  {
    id: "03",
    client: "Angimohi Dental",
    url: null,
    category: "CLINICAL DENTAL PRACTICE",
    title: "Clinical Dental Practice & Patient Portal",
    description:
      "An elevated digital presence for modern dental practices featuring interactive treatment overviews, direct appointment consultation bookings, and patient onboarding.",
    metrics: [
      { label: "Focus", value: "Clinical Dental" },
      { label: "Appointment Flow", value: "Direct Booking" },
      { label: "Responsiveness", value: "Mobile Optimized" },
    ],
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Dental Practice",
      "Patient Booking",
      "Responsive UI",
      "Studio Built",
    ],
  },
  {
    id: "04",
    client: "Commercial Client Portals",
    url: "#consultation",
    category: "CUSTOM WEB APPLICATIONS",
    title: "Bespoke Enterprise Web Portals & Custom Software",
    description:
      "Tailored web platforms and custom portals built to replace cumbersome legacy workflows with fast, high-security React and Next.js applications.",
    metrics: [
      { label: "Stack", value: "Next.js / Node / Postgres" },
      { label: "SLA", value: "99.9% Uptime" },
      { label: "Ownership", value: "Zero Outsourcing" },
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: [
      "Custom Architecture",
      "Internal Tooling",
      "Cloud Scale",
      "Client Portals",
    ],
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 240, damping: 26 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 240, damping: 26 },
      opacity: { duration: 0.35 },
    },
  }),
};

export default function WppWorkShowcase() {
  const [[page, direction], setPage] = useState([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const [ogMap, setOgMap] = useState({});
  const [failedImages, setFailedImages] = useState({});

  const currentIndex =
    ((page % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
  const current = PROJECTS[currentIndex];

  const paginate = useCallback((newDirection) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const goToIndex = (targetIndex) => {
    const diff = targetIndex - currentIndex;
    if (diff !== 0) {
      setPage([page + diff, diff > 0 ? 1 : -1]);
    }
  };

  // Auto-swapping interval: automatically swaps cards one by one every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 4500);

    return () => clearInterval(timer);
  }, [page, isPaused, paginate]);

  // Try to fetch OpenGraph image for project URLs in the background
  useEffect(() => {
    let isMounted = true;

    PROJECTS.forEach((p) => {
      if (p.url && p.url.startsWith("http")) {
        fetch(`/api/og-preview?url=${encodeURIComponent(p.url)}`)
          .then((res) => res.json())
          .then((data) => {
            if (isMounted && data.success && data.ogImage) {
              setOgMap((prev) => ({ ...prev, [p.id]: data.ogImage }));
            }
          })
          .catch(() => {
            // Graceful fallback to default image
          });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const hasOg = Boolean(ogMap[current.id] && !failedImages[current.id]);
  const displayImage = hasOg ? ogMap[current.id] : current.image;

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#ece8df] border-t border-[#ded6c7] relative w-full"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        {/* Top Header & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf9f4] border border-[#ded6c7] text-xs font-mono font-bold text-[#0A1333]">
              <span className="w-2 h-2 rounded-full bg-[#1CA3BB]" />
              <span>PRODUCTION CASE STUDIES</span>
              <span className="text-[#1CA3BB]">·</span>
              <span className="text-[#0A1333]/60 uppercase tracking-widest text-[10px]">
                {isPaused ? "Paused" : "Autoplay"}
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0A1333] tracking-tight leading-[1.05]">
              Real deployments. <br />
              <span className="italic font-normal underline decoration-[#1CA3BB] decoration-4 underline-offset-8">
                Measurable outcomes
              </span>
              .
            </h2>
            <p className="text-base sm:text-lg text-[#0A1333]/80 leading-relaxed">
              Explore selected digital storefronts, healthcare platforms, and enterprise software systems deployed by CyberShield.
            </p>
          </div>

          {/* Pagination & Autoplay Controls */}
          <div className="flex items-center gap-4">
            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {PROJECTS.map((p, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={p.id}
                    onClick={() => goToIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "w-8 bg-[#1CA3BB]"
                        : "w-2 bg-[#ded6c7] hover:bg-[#1CA3BB]"
                    }`}
                    aria-label={`Go to project ${p.client}`}
                  />
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#0A1333]/60 tracking-wider mr-1">
                0{currentIndex + 1} / 0{PROJECTS.length}
              </span>

              <button
                onClick={() => paginate(-1)}
                className="w-11 h-11 rounded-full bg-[#fbf9f4] border border-[#ded6c7] flex items-center justify-center text-[#0A1333] hover:bg-[#0A1333] hover:text-[#fbf9f4] transition-colors cursor-pointer shadow-xs"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="w-11 h-11 rounded-full bg-[#1CA3BB] text-white flex items-center justify-center hover:bg-[#168a9f] transition-colors cursor-pointer shadow-sm"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Split Interactive Card with Auto-Swapping Animation */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative min-h-[480px] sm:min-h-[520px]"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full bg-[#fbf9f4] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#ded6c7] shadow-[0_20px_50px_-10px_rgba(10,19,51,0.08)] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Left Column: Visual Media with Floating Tag */}
                <div className="lg:col-span-6 relative aspect-[16/11] rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.08] shadow-inner group bg-[#E5E7EB]">
                  <Image
                    key={displayImage}
                    src={displayImage}
                    alt={current.title}
                    fill
                    priority
                    unoptimized={hasOg}
                    onError={() => {
                      if (hasOg) {
                        setFailedImages((prev) => ({
                          ...prev,
                          [current.id]: true,
                        }));
                      }
                    }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1333]/60 via-transparent to-transparent opacity-60 pointer-events-none" />

                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-white/90 backdrop-blur-md text-[#0A1333] shadow-xs">
                      {current.client}
                    </span>
                    {hasOg && (
                      <span className="px-2.5 py-1 rounded-full text-[9px] font-mono font-bold bg-[#0A1333]/90 text-[#1CA3BB] border border-[#1CA3BB]/40 backdrop-blur-md shadow-xs flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1CA3BB] animate-pulse" />
                        Live OG Preview
                      </span>
                    )}
                  </div>

                  {current.url && current.url.startsWith("http") && (
                    <div className="absolute bottom-4 right-4">
                      <a
                        href={current.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#0A1333] text-[#1CA3BB] hover:bg-[#1CA3BB] hover:text-white transition-colors shadow-sm"
                      >
                        <span>Visit Live Platform</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Column: Project Overview, Metrics & Action */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1CA3BB]">
                      {current.category}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-[32px] text-[#0A1333] tracking-tight leading-[1.15]">
                      {current.title}
                    </h3>
                  </div>

                  <p className="text-[13px] sm:text-[15px] text-[#0A1333]/80 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Metrics Matrix */}
                  <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-[#ded6c7]">
                    {current.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="space-y-0.5">
                        <span className="text-[9px] font-mono text-[#0A1333]/60 uppercase tracking-wider block">
                          {m.label}
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold font-mono text-[#0A1333] block truncate">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-1.5">
                    <div className="flex flex-wrap gap-1.5">
                      {current.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[9px] font-semibold px-2 py-0.5 rounded-full bg-[#ece8df] text-[#0A1333]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {current.url && current.url.startsWith("http") ? (
                      <a
                        href={current.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wpp-btn-split pl-4 pr-1.5 py-1.5 group cursor-pointer text-[11px]"
                      >
                        <span className="font-semibold">
                          Explore {current.client}
                        </span>
                        <span className="btn-icon-circle w-6 h-6">
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      </a>
                    ) : (
                      <a
                        href="#consultation"
                        className="wpp-btn-split pl-4 pr-1.5 py-1.5 group cursor-pointer text-[11px]"
                      >
                        <span className="font-semibold">
                          Book Consultation
                        </span>
                        <span className="btn-icon-circle w-6 h-6">
                          <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
