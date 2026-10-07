"use client";

import React from "react";
import Link from "next/link";
import { capabilitiesData } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import { Bot, Cpu, LayoutGrid, Rocket, ArrowRight, Check } from "lucide-react";

const icons = {
  ai: Bot,
  enterprise: Cpu,
  saas: LayoutGrid,
  ventures: Rocket,
};

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-canvas-base relative">
      <div className="container-anchor space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
              <span className="mono-badge text-navy bg-surface-light border-border-subtle text-[11px]">
                CORE DISCIPLINES
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              DISCIPLINES THAT <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                COMPOUND IN TIME
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              Four practices operating under one roof — each staffed by senior teams, each in continuous use across our own portfolio and client engagements.
            </p>
          </div>

          <div>
            <Link
              href="/capabilities"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Explore all practice capabilities</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Capabilities Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {capabilitiesData.map((cap) => {
            const IconComp = icons[cap.id] || Cpu;

            return (
              <TiltCard key={cap.id} tiltIntensity={6} glowColor="rgba(27, 163, 190, 0.35)" className="h-full">
                <div className="card-linen p-8 sm:p-10 flex flex-col justify-between h-full group bg-surface-light hover:border-cyan/50 hover:shadow-[0_0_24px_rgba(27,163,190,0.15)] transition-all duration-300">
                  <div className="space-y-6">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl font-bold text-cyan">
                        {cap.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-surface-warm flex items-center justify-center text-navy border border-border-subtle group-hover:border-cyan/50 group-hover:text-cyan transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-navy group-hover:text-navy-hover transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-xs font-semibold text-cyan font-mono uppercase tracking-wider">
                        {cap.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed pt-1">
                        {cap.description}
                      </p>
                    </div>

                    {/* Services Sub-list */}
                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cap.services.map((service, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-2 text-xs font-medium text-navy"
                        >
                          <Check className="w-3.5 h-3.5 text-cyan shrink-0" />
                          <span className="truncate">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-6 mt-6 border-t border-border-subtle/50 flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted">
                      PRACTICE 0{cap.id === "ai" ? 1 : cap.id === "enterprise" ? 2 : cap.id === "saas" ? 3 : 4}
                    </span>
                    <Link
                      href={`/capabilities#${cap.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-cyan group-hover:underline"
                    >
                      <span>Deep Dive</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
