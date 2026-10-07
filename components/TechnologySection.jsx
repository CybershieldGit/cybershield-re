"use client";

import React from "react";
import Link from "next/link";
import { techStackData } from "@/data/siteData";
import TechTerminalInspector from "@/components/telemetry/TechTerminalInspector";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, CheckCircle2, ShieldCheck, Terminal } from "lucide-react";

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 sm:py-28 bg-surface-light border-y border-border-card relative">
      <div className="container-anchor space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
              <span className="mono-badge text-navy bg-surface-warm border-border-subtle text-[11px]">
                ARCHITECTURE & SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              BUILT ON TOOLS <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                WE TRUST FOR YEARS
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              {techStackData.intro}
            </p>
          </div>

          <div>
            <Link
              href="/technology"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Explore full infrastructure blueprint</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Architecture Terminal Inspector */}
        <TechTerminalInspector />

        {/* Stack Categories Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackData.categories.map((category, idx) => (
            <TiltCard key={idx} tiltIntensity={6} glowColor="rgba(27, 163, 190, 0.35)" className="h-full">
              <div className="bg-surface-warm border border-border-card rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full hover:border-cyan/50 transition-colors">
                <div>
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-navy border-b border-border-subtle/60 pb-3 flex items-center justify-between">
                    <span>{category.name}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-border-subtle text-navy shadow-xs font-semibold"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-[10px] font-mono text-text-muted pt-4 border-t border-border-subtle/40">
                  TESTED UNDER LOAD
                </span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
