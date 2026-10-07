"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystemVentures } from "@/data/siteData";
import { ArrowUpRight, ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

export default function InteractiveEcosystemList() {
  const [activeVenture, setActiveVenture] = useState(0);

  return (
    <section id="ecosystem" className="py-20 sm:py-24 bg-surface-light border-y border-border-card relative">
      <div className="container-anchor space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
              <span className="mono-badge text-navy bg-surface-warm border-border-subtle text-[11px]">
                PORTFOLIO ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              SEVEN VENTURES. <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                ONE CULTURE
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              Built, owned, and operated in-house. Sharing infrastructure, design rigor, and zero compromise on craft.
            </p>
          </div>

          <div>
            <Link
              href="/ecosystem"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Explore portfolio architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* FULL-WIDTH EDITORIAL HOVER MATRIX */}
        <div className="border-t border-border-subtle/80 divide-y divide-border-subtle/60">
          {ecosystemVentures.map((venture, idx) => {
            const isSelected = activeVenture === idx;
            const isExternal = venture.link.startsWith("http");

            return (
              <div
                key={venture.id}
                onMouseEnter={() => setActiveVenture(idx)}
                className={`group transition-all duration-300 ${
                  isSelected ? "bg-surface-warm/90" : "hover:bg-surface-warm/40"
                }`}
              >
                {/* Main Row Bar */}
                <div
                  onClick={() => setActiveVenture(idx)}
                  className="py-5 sm:py-7 px-4 sm:px-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-bold text-cyan group-hover:text-navy transition-colors">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-navy tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {venture.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6 pl-8 md:pl-0">
                    <span className="mono-badge bg-white text-navy border-border-subtle text-[10px] hidden sm:inline-block">
                      {venture.category}
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-navy font-semibold">
                      <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                      <span>{venture.status}</span>
                    </div>
                    <div
                      className={`w-7 h-7 rounded-full border border-border-subtle flex items-center justify-center transition-transform duration-300 ${
                        isSelected ? "rotate-90 bg-navy text-surface-light" : "text-navy bg-white"
                      }`}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-7 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-6 border-t border-border-subtle/40">
                        <div className="lg:col-span-8 space-y-3">
                          <p className="font-display font-medium text-base text-navy">
                            {venture.tagline}
                          </p>
                          <p className="text-xs sm:text-sm text-text-body leading-relaxed max-w-3xl">
                            {venture.description}
                          </p>

                          {/* Highlights */}
                          <div className="pt-2 flex flex-wrap gap-2">
                            {venture.highlights.map((h, hIdx) => (
                              <span
                                key={hIdx}
                                className="font-mono text-xs px-3 py-1 rounded-md bg-white border border-border-subtle text-navy flex items-center gap-1.5 shadow-xs font-semibold"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col justify-between items-start lg:items-end gap-4">
                          <span className="font-mono text-[11px] text-text-muted">
                            OPERATED INDEFINITELY
                          </span>

                          {isExternal ? (
                            <a
                              href={venture.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary !py-2.5 !px-5 text-xs"
                            >
                              <span>{venture.externalLabel || "Visit Venture"}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 text-cyan" />
                            </a>
                          ) : (
                            <Link
                              href={venture.link}
                              className="btn-primary !py-2.5 !px-5 text-xs"
                            >
                              <span>Learn More</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Studio Operating Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface-warm border border-border-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-base text-navy flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan" />
              <span>Unified Engineering Backbone</span>
            </h4>
            <p className="text-xs text-text-body">
              All seven ventures run on our unified distributed infrastructure, continuous deployment pipelines, and shared telemetry protocols.
            </p>
          </div>
          <Link href="/ecosystem" className="btn-primary !py-2.5 !px-5 text-xs whitespace-nowrap">
            <span>View Architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
