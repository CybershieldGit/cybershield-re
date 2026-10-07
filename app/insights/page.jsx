import React from "react";
import Link from "next/link";
import { insightsArticles } from "@/data/siteData";
import BigTextCTA from "@/components/redesign/BigTextCTA";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export const metadata = {
  title: "Insights & Field Notes — CyberShield Technologies",
  description: "Field notes and essays from the CyberShield studio.",
};

export default function InsightsPage() {
  return (
    <div className="pt-28 sm:pt-32 pb-16 bg-canvas-base">
      {/* Header Banner */}
      <section className="container-anchor py-12 sm:py-16">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
              FIELD NOTES & ESSAYS
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-forest tracking-tight leading-[0.95]">
            FIELD NOTES <br />
            <span className="italic font-normal underline decoration-sage-stroke decoration-2 underline-offset-8">
              FROM THE STUDIO
            </span>
            .
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-body font-normal leading-relaxed pt-2 max-w-2xl">
            Occasional writing on engineering practice, product craft and the discipline of operating technology companies for the long term.
          </p>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-forest text-surface-light border-y border-forest-hover my-6">
        <InfiniteMarquee
          speed={30}
          itemClassName="text-sage-light tracking-widest text-xs sm:text-sm font-mono"
          items={[
            "01 HIGH-CONVERSION HEADLESS E-COMMERCE",
            "02 DIGITAL HEALTH & CLINICAL ARCHITECTURE",
            "03 ZERO-FRICTION CHECKOUT & LATENCY",
            "04 CUSTOM WEB APPLICATIONS THAT SCALE",
            "05 EDITORIAL COMMERCE & UX TYPOGRAPHY",
          ]}
        />
      </div>

      {/* Articles List */}
      <section className="py-16 bg-surface-light border-y border-border-card">
        <div className="container-anchor space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {insightsArticles.map((art, idx) => (
              <TiltCard key={art.id} tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.4)" className={`h-full ${idx === 0 ? "md:col-span-2" : ""}`}>
                <div
                  className={`card-linen p-6 sm:p-8 flex flex-col justify-between group h-full bg-surface-light ${
                    idx === 0 ? "bg-[#f4efe4]/80 border-sage-stroke/40" : ""
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                        {art.category}
                      </span>
                      <span className="font-mono">{art.date} · {art.readTime}</span>
                    </div>

                    <h2 className="font-display font-bold text-xl sm:text-2xl text-forest group-hover:text-forest-hover transition-colors">
                      {art.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-border-subtle/40 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-forest group-hover:underline flex items-center gap-1">
                      <span>Read essay</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">STUDIO NOTE</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <BigTextCTA />
    </div>
  );
}
