"use client";

import React from "react";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { ShieldCheck, Server, Users, Award, Radio } from "lucide-react";

export default function StatsStrip() {
  return (
    <section className="py-12 bg-navy text-surface-light border-y border-navy-card relative overflow-hidden">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-anchor relative z-10 space-y-6">
        {/* Top Status Pulse */}
        <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
            </span>
            <span className="text-cyan font-bold tracking-wider">
              OPERATIONAL TELEMETRY
            </span>
          </div>
          <span className="text-text-inverse-body/70 hidden sm:inline-block">
            GREATER NOIDA WEST, INDIA
          </span>
        </div>

        {/* 4 Vital Metric Monuments */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline justify-center sm:justify-start">
              <AnimatedCounter target={7} duration={1.5} />
              <span className="text-cyan ml-1">+</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan/90 block font-semibold">
              Ventures Operated
            </span>
          </div>

          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline justify-center sm:justify-start">
              <AnimatedCounter target={120} duration={1.8} />
              <span className="text-cyan ml-1">+</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan/90 block font-semibold">
              Senior Craftsmen
            </span>
          </div>

          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline justify-center sm:justify-start">
              <AnimatedCounter target={5} duration={1.5} />
              <span className="text-cyan ml-1">+</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan/90 block font-semibold">
              Years Operating
            </span>
          </div>

          <div className="space-y-1">
            <div className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight flex items-baseline justify-center sm:justify-start">
              <AnimatedCounter target={99} duration={1.5} />
              <span className="text-cyan">.9%</span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan/90 block font-semibold">
              Production SLA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
