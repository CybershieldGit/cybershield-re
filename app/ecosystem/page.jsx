import React from "react";
import Link from "next/link";
import { ecosystemVentures } from "@/data/siteData";
import InteractiveEcosystemList from "@/components/redesign/InteractiveEcosystemList";
import BigTextCTA from "@/components/redesign/BigTextCTA";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { Network, ShieldCheck, Layers } from "lucide-react";

export const metadata = {
  title: "Ecosystem — CyberShield Technologies",
  description: "Seven ventures. One engineering standard.",
};

export default function EcosystemPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 bg-canvas-base">
      {/* Header Banner */}
      <section className="container-anchor py-12 sm:py-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
              THE VENTURE PORTFOLIO
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-forest tracking-tight leading-[0.95]">
            SEVEN VENTURES. <br />
            <span className="italic font-normal underline decoration-sage-stroke decoration-2 underline-offset-8">
              ONE STANDARD
            </span>
            .
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-body font-normal leading-relaxed pt-2 max-w-2xl">
            Each venture in the CyberShield portfolio is built, owned and operated by our own teams — sharing infrastructure, design language and a single obsession with craft.
          </p>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-forest text-surface-light border-y border-forest-hover my-6">
        <InfiniteMarquee
          speed={32}
          itemClassName="text-sage-light tracking-widest text-xs sm:text-sm font-mono"
          items={[
            "CONVERRO CRM",
            "ADLYNGO MEDIA INFRA",
            "INSTITUTE OF DIGITAL STUDIES",
            "SKILLGROW LEARNING GRAPH",
            "SENDERBOT MESSAGING API",
            "PHONOTEL VOICE INFRA",
            "FUTURE AI VENTURES",
          ]}
        />
      </div>

      {/* Shared Architecture Pillars */}
      <section className="py-12 bg-surface-light border-y border-border-card">
        <div className="container-anchor">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-surface-warm border border-border-subtle/50">
              <Network className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-forest">Shared Infrastructure</h3>
                <p className="text-xs text-text-body mt-1 leading-relaxed">
                  All ecosystem ventures share battle-tested low-latency data pipelines, telemetry, and security protocols.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-surface-warm border border-border-subtle/50">
              <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-forest">Zero Outsourcing</h3>
                <p className="text-xs text-text-body mt-1 leading-relaxed">
                  100% of engineering, interface design, product strategy, and ongoing support is handled by in-house teams.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-5 rounded-2xl bg-surface-warm border border-border-subtle/50">
              <Layers className="w-5 h-5 text-forest shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-base text-forest">Permanent Ownership</h3>
                <p className="text-xs text-text-body mt-1 leading-relaxed">
                  We build for decades. Every platform is designed to be maintained, refined, and operated indefinitely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem List & Telemetry Console */}
      <InteractiveEcosystemList />

      {/* Conversion CTA */}
      <BigTextCTA />
    </div>
  );
}
