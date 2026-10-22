import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { ArrowRight, Landmark, HeartPulse, ShoppingBag, Clapperboard, Factory, Building2, Truck, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Industries — CyberShield Technologies",
  description: "Where technology reshapes the fundamentals of an industry.",
};

const icons = {
  "/01": Landmark,
  "/02": HeartPulse,
  "/03": ShoppingBag,
  "/04": Clapperboard,
  "/05": Factory,
  "/06": Building2,
  "/07": Truck,
  "/08": GraduationCap,
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 sm:pt-32 lg:pt-36 bg-canvas-base">
      {/* Header Banner */}
      <section className="container-anchor pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
              SECTOR EXPERTISE
            </span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-forest tracking-tight leading-[0.95]">
            WHERE SOFTWARE <br />
            <span className="italic font-normal underline decoration-sage-stroke decoration-2 underline-offset-8">
              RESHAPES THE GROUND
            </span>
            .
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-text-body font-normal leading-relaxed pt-2 max-w-2xl">
            We operate where software rearranges the fundamentals of an industry — not where it merely decorates the surface.
          </p>
        </div>
      </section>

      {/* Infinite Ticker */}
      <div className="bg-forest text-surface-light border-y border-forest-hover my-8 sm:my-10">
        <InfiniteMarquee
          speed={32}
          itemClassName="text-sage-light tracking-widest text-xs sm:text-sm font-mono"
          items={[
            "01 FINANCIAL SERVICES",
            "02 HEALTHCARE",
            "03 RETAIL & COMMERCE",
            "04 MEDIA & ENTERTAINMENT",
            "05 MANUFACTURING",
            "06 PUBLIC SECTOR",
            "07 LOGISTICS",
            "08 EDUCATION",
          ]}
        />
      </div>

      {/* Detailed Industry Cards Grid */}
      <section className="py-20 sm:py-24 lg:py-28 bg-surface-light border-y border-border-card">
        <div className="container-anchor space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {industriesData.map((ind) => {
              const IconComp = icons[ind.code] || Building2;
              const anchorId = ind.code.replace("/", "");

              return (
                <TiltCard key={ind.code} tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.4)" className="h-full">
                  <div
                    id={anchorId}
                    className="scroll-mt-32 card-linen p-6 sm:p-8 space-y-4 flex flex-col justify-between h-full bg-surface-light"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-base font-bold text-forest bg-surface-warm px-3 py-1 rounded-md border border-border-subtle">
                          {ind.code}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-surface-warm flex items-center justify-center text-forest">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h2 className="font-display font-bold text-xl sm:text-2xl text-forest">
                        {ind.name}
                      </h2>

                      <p className="text-sm text-text-body leading-relaxed">
                        {ind.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-border-subtle/50 bg-surface-warm/60 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                        Production Benchmark
                      </span>
                      <p className="text-xs text-forest font-semibold">
                        {ind.caseHighlight}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-surface-warm border border-border-card flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-base text-forest">
                We choose our fights carefully.
              </h3>
              <p className="text-xs text-text-body">
                Explore how we solved mission-critical problems in banking, logistics, health, and broadcast media.
              </p>
            </div>
            <Link href="/work" className="btn-primary !py-3 !px-6 text-xs whitespace-nowrap">
              <span>See representative work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
