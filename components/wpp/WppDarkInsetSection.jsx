"use client";

import React from "react";
import TechTerminalInspector from "@/components/telemetry/TechTerminalInspector";
import { ArrowUpRight, Cpu, ShieldCheck, Zap, Activity, Bot } from "lucide-react";

export default function WppDarkInsetSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#ece8df] w-full" id="technology">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Deep Tech Inset Card */}
        <div className="bg-[#0A1333] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 text-white border border-[#1CA3BB]/25 shadow-[0_30px_70px_-20px_rgba(10,19,51,0.35)] relative overflow-hidden space-y-12">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1CA3BB]/15 blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#1CA3BB]/10 blur-[100px] pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#1CA3BB]/30 text-xs font-mono text-[#1CA3BB]">
                <span className="w-2 h-2 rounded-full bg-[#1CA3BB] animate-pulse" />
                <span>ENTERPRISE ARCHITECTURE & TELEMETRY</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                Production rigor. <br />
                <span className="text-[#1CA3BB] italic font-normal">
                  Zero black boxes
                </span>
                .
              </h2>
              <p className="text-sm sm:text-base text-[#e5eee4]/80 leading-relaxed max-w-xl">
                Inspect our real full-stack architecture, sub-second API benchmarks, and engineering runbooks powering the CyberShield parent backbone and all 6 sister brands.
              </p>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-[#1CA3BB]/25 flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-[#1CA3BB]" />
                <div className="text-xs">
                  <span className="text-white/50 block text-[10px] font-mono">ENTERPRISE SLA</span>
                  <span className="font-bold font-mono text-white">99.9% Uptime</span>
                </div>
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-white/5 border border-[#1CA3BB]/25 flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-[#1CA3BB]" />
                <div className="text-xs">
                  <span className="text-white/50 block text-[10px] font-mono">GLOBAL TTFB</span>
                  <span className="font-bold font-mono text-white">&lt; 20ms Edge</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Architecture Terminal Inspector */}
          <div className="relative z-10 pt-2">
            <TechTerminalInspector />
          </div>

          {/* 4 Architectural Foundations Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-white/10 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1CA3BB]">
                <Cpu className="w-4 h-4" />
                <h4 className="font-display font-bold text-sm text-white">Next.js Edge Runtime</h4>
              </div>
              <p className="text-xs text-[#e5eee4]/70 leading-relaxed">
                Rendered across global edge nodes for sub-second page loads and instantaneous state persistence.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1CA3BB]">
                <ShieldCheck className="w-4 h-4" />
                <h4 className="font-display font-bold text-sm text-white">Permanent Ownership</h4>
              </div>
              <p className="text-xs text-[#e5eee4]/70 leading-relaxed">
                100% of codebase, design tokens, and APIs crafted and maintained in-house without third-party vendor lock.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1CA3BB]">
                <Zap className="w-4 h-4" />
                <h4 className="font-display font-bold text-sm text-white">Omnichannel APIs</h4>
              </div>
              <p className="text-xs text-[#e5eee4]/70 leading-relaxed">
                WhatsApp automation and carrier voice telemetry engineered for regulated high-throughput operations.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#1CA3BB]">
                <Bot className="w-4 h-4" />
                <h4 className="font-display font-bold text-sm text-white">Applied GenAI Systems</h4>
              </div>
              <p className="text-xs text-[#e5eee4]/70 leading-relaxed">
                Autonomous agent orchestration with strict deterministic guardrails, RAG, and private data fine-tuning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
