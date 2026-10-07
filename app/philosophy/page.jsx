import React from "react";
import Link from "next/link";
import { siteConfig, philosophyPrinciples } from "@/data/siteData";
import PhilosophyAccordion from "@/components/PhilosophyAccordion";
import PhilosophyConsultationButton from "@/components/PhilosophyConsultationButton";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { ArrowUpRight, ArrowRight, Sparkles, ShieldCheck, Mail, Globe } from "lucide-react";

export const metadata = {
  title: "Philosophy — CyberShield Technologies",
  description:
    "How we think about craft, compounding time, and long-horizon software architectures.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#F1F3F5] text-[#04092B] relative overflow-hidden min-h-screen selection:bg-[#1ba3be] selection:text-white">
      {/* Ambient Blue & Cyan Radial Glows (Matching Home Page Theme) */}
      <div className="absolute top-16 left-1/4 w-[650px] h-[650px] rounded-full bg-[#1ba3be]/8 blur-[140px] pointer-events-none" />
      <div className="absolute top-[480px] right-10 w-[500px] h-[500px] rounded-full bg-[#00D2FF]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[350px] left-8 w-[600px] h-[600px] rounded-full bg-[#1ba3be]/10 blur-[150px] pointer-events-none" />

      {/* Header Banner */}
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 py-10 sm:py-16 relative z-10">
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-2xs text-xs font-mono font-semibold text-[#04092B]">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
            <span>WORKING CONDITIONS & PRINCIPLES</span>
            <span className="text-[#04092B]/30">·</span>
            <span className="text-[#04092B]/70">DECADE ARCHITECTURE</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#04092B] tracking-tight leading-[0.98]">
            SIX IDEAS WE <br />
            <span className="italic font-normal underline decoration-[#00D2FF] decoration-4 underline-offset-8">
              REFUSE TO NEGOTIATE
            </span>
            .
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#04092B]/75 font-normal leading-relaxed pt-2 max-w-2xl">
            The principles below are not marketing language. They are the strict working conditions under which every product architecture, hire, and client partnership at CyberShield is decided.
          </p>
        </div>
      </section>

      {/* Signature Midnight Navy Infinite Ribbon */}
      <div className="bg-[#04092B] text-white border-y border-white/10 my-6 sm:my-10 py-3.5 relative z-10 shadow-sm">
        <InfiniteMarquee
          speed={30}
          itemClassName="text-[#00D2FF] tracking-[0.25em] text-xs sm:text-sm font-mono uppercase font-bold"
          items={[
            "01 CRAFT OVER VOLUME",
            "02 OWN WHAT YOU BUILD",
            "03 DESIGN IN DECADES",
            "04 REFUSE THE TREND",
            "05 SPEAK PLAINLY",
            "06 HIRE QUIETLY",
            "ZERO OUTSOURCING",
            "SUB-SECOND RUNTIMES",
          ]}
        />
      </div>

      {/* Grid of Detailed Principles - Clean White Cards (Home Theme) */}
      <section className="py-16 sm:py-20 relative z-10">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {philosophyPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="bg-white rounded-[28px] sm:rounded-[36px] p-7 sm:p-9 border border-black/[0.06] shadow-[0_10px_30px_-10px_rgba(4,9,43,0.05)] hover:border-[#1ba3be]/35 hover:shadow-[0_20px_45px_-15px_rgba(4,9,43,0.1)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#1ba3be] bg-[#F1F3F5] px-3 py-1 rounded-full border border-black/[0.04]">
                      {principle.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#00D2FF]" />
                  </div>

                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#04092B] group-hover:text-[#1ba3be] transition-colors leading-snug">
                    {principle.title}
                  </h2>

                  <p className="text-sm sm:text-[15px] font-medium text-[#04092B]/85 leading-relaxed">
                    {principle.summary}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-black/[0.06]">
                  <p className="text-xs sm:text-[13px] text-[#04092B]/65 leading-relaxed">
                    {principle.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <span className="inline-block font-mono text-xs sm:text-sm text-[#04092B] font-bold uppercase tracking-widest bg-white px-6 py-2.5 rounded-full border border-black/[0.08] shadow-xs">
              The rest is just work.
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Accordion Deep-Dive View */}
      <section className="py-16 sm:py-24 relative z-10 border-t border-black/[0.06]">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.06] shadow-2xs text-xs font-mono font-semibold text-[#04092B]">
              <Sparkles className="w-3.5 h-3.5 text-[#1ba3be]" />
              <span>QUICK REFERENCE MATRIX</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#04092B] tracking-tight">
              Explore the framework interactively
            </h3>
            <p className="text-sm sm:text-base text-[#04092B]/70 max-w-xl mx-auto">
              Click any principle to view core operational axioms and architectural mandates.
            </p>
          </div>
          <PhilosophyAccordion />
        </div>
      </section>

      {/* Midnight Navy Inset Conversion Card (Matching Home Page Inset Theme) */}
      <section className="pt-12 sm:pt-16 relative z-10">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
          <div className="bg-[#04092B] rounded-[36px] sm:rounded-[48px] p-8 sm:p-14 lg:p-16 text-white border border-white/10 shadow-[0_30px_70px_-20px_rgba(4,9,43,0.3)] relative overflow-hidden space-y-10">
            {/* Ambient Cyber Blue Glows */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1ba3be]/15 blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00D2FF]/10 blur-[100px] pointer-events-none" />

            <div className="space-y-4 max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#00D2FF]">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span>START A CONVERSATION</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                Let&apos;s build for <br className="hidden sm:inline" />
                <span className="text-[#00D2FF] italic font-normal underline decoration-[#00D2FF]/40 decoration-4 underline-offset-8">
                  the next decade
                </span>
                .
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
                Every inquiry is reviewed directly by our founding engineers and studio leadership. We reply with a concrete architecture proposal within 48 hours.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <PhilosophyConsultationButton />

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors shadow-xs"
              >
                <span>Direct Studio Channel</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00D2FF]" />
              </Link>
            </div>

            {/* Direct Channel Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-left relative z-10">
              <div>
                <span className="text-[10px] text-[#00D2FF] uppercase block mb-1 font-semibold tracking-wider">
                  Official Support & Email
                </span>
                <a
                  href={`mailto:${siteConfig.contactEmails.support}`}
                  className="text-white hover:text-[#00D2FF] transition-colors truncate block font-bold text-sm"
                >
                  {siteConfig.contactEmails.support}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-[#00D2FF] uppercase block mb-1 font-semibold tracking-wider">
                  Studio Headquarters
                </span>
                <span className="text-white/80 block font-sans text-xs">
                  {siteConfig.headquarters.address}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-[#00D2FF] uppercase block mb-1 font-semibold tracking-wider">
                  Production Guarantee
                </span>
                <span className="text-[#00D2FF] block font-bold">
                  Zero Outsourcing · 99.9% Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
