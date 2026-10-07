"use client";

import React from "react";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";

export default function WppMarqueeStrip() {
  return (
    <div className="py-6 bg-[#f6f3eb] border-y border-[#ded6c7] overflow-hidden relative z-20 transform-gpu">
      <InfiniteMarquee
        speed={24}
        itemClassName="px-4 py-2 rounded-full bg-[#fbf9f4] border border-[#ded6c7] text-xs font-mono font-bold text-[#0A1333] shadow-[0_4px_14px_rgba(10,19,51,0.05)] mx-2.5 inline-flex items-center gap-2 transition-transform hover:scale-105"
        items={[
          "✦ CYBERSHIELD (ENTERPRISE AI & ML SYSTEMS)",
          "✦ PHONOTELL (IVR & VOICE AI AGENTS)",
          "✦ CONVERRO (ENTERPRISE WORKFLOW CRM)",
          "✦ SENDERBOT (WHATSAPP BUSINESS API AUTOMATION)",
          "✦ ADLYNGO (DIGITAL MARKETING, UGC & ADS)",
          "✦ IDS (LIVE ONLINE & OFFLINE TECH COHORTS)",
          "✦ SKILLGROW (ON-DEMAND RECORDED MASTERCLASSES)",
          "✦ 99.9% ENTERPRISE SLA TELEMETRY",
          "✦ 6 OPERATING DIVISIONS · ZERO SILOS",
        ]}
      />
    </div>
  );
}
