"use client";

import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, Landmark, HeartPulse, ShoppingBag, Clapperboard, Factory, Building2, Truck, GraduationCap } from "lucide-react";

const industryIcons = {
  "/01": Landmark,
  "/02": HeartPulse,
  "/03": ShoppingBag,
  "/04": Clapperboard,
  "/05": Factory,
  "/06": Building2,
  "/07": Truck,
  "/08": GraduationCap,
};

export function IndustryTile({ industry }) {
  const IconComponent = industryIcons[industry.code] || Building2;

  return (
    <TiltCard tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.4)" className="h-full">
      <Link
        href={`/industries#${industry.code.replace("/", "")}`}
        className="group block p-6 sm:p-7 bg-surface-light border border-border-card rounded-2xl hover:border-forest/40 hover:shadow-elevated transition-all duration-300 relative overflow-hidden h-full flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="font-mono text-sm font-bold text-sage-stroke group-hover:text-forest transition-colors">
              {industry.code}
            </span>
            <div className="w-8 h-8 rounded-full bg-surface-warm flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-sage-light transition-colors shadow-xs">
              <IconComponent className="w-4 h-4" />
            </div>
          </div>

          <h3 className="font-display font-semibold text-lg sm:text-xl text-forest mb-2 group-hover:text-forest-hover transition-colors">
            {industry.name}
          </h3>

          <p className="text-xs sm:text-sm text-text-body/85 leading-relaxed mb-4">
            {industry.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-border-subtle/30 flex items-center justify-between text-xs text-forest font-semibold uppercase tracking-wider">
          <span>View sector impact</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </TiltCard>
  );
}

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-20 sm:py-28 bg-canvas-base relative">
      <div className="container-anchor">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
                SECTORS SERVED
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
              Where technology <br />
              <span className="italic underline decoration-sage-stroke decoration-2 underline-offset-8">
                reshapes the ground
              </span>
              .
            </h2>
            <div className="section-underline" />
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              We operate where technology reshapes the fundamentals of an industry — not where it merely decorates the surface.
            </p>
          </div>

          <div>
            <Link href="/industries" className="btn-secondary !text-xs whitespace-nowrap">
              <span>All industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 8 Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {industriesData.map((industry) => (
            <IndustryTile key={industry.code} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
