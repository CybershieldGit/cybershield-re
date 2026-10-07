"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { heroData } from "@/data/siteData";
import SignalGraphCanvas from "@/components/motion/SignalGraphCanvas";
import MagneticButton from "@/components/motion/MagneticButton";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { ArrowRight, ArrowUpRight, Shield, Layers, Sparkles, Activity } from "lucide-react";

export default function Hero() {
  const { openConsultation } = useModal();

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24 md:pb-28 overflow-hidden bg-canvas-base">
      {/* Interactive Generative Signal Graph Background */}
      <SignalGraphCanvas className="opacity-70" />

      {/* Ambient Botanical Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sage-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#d1ddcc]/25 rounded-full blur-2xl pointer-events-none" />

      <div className="container-anchor relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          {/* Studio Tag & Live Node Status */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-light/90 backdrop-blur-md border border-border-card shadow-subtle"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-forest font-semibold">
              {heroData.badge}
            </span>
            <span className="text-border-subtle">|</span>
            <span className="font-mono text-[10px] sm:text-xs text-text-muted">
              EST. 2019 · NOIDA
            </span>
          </motion.div>

          {/* Main Headline (Raleway Display) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-forest tracking-tight leading-[1.12]"
          >
            Building digital companies that{" "}
            <span className="italic font-normal underline decoration-sage-stroke/70 decoration-2 underline-offset-8">
              shape tomorrow
            </span>
          </motion.h1>

          {/* Subheadline (Inter Body) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-text-body font-normal max-w-2xl mx-auto leading-relaxed"
          >
            {heroData.subheadline}
          </motion.p>

          {/* Dual Magnetic CTAs & Ecosystem Trigger */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <MagneticButton strength={20}>
              <button
                onClick={() => openConsultation("Hero Section")}
                className="btn-primary w-full sm:w-auto px-8 py-3.5 text-xs shadow-elevated"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </MagneticButton>

            <MagneticButton strength={15}>
              <Link
                href="/contact"
                className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>

            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest/80 hover:text-forest px-4 py-3 rounded-full hover:bg-forest/5 transition-colors group"
            >
              <span>Explore Ecosystem</span>
              <Layers className="w-3.5 h-3.5 text-forest group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>

          {/* High-Tech Animated Telemetry Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left max-w-3xl mx-auto"
          >
            <div className="bg-surface-light/85 backdrop-blur-md border border-border-card rounded-2xl p-4 shadow-subtle hover:border-sage-stroke/60 transition-colors">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-forest block">
                <AnimatedCounter value="7" />
              </span>
              <span className="text-[11px] text-text-muted font-medium block">
                Venture Ecosystem
              </span>
            </div>

            <div className="bg-surface-light/85 backdrop-blur-md border border-border-card rounded-2xl p-4 shadow-subtle hover:border-sage-stroke/60 transition-colors">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-forest block">
                <AnimatedCounter value="120+" />
              </span>
              <span className="text-[11px] text-text-muted font-medium block">
                Craft Engineers
              </span>
            </div>

            <div className="bg-surface-light/85 backdrop-blur-md border border-border-card rounded-2xl p-4 shadow-subtle hover:border-sage-stroke/60 transition-colors">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-forest block">
                <AnimatedCounter value="4.2M+" />
              </span>
              <span className="text-[11px] text-text-muted font-medium block">
                Records Unified
              </span>
            </div>

            <div className="bg-surface-light/85 backdrop-blur-md border border-border-card rounded-2xl p-4 shadow-subtle hover:border-sage-stroke/60 transition-colors">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-forest block">
                HQ
              </span>
              <span className="text-[11px] text-text-muted font-medium block">
                Greater Noida West
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
