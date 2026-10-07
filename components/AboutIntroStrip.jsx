import React from "react";
import Link from "next/link";
import { aboutIntroData, threePillars } from "@/data/siteData";
import { ArrowRight, Compass, ShieldCheck, Cpu } from "lucide-react";

export function AboutIntroStrip() {
  return (
    <section className="py-16 sm:py-20 bg-surface-light border-y border-border-card relative">
      <div className="container-anchor">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column: Eyebrow & Lead */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sage-stroke" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted font-semibold">
                {aboutIntroData.eyebrow}
              </span>
            </div>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-forest tracking-tight leading-snug">
              {aboutIntroData.title}
            </h2>
            <div className="section-underline" />
          </div>

          {/* Right Column: Narrative & Story */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-text-body leading-relaxed">
            <p className="font-medium text-forest text-base sm:text-lg">
              {aboutIntroData.paragraphs[0]}
            </p>
            <p>{aboutIntroData.paragraphs[1]}</p>
            <p className="text-text-subtle">{aboutIntroData.paragraphs[2]}</p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest hover:text-forest-hover transition-colors group"
              >
                <span>Read our full company story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ThreePillarsStrip() {
  return (
    <section className="py-14 sm:py-16 bg-forest text-surface-light relative overflow-hidden">
      <div className="container-anchor relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
          <span className="mono-badge text-sage-light border-sage-light/30 text-[10px]">
            CORE FOUNDATION
          </span>
          <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
            Three principles we return to when the work gets hard
          </h3>
          <p className="text-xs text-text-inverse-body/80">
            And the reason the studio still exists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {threePillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-forest-card/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 space-y-4 relative group hover:border-sage-light/40 transition-all duration-300 hover:-translate-y-1 shadow-feature"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-2xl text-sage-light">
                  {pillar.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-sage-stroke group-hover:scale-125 transition-transform" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-semibold text-lg text-white">
                  {pillar.bold}
                </h4>
                <p className="text-sm font-medium text-sage-light">
                  {pillar.detail}
                </p>
              </div>
              <p className="text-xs text-text-inverse-body/75 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
