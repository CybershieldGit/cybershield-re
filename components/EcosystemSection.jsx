"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ecosystemVentures } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowUpRight, ArrowRight, CheckCircle2, ChevronRight, Layers, Sparkles, ShieldCheck } from "lucide-react";

export default function EcosystemSection() {
  const [selectedVenture, setSelectedVenture] = useState(0);

  return (
    <section id="ecosystem" className="py-20 sm:py-24 bg-surface-light border-y border-border-card relative">
      <div className="container-anchor space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-forest" />
              <span className="mono-badge text-forest bg-surface-warm border-border-subtle text-[11px]">
                PORTFOLIO ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[0.95]">
              SEVEN VENTURES. <br />
              <span className="italic font-normal underline decoration-sage-stroke decoration-2 underline-offset-8">
                ONE CULTURE
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              Built, owned, and operated in-house. Sharing infrastructure, design rigor, and zero compromise on craft.
            </p>
          </div>

          <div>
            <Link
              href="/ecosystem"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Explore portfolio architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 7 Venture Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemVentures.map((venture, idx) => {
            const isExternal = venture.link.startsWith("http");

            return (
              <TiltCard key={venture.id} tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.45)" className="h-full">
                <div className="card-linen p-6 sm:p-7 flex flex-col justify-between h-full group bg-surface-warm hover:border-forest/40 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-forest bg-white px-2.5 py-1 rounded border border-border-subtle">
                        0{idx + 1}
                      </span>
                      <span className="mono-badge bg-white text-forest border-border-subtle text-[10px]">
                        {venture.category}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display font-bold text-xl text-forest group-hover:text-forest-hover transition-colors">
                        {venture.name}
                      </h3>
                      <p className="text-xs font-semibold text-forest/90">
                        {venture.tagline}
                      </p>
                      <p className="text-xs text-text-body leading-relaxed pt-1">
                        {venture.description}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {venture.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="font-mono text-[10px] px-2 py-0.5 rounded bg-white border border-border-subtle text-forest"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-border-subtle/50 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-forest">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest animate-pulse" />
                      <span>{venture.status}</span>
                    </div>

                    {isExternal ? (
                      <a
                        href={venture.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest group-hover:underline"
                      >
                        <span>{venture.externalLabel || "Visit"}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        href={venture.link}
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest group-hover:underline"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
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
