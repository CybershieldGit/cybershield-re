"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystemVentures } from "@/data/siteData";
import {
  Activity,
  Play,
  CheckCircle2,
  Cpu,
  Radio,
  Send,
  Sparkles,
  Terminal,
  Zap,
  PhoneCall,
  Layers,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

export default function VentureInteractiveDemo() {
  const [activeTab, setActiveTab] = useState("converro");

  // Converro state
  const [signalScore, setSignalScore] = useState(88);
  const [analyzingLead, setAnalyzingLead] = useState(false);

  // Adlyngo state
  const [rtbBids, setRtbBids] = useState([
    { id: "BID-891", cpm: "$4.12", latency: "6.2ms", status: "WON", geo: "US-EAST" },
    { id: "BID-892", cpm: "$3.85", latency: "5.8ms", status: "WON", geo: "EU-WEST" },
    { id: "BID-893", cpm: "$2.90", latency: "8.1ms", status: "PASSED", geo: "AP-SOUTH" },
  ]);

  // SenderBot state
  const [dispatchStatus, setDispatchStatus] = useState("idle");

  // PhonoTel state
  const [audioActive, setAudioActive] = useState(true);

  // Future AI state
  const [agentStep, setAgentStep] = useState(2);

  // Periodic simulated live stream for RTB
  useEffect(() => {
    if (activeTab !== "adlyngo") return;
    const interval = setInterval(() => {
      const geos = ["US-EAST", "EU-WEST", "AP-SOUTH", "ME-CENTRAL", "SG-NORTH"];
      const newBid = {
        id: `BID-${Math.floor(100 + Math.random() * 900)}`,
        cpm: `$${(2.5 + Math.random() * 3.5).toFixed(2)}`,
        latency: `${(4.5 + Math.random() * 5).toFixed(1)}ms`,
        status: Math.random() > 0.3 ? "WON" : "PASSED",
        geo: geos[Math.floor(Math.random() * geos.length)],
      };
      setRtbBids((prev) => [newBid, ...prev.slice(0, 3)]);
    }, 2400);
    return () => clearInterval(interval);
  }, [activeTab]);

  const runConverroAnalysis = () => {
    setAnalyzingLead(true);
    setTimeout(() => {
      setSignalScore(Math.floor(82 + Math.random() * 16));
      setAnalyzingLead(false);
    }, 700);
  };

  const runSenderBotTest = () => {
    setDispatchStatus("dispatching");
    setTimeout(() => {
      setDispatchStatus("delivered");
      setTimeout(() => setDispatchStatus("idle"), 4000);
    }, 900);
  };

  return (
    <div className="card-linen border border-border-card rounded-3xl overflow-hidden shadow-elevated bg-surface-light">
      {/* Top Console Navigation Bar */}
      <div className="bg-forest px-4 sm:px-6 py-3.5 text-white flex flex-wrap items-center justify-between gap-3 border-b border-forest-hover">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-sage-light animate-pulse-glow" />
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-sage-light">
            LIVE ECOSYSTEM TELEMETRY CONSOLE
          </span>
        </div>

        {/* Venture Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-1 bg-forest-dark/80 p-1 rounded-xl border border-white/10">
          {ecosystemVentures.map((v) => (
            <button
              key={v.id}
              onClick={() => setActiveTab(v.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${
                activeTab === v.id
                  ? "bg-sage-light text-forest font-semibold shadow-xs"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {v.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Simulation Display Area */}
      <div className="p-6 sm:p-8 bg-[#fbf9f4] min-h-[340px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {/* 1. CONVERRO CRM SIMULATION */}
          {activeTab === "converro" && (
            <motion.div
              key="converro"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    RELATIONSHIP INTELLIGENCE ENGINE
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    Converro Signal-Graph Lead Telemetry
                  </h4>
                </div>
                <button
                  onClick={runConverroAnalysis}
                  disabled={analyzingLead}
                  className="btn-primary !py-2 !px-4 !text-xs self-start sm:self-auto"
                >
                  <Zap className={`w-3.5 h-3.5 ${analyzingLead ? "animate-spin" : ""}`} />
                  <span>{analyzingLead ? "Calculating Graph..." : "Recalculate Signal Graph"}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1">
                  <span className="text-[11px] font-mono text-text-muted uppercase block">
                    Relationship Propensity
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-forest">
                      {signalScore}%
                    </span>
                    <span className="text-xs font-semibold text-sage-stroke flex items-center">
                      <TrendingUp className="w-3 h-3 mr-0.5" /> High Affinity
                    </span>
                  </div>
                  <div className="w-full bg-white rounded-full h-1.5 mt-2 overflow-hidden border border-border-subtle/40">
                    <div
                      className="bg-forest h-full rounded-full transition-all duration-700"
                      style={{ width: `${signalScore}%` }}
                    />
                  </div>
                </div>

                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1">
                  <span className="text-[11px] font-mono text-text-muted uppercase block">
                    Pipeline Signal Nodes
                  </span>
                  <span className="font-mono text-xl font-bold text-forest block">
                    14 Touchpoints Tracked
                  </span>
                  <span className="text-[11px] text-text-body block">
                    Native Gmail + Calendar event graph synced
                  </span>
                </div>

                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1">
                  <span className="text-[11px] font-mono text-text-muted uppercase block">
                    Security Standard
                  </span>
                  <div className="flex items-center gap-1.5 text-forest font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 text-forest" />
                    <span>SOC 2 Type II Certified</span>
                  </div>
                  <span className="text-[11px] text-text-body block">
                    Zero raw data retention in training sets
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. ADLYNGO RTB SIMULATION */}
          {activeTab === "adlyngo" && (
            <motion.div
              key="adlyngo"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    PROGRAMMATIC BID STREAM
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    Sub-10ms Real-Time Auction Engine
                  </h4>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-forest">
                  <span className="w-2 h-2 rounded-full bg-forest animate-ping" />
                  <span>STREAMING</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                {rtbBids.map((bid, idx) => (
                  <div
                    key={bid.id}
                    className="bg-surface-warm p-3.5 rounded-xl border border-border-subtle space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-forest">{bid.id}</span>
                      <span
                        className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                          bid.status === "WON"
                            ? "bg-sage-light text-forest"
                            : "bg-border-subtle/40 text-text-muted"
                        }`}
                      >
                        {bid.status}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between text-xs pt-1">
                      <span className="text-text-muted">Cleared CPM:</span>
                      <span className="font-mono font-semibold text-forest">{bid.cpm}</span>
                    </div>
                    <div className="flex items-baseline justify-between text-[11px]">
                      <span className="text-text-muted">Latency:</span>
                      <span className="font-mono font-semibold text-sage-stroke">{bid.latency}</span>
                    </div>
                    <div className="text-[10px] font-mono text-text-muted pt-1 border-t border-border-subtle/30">
                      Edge: {bid.geo}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. SENDERBOT SIMULATION */}
          {activeTab === "senderbot" && (
            <motion.div
              key="senderbot"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    MESSAGING INFRASTRUCTURE API
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    99.999% SLA High-Deliverability Dispatcher
                  </h4>
                </div>
                <button
                  onClick={runSenderBotTest}
                  disabled={dispatchStatus === "dispatching"}
                  className="btn-primary !py-2 !px-4 !text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Test API Payload</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Code payload mock */}
                <div className="bg-forest-dark text-white p-4 rounded-xl font-mono text-xs space-y-1 overflow-x-auto border border-white/10">
                  <div className="text-sage-light">// POST https://api.senderbot.io/v1/dispatch</div>
                  <div>&#123;</div>
                  <div className="pl-4">&quot;channel&quot;: &quot;enterprise_sms_fallback&quot;,</div>
                  <div className="pl-4">&quot;recipient&quot;: &quot;+91 98801 XXXXX&quot;,</div>
                  <div className="pl-4">&quot;priority&quot;: &quot;transactional_p0&quot;,</div>
                  <div className="pl-4">&quot;audit_signature&quot;: &quot;sha256:7f8a9e...&quot;</div>
                  <div>&#125;</div>
                </div>

                {/* Response status */}
                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-text-muted uppercase block">
                      Dispatch Pipeline Status
                    </span>
                    {dispatchStatus === "idle" && (
                      <p className="text-xs text-text-body">
                        Ready for instant sub-80ms enterprise routing across multi-carrier backbones.
                      </p>
                    )}
                    {dispatchStatus === "dispatching" && (
                      <div className="flex items-center gap-2 text-forest font-mono text-xs">
                        <Activity className="w-4 h-4 animate-spin text-forest" />
                        <span>Routing through low-latency carrier gateway...</span>
                      </div>
                    )}
                    {dispatchStatus === "delivered" && (
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-1.5 text-forest font-semibold text-xs">
                          <CheckCircle2 className="w-4 h-4 text-forest" />
                          <span>Delivered (HTTP 201 Created — 48ms)</span>
                        </div>
                        <p className="text-[11px] text-text-body font-mono">
                          Trace ID: trc_99812_delivered_carrier_ack
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="pt-3 border-t border-border-subtle/50 text-[11px] font-mono text-text-muted flex justify-between">
                    <span>SLA: 99.999% Guaranteed</span>
                    <span>Multi-Region Routing</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. PHONOTEL SIMULATION */}
          {activeTab === "phonotel" && (
            <motion.div
              key="phonotel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    PROGRAMMABLE VOICE & SIP
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    Real-Time Telephony & Audio Transcription
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                  <span className="font-mono text-xs text-forest">STREAM ACTIVE</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Waveform visualizer simulation */}
                <div className="bg-forest-card text-white p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-sage-light mb-3 block">
                    Zero-Latency SIP Stream (Opus 48kHz)
                  </span>
                  <div className="flex items-center justify-center gap-1.5 h-16">
                    {[40, 75, 90, 45, 80, 100, 60, 85, 30, 95, 70, 50, 85, 60, 40].map((h, i) => (
                      <motion.span
                        key={i}
                        animate={{ height: [h * 0.4, h * 0.9, h * 0.3] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8 + (i % 5) * 0.15,
                          ease: "easeInOut",
                        }}
                        className="w-1.5 bg-sage-light rounded-full"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-between font-mono text-[10px] text-text-inverse-body/70 mt-3 pt-2 border-t border-white/10">
                    <span>Jitter: &lt; 2ms</span>
                    <span>Packet Loss: 0.00%</span>
                  </div>
                </div>

                {/* Real-time transcription ticker */}
                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-text-muted uppercase block">
                      Live ASR Transcript Feed
                    </span>
                    <p className="text-xs text-text-body italic bg-white p-3 rounded-lg border border-border-subtle/50">
                      &ldquo;...verifying customer authorization signature on account 9402... routing call stream to fraud engine...&rdquo;
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border-subtle/50 text-[11px] font-mono text-text-muted flex justify-between">
                    <span>Model: Phono-Whisper-V3</span>
                    <span>Latency: 110ms</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* 5. FUTURE AI VENTURES SIMULATION */}
          {activeTab === "future-ai" && (
            <motion.div
              key="future-ai"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    VERTICAL AI INCUBATION
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    Multi-Agent Deterministic Decision Graph
                  </h4>
                </div>
                <span className="font-mono text-xs text-forest">AUTONOMOUS SWARM</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-forest">Node 01</span>
                    <span className="text-[10px] font-mono bg-sage-light text-forest px-1.5 py-0.5 rounded font-semibold">PASS</span>
                  </div>
                  <h5 className="font-display font-semibold text-sm text-forest">Domain Tokenizer</h5>
                  <p className="text-[11px] text-text-body">Fine-tuned clinical & financial grammar validation.</p>
                </div>

                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-forest">Node 02</span>
                    <span className="text-[10px] font-mono bg-sage-light text-forest px-1.5 py-0.5 rounded font-semibold">ACTIVE</span>
                  </div>
                  <h5 className="font-display font-semibold text-sm text-forest">Policy Guardrails</h5>
                  <p className="text-[11px] text-text-body">Deterministic rule verification preventing hallucinations.</p>
                </div>

                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-forest">Node 03</span>
                    <span className="text-[10px] font-mono bg-surface-light border border-border-subtle text-text-muted px-1.5 py-0.5 rounded">STANDBY</span>
                  </div>
                  <h5 className="font-display font-semibold text-sm text-forest">Execution Gateway</h5>
                  <p className="text-[11px] text-text-body">Secure ledger write with cryptographic audit trail.</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* 6. IDS & SKILLGROW SIMULATION */}
          {(activeTab === "ids" || activeTab === "skillgrow") && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle/50">
                <div>
                  <span className="mono-badge bg-surface-warm text-forest border-border-subtle text-[10px]">
                    APPLIED CRAFT & WORKFORCE PIPELINES
                  </span>
                  <h4 className="font-display font-semibold text-xl text-forest mt-1">
                    Live Practitioner Labs & Skill Evaluation Graphs
                  </h4>
                </div>
                <span className="font-mono text-xs text-forest">COHORTS ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-2">
                  <h5 className="font-display font-semibold text-base text-forest">
                    Institute of Digital Studies (IDS)
                  </h5>
                  <p className="text-xs text-text-body leading-relaxed">
                    Engineering, product architecture, and design systems taught by active engineers shipping production platforms.
                  </p>
                  <span className="text-[11px] font-mono text-forest font-semibold block pt-1">
                    Status: Greater Noida Campus + Global Remote Labs
                  </span>
                </div>

                <div className="bg-surface-warm p-4 rounded-xl border border-border-subtle space-y-2">
                  <h5 className="font-display font-semibold text-base text-forest">
                    SkillGrow Platform
                  </h5>
                  <p className="text-xs text-text-body leading-relaxed">
                    Adaptive technical skill benchmarking and continuous enterprise software engineering upskilling graphs.
                  </p>
                  <span className="text-[11px] font-mono text-forest font-semibold block pt-1">
                    Status: Integrated across corporate engineering teams
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Console Status Footer */}
        <div className="pt-6 mt-6 border-t border-border-subtle/50 flex flex-wrap items-center justify-between text-xs text-text-muted gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="font-mono">Global Health: 100% Operational Across All 7 Ventures</span>
          </div>
          <span className="font-mono text-[11px]">CYBERSHIELD RUNTIME V4.8</span>
        </div>
      </div>
    </div>
  );
}
