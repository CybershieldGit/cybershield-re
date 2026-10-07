import React from "react";
import Link from "next/link";
import { techStackData } from "@/data/siteData";
import TechTerminalInspector from "@/components/telemetry/TechTerminalInspector";
import TiltCard from "@/components/motion/TiltCard";
import BigTextCTA from "@/components/redesign/BigTextCTA";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Technology — CyberShield Technologies",
  description: "The systems and infrastructure behind our products.",
};

export default function TechnologyPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 bg-canvas-base">
      {/* Header Banner */}
      <section className="container-anchor py-12 sm:py-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
              ARCHITECTURE & SYSTEMS
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-forest tracking-tight leading-[0.95]">
            BUILT ON TOOLS <br />
            <span className="italic font-normal underline decoration-sage-stroke decoration-2 underline-offset-8">
              WE TRUST FOR YEARS
            </span>
            .
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-body font-normal leading-relaxed pt-2 max-w-2xl">
            {techStackData.intro}
          </p>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-forest text-surface-light border-y border-forest-hover my-6">
        <InfiniteMarquee
          speed={30}
          itemClassName="text-sage-light tracking-widest text-xs sm:text-sm font-mono"
          items={[
            "NEXT.JS 14/15",
            "REACT",
            "TYPESCRIPT",
            "NODE.JS",
            "PYTHON",
            "TAILWIND CSS",
            "POSTGRESQL",
            "REDIS",
            "DOCKER",
            "REST & GRAPHQL",
            "AWS & CLOUDFLARE",
            "MODERN AI INTEGRATIONS",
          ]}
        />
      </div>

      {/* Production Stack Section with Terminal Inspector */}
      <section className="py-16 bg-surface-light border-y border-border-card">
        <div className="container-anchor space-y-16">
          {/* Interactive Terminal Inspector */}
          <TechTerminalInspector />

          {/* Stack Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackData.categories.map((category, idx) => (
              <TiltCard key={idx} tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.4)" className="h-full">
                <div className="bg-surface-warm border border-border-card rounded-2xl p-6 space-y-4 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-forest border-b border-border-subtle/60 pb-3">
                      {category.name}
                    </h2>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {category.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-border-subtle text-forest shadow-xs font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-text-muted pt-4 border-t border-border-subtle/40">
                    TESTED UNDER PRODUCTION LOAD
                  </span>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* 4 Pillars Grid */}
          <div className="pt-8 border-t border-border-subtle/60 space-y-6">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-forest">
              Four Non-Negotiable Operational Axioms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStackData.principles.map((p, idx) => (
                <div key={idx} className="card-linen p-6 space-y-2.5 bg-surface-warm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <h4 className="font-display font-bold text-base text-forest">
                      {p.title}
                    </h4>
                  </div>
                  <p className="text-xs text-text-body leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <BigTextCTA />
    </div>
  );
}
