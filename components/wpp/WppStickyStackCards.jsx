"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles, ExternalLink, Layers } from "lucide-react";

const STACK_CARDS = [
  {
    number: "01",
    pillarTag: "PILLAR 01 · PARENT CORE",
    title: "Enterprise AI, Foundation Models & Deep Custom Software",
    brandContext: "CyberShield Technologies Parent Engineering",
    summary:
      "We architect proprietary LLM evaluation harnesses, fine-tune domain models on high-security private enterprise datasets, and engineer resilient distributed software backbones designed to run for decades.",
    highlight: "Parent Core · Zero-Downtime Enterprise Software & GenAI Systems",
    highlightUrl: "/capabilities",
    tags: ["Foundation Models", "Enterprise Microservices", "PostgreSQL & Redis", "Deterministic Guardrails"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    accent: "#1CA3BB",
  },
  {
    number: "02",
    pillarTag: "PILLAR 02 · VOICE INTELLIGENCE",
    title: "Autonomous Voice Agents & Enterprise IVR Telephony",
    brandContext: "Sister Brand: PhonoTell",
    summary:
      "Carrier-grade programmable voice infrastructure and intelligent multi-lingual IVR. Deploys autonomous voice AI agents capable of resolving complex enterprise customer queries with sub-200ms latency.",
    highlight: "Powered by Sister Division: PhonoTell (phonotel.com)",
    highlightUrl: "https://www.phonotel.com",
    tags: ["Autonomous Voice AI", "Carrier SIP Routing", "Real-Time Transcription", "Sub-200ms Audio"],
    image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&w=1200&q=80",
    accent: "#1CA3BB",
  },
  {
    number: "03",
    pillarTag: "PILLAR 03 · WORKFLOW & MESSAGING",
    title: "Enterprise Workflow CRM & Official WhatsApp Automation",
    brandContext: "Sister Brands: Converro & SenderBot",
    summary:
      "Unifying customer data and high-deliverability conversational pipelines. Converro manages complex operational workflows and relationship intelligence, while SenderBot automates official WhatsApp Business API interactions.",
    highlight: "Powered by Sister Divisions: Converro CRM (converro.io) & SenderBot (senderbot.io)",
    highlightUrl: "https://www.converro.io",
    tags: ["Enterprise CRM", "WhatsApp Business API", "Workflow Automation", "SOC 2 Type II"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    accent: "#1CA3BB",
  },
  {
    number: "04",
    pillarTag: "PILLAR 04 · GROWTH & TALENT",
    title: "Full-Funnel UGC Media & Dual-Tier Tech Talent Academies",
    brandContext: "Sister Brands: Adlyngo, IDS & SkillGrow",
    summary:
      "Driving brand demand while creating the technology workforce of tomorrow. Adlyngo scales high-ROI UGC performance ads, while IDS (live cohorts) and SkillGrow (recorded masterclasses) train engineers and leaders.",
    highlight: "Powered by Sister Divisions: Adlyngo, IDS Academy & SkillGrow",
    highlightUrl: "https://idigitalstudies.com/",
    tags: ["UGC Video Ads", "Live Cohorts (Online/Offline)", "Recorded Masterclasses", "Data Science & AI"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    accent: "#1CA3BB",
  },
];

export default function WppStickyStackCards() {
  return (
    <section className="py-24 sm:py-32 bg-[#ece8df] relative w-full" id="capabilities">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fbf9f4] border border-[#ded6c7] text-xs font-mono font-bold text-[#0A1333]">
            <span className="w-2 h-2 rounded-full bg-[#1CA3BB]" />
            <span>THE 4 FOUNDATIONAL PILLARS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0A1333] tracking-tight leading-[1.05]">
            Built as a collective. <br />
            <span className="font-normal italic underline decoration-[#1CA3BB] decoration-4 underline-offset-8">
              Engineered to compound
            </span>
            .
          </h2>
          <p className="text-base sm:text-lg text-[#0A1333]/80 leading-relaxed max-w-2xl">
            CyberShield brings deep AI & custom software capabilities, combined with our 6 specialized operating divisions to cover infrastructure, customer workflows, revenue growth, and certified talent.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="space-y-12 sm:space-y-16 pt-6">
          {STACK_CARDS.map((card, idx) => {
            const stickyTop = 100 + idx * 24;

            return (
              <div
                key={card.number}
                style={{ top: `${stickyTop}px` }}
                className="sticky z-20 w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#fbf9f4] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 border border-[#ded6c7] shadow-[0_20px_50px_-10px_rgba(10,19,51,0.08)] overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Typography & Story */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-3xl sm:text-4xl text-[#0A1333]/25">
                          {card.number}
                        </span>
                        <span className="font-mono text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#ece8df] text-[#0A1333]">
                          {card.pillarTag}
                        </span>
                      </div>

                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#1CA3BB] block mb-1">
                          {card.brandContext}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-[32px] text-[#0A1333] tracking-tight leading-[1.15]">
                          {card.title}
                        </h3>
                      </div>

                      <p className="text-[13px] sm:text-[15px] text-[#0A1333]/80 leading-relaxed">
                        {card.summary}
                      </p>

                      {/* Highlight Pill */}
                      <div className="p-3 rounded-2xl bg-[#f6f3eb] border border-[#ded6c7]/70 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-[11px] font-medium text-[#0A1333]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1CA3BB] shrink-0" />
                          <span>{card.highlight}</span>
                        </div>
                        {card.highlightUrl.startsWith("http") && (
                          <a
                            href={card.highlightUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#0A1333] hover:text-[#1CA3BB] transition-colors shrink-0"
                          >
                            <span>Visit Brand</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>

                      {/* Tags & Action Button */}
                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-[#ded6c7]/60">
                        <div className="flex flex-wrap gap-1.5">
                          {card.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ece8df] text-[#0A1333]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href="#the-collective"
                          className="wpp-btn-split pl-4 pr-1.5 py-1.5 group cursor-pointer text-[11px]"
                        >
                          <span className="font-semibold">Explore Division</span>
                          <span className="btn-icon-circle w-6 h-6">
                            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Imagery Container */}
                    <div className="lg:col-span-5 relative flex items-center justify-center">
                      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[24px] overflow-hidden border border-[#ded6c7] shadow-inner group">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1333]/70 via-transparent to-transparent opacity-70" />

                        {/* Floating Micro Badge */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[#fbf9f4] text-[11px] font-mono backdrop-blur-md bg-[#0A1333]/60 px-3.5 py-2 rounded-full border border-white/20">
                          <span>CYBERSHIELD COLLECTIVE</span>
                          <span className="text-[#1CA3BB] font-bold">OPERATIONAL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
