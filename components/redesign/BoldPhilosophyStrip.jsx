"use client";

import React from "react";
import Link from "next/link";
import { philosophyPrinciples } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function BoldPhilosophyStrip() {
  return (
    <section className="py-20 sm:py-28 bg-canvas-base text-navy relative overflow-hidden border-y border-border-card">
      {/* Subtle Ambient Cyber Cyan Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-anchor relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-border-card">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
              <span className="mono-badge text-navy bg-surface-light border-border-subtle text-[10px]">
                NON-NEGOTIABLE AXIOMS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              SIX IDEAS WE <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                REFUSE TO COMPROMISE
              </span>
              .
            </h2>
          </div>

          <div>
            <Link
              href="/philosophy"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Read complete studio philosophy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 6 Principles Grid (Light Warm Ivory Cards with Midnight Navy Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {philosophyPrinciples.map((p) => (
            <TiltCard key={p.number} tiltIntensity={6} glowColor="rgba(27, 163, 190, 0.35)" className="h-full">
              <div className="bg-surface-light/95 backdrop-blur-md border border-border-card rounded-2xl p-6 sm:p-8 space-y-4 hover:border-cyan/50 hover:shadow-[0_0_24px_rgba(27,163,190,0.15)] transition-all duration-300 shadow-subtle flex flex-col justify-between h-full group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-cyan">
                      {p.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-navy group-hover:text-navy-hover transition-colors tracking-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm font-semibold text-navy/80 leading-snug">
                    {p.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-subtle/60">
                  <p className="text-xs text-text-body leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom Axiom Banner */}
        <div className="pt-4 text-center">
          <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-navy bg-surface-warm px-6 py-2.5 rounded-full border border-border-card inline-block font-semibold shadow-xs">
            The rest is just work.
          </span>
        </div>
      </div>
    </section>
  );
}
