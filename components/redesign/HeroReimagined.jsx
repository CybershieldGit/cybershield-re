"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import SignalGraphCanvas from "@/components/motion/SignalGraphCanvas";
import MagneticButton from "@/components/motion/MagneticButton";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { ArrowUpRight, ArrowRight, Shield, Layers, Radio, Sparkles } from "lucide-react";

export default function HeroReimagined() {
  const { openConsultation } = useModal();

  return (
    <section className="relative z-10 -mt-[100vh] pt-28 sm:pt-32 md:pt-36 pb-12 overflow-hidden bg-canvas-base">
      {/* Background Interactive Signal Graph */}
      <SignalGraphCanvas className="opacity-60" />

      {/* Atmospheric Botanical Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-sage-light/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-anchor relative z-10 space-y-8 sm:space-y-12">
        {/* Top Minimal Telemetry Coordinates Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-text-muted border-b border-border-card/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-forest" />
            </span>
            <span className="font-semibold text-forest uppercase tracking-widest">
              STUDIO & VENTURE ECOSYSTEM
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span>HEADQUARTERS: GREATER NOIDA WEST, INDIA</span>
          </div>

          <div className="font-semibold text-forest uppercase tracking-widest">
            EST. 2019
          </div>
        </div>

        {/* GIANT ARCHITECTURAL DISPLAY HEADLINE (Fitted & Responsive) */}
        <div className="space-y-4 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <h1 className="font-display font-extrabold text-[clamp(2.75rem,7.2vw,7.5rem)] text-forest tracking-tight leading-[0.92] select-none uppercase w-full">
              CYBERSHIELD
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pt-2"
          >
            <p className="font-display font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-forest/90 tracking-tight max-w-2xl leading-snug">
              We architect the digital systems behind the companies of tomorrow.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
              <MagneticButton strength={20}>
                <button
                  onClick={() => openConsultation("Hero Reimagined")}
                  className="btn-primary !py-4 !px-8 text-xs shadow-elevated"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </MagneticButton>

              <MagneticButton strength={15}>
                <Link
                  href="/contact"
                  className="btn-secondary !py-4 !px-8 text-xs"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Three Core Axioms Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-border-card/80">
          <div className="bg-surface-light/80 backdrop-blur-md p-5 rounded-2xl border border-border-card space-y-1.5 shadow-subtle hover:border-forest/40 transition-colors">
            <span className="font-mono text-xs font-bold text-sage-stroke">01 / ARCHITECTURE</span>
            <h3 className="font-display font-bold text-base text-forest">Systems Over Trends</h3>
            <p className="text-xs text-text-body">We architect resilient distributed backbones that outlive seasonal hype.</p>
          </div>

          <div className="bg-surface-light/80 backdrop-blur-md p-5 rounded-2xl border border-border-card space-y-1.5 shadow-subtle hover:border-forest/40 transition-colors">
            <span className="font-mono text-xs font-bold text-sage-stroke">02 / HORIZON</span>
            <h3 className="font-display font-bold text-base text-forest">Designed for Decades</h3>
            <p className="text-xs text-text-body">Every architectural decision assumes the system will run cleanly 10 years from now.</p>
          </div>

          <div className="bg-surface-light/80 backdrop-blur-md p-5 rounded-2xl border border-border-card space-y-1.5 shadow-subtle hover:border-forest/40 transition-colors">
            <span className="font-mono text-xs font-bold text-sage-stroke">03 / OWNERSHIP</span>
            <h3 className="font-display font-bold text-base text-forest">Permanent Operations</h3>
            <p className="text-xs text-text-body">We run and operate our own ecosystem ventures indefinitely under one craft standard.</p>
          </div>
        </div>
      </div>

      {/* DUAL INFINITE HORIZONTAL MARQUEE STRIPS */}
      <div className="mt-12 space-y-2">
        {/* Strip 1: Dark Forest with Sage Glow */}
        <div className="bg-forest text-surface-light border-y border-forest-hover">
          <InfiniteMarquee
            speed={28}
            direction="left"
            itemClassName="text-sage-light tracking-widest text-sm sm:text-base md:text-lg"
            items={[
              "CYBERSHIELD TECHNOLOGIES",
              "AI PLATFORMS",
              "ENTERPRISE SOFTWARE",
              "SAAS ECOSYSTEMS",
              "RELATIONSHIP INTELLIGENCE",
              "APPLIED RESEARCH",
              "GLOBAL VENTURES",
              "SOC 2 TYPE II",
            ]}
          />
        </div>

        {/* Strip 2: Warm Linen Canvas with Forest Bold */}
        <div className="bg-surface-warm text-forest border-y border-border-card">
          <InfiniteMarquee
            speed={34}
            direction="right"
            itemClassName="text-forest tracking-wider text-xs sm:text-sm md:text-base font-mono"
            items={[
              "01 CONVERRO CRM",
              "02 ADLYNGO",
              "03 INST. DIGITAL STUDIES",
              "04 SKILLGROW",
              "05 SENDERBOT",
              "06 PHONOTEL",
              "07 FUTURE AI VENTURES",
              "120+ ENGINEERS",
              "4.2M RECORDS UNIFIED",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
