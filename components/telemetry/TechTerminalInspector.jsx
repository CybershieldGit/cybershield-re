"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Shield, Cpu, Activity, Database } from "lucide-react";

export default function TechTerminalInspector() {
  const [activeCommand, setActiveCommand] = useState("architecture");
  const [copied, setCopied] = useState(false);

  const commandData = {
    architecture: {
      cmd: "cybershield architecture --inspect",
      output: [
        "== FULL-STACK PRODUCTION TOPOLOGY ==",
        "• Edge Layer: Next.js Edge Runtime + Cloudflare Anycast (< 20ms TTFB worldwide)",
        "• Frontend: React Server Components, Tailwind CSS & Framer Motion",
        "• API & Compute: Node.js & Python FastAPI microservices with REST / GraphQL",
        "• Data Persistence: PostgreSQL (Primary Relational) + Redis (In-Memory Caching)",
        "• AI Orchestration: Modern LLM pipelines & agent workflows for client portals",
        "• Zero-Trust Policy: End-to-end TLS 1.3 encryption, strict CSP & automated audits",
      ],
    },
    benchmarks: {
      cmd: "cybershield benchmarks --production-run",
      output: [
        "== VERIFIED PRODUCTION LATENCIES & BENCHMARKS ==",
        "• Core Web Vitals:             98/100 Google Lighthouse (LCP < 0.9s, FID < 10ms)",
        "• D2C Storefront Checkout:     P50: 18ms | P95: 42ms | P99: 78ms",
        "• Healthcare Consultation API: P50: 24ms | P95: 52ms | P99: 89ms",
        "• Edge Cache Hit Ratio:        99.4% served from regional edge POPs",
        "• Production Availability:     99.9% verified system uptime",
      ],
    },
    runbooks: {
      cmd: "cybershield runbooks --principles",
      output: [
        "== PRODUCTION RUNBOOK CODES ==",
        "[01] Boring First: Default to battle-tested primitives over ephemeral hype frameworks.",
        "[02] Sub-Second Speed: Fast initial loads, optimized bundles, and responsive ergonomics.",
        "[03] Zero Outsourcing: 100% in-house engineering and direct client collaboration.",
        "[04] Security by Design: Sanitized inputs, strict data encryption, and continuous audits.",
      ],
    },
  };

  const current = commandData[activeCommand];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.output.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-forest border border-white/15 rounded-2xl overflow-hidden shadow-feature text-white font-mono text-xs">
      {/* Terminal Titlebar */}
      <div className="bg-forest-dark px-4 sm:px-6 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-white/60 ml-2 text-[11px]">cybershield-core-node ~ zsh</span>
        </div>

        {/* Command Switcher Buttons */}
        <div className="flex items-center gap-1">
          {["architecture", "benchmarks", "runbooks"].map((key) => (
            <button
              key={key}
              onClick={() => setActiveCommand(key)}
              className={`px-2.5 py-1 rounded text-[11px] uppercase tracking-wider transition-colors ${
                activeCommand === key
                  ? "bg-sage-light text-forest font-bold"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {key}
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="ml-2 p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title="Copy output"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-sage-light" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 bg-forest-dark/95 space-y-3 min-h-[220px]">
        <div className="flex items-center gap-2 text-sage-light font-semibold">
          <span className="text-white/50">$</span>
          <span>{current.cmd}</span>
          <span className="w-2 h-4 bg-sage-light inline-block animate-pulse" />
        </div>

        <div className="space-y-1 text-text-inverse-body/90 leading-relaxed pt-1">
          {current.output.map((line, idx) => (
            <div
              key={idx}
              className={`${
                line.startsWith("==")
                  ? "text-sage-light font-bold pt-1"
                  : line.startsWith("•")
                  ? "text-white/90 pl-2"
                  : "text-text-inverse-body/80 pl-2"
              }`}
            >
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
