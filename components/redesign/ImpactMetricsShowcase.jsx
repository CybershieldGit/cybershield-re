"use client";

import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/siteData";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, ArrowUpRight, Clock, Award, ShieldCheck, Globe } from "lucide-react";

export default function ImpactMetricsShowcase() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-canvas-base relative">
      <div className="container-anchor space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan" />
              <span className="mono-badge text-navy bg-surface-light border-border-subtle text-[11px]">
                FEATURED CLIENT WORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-navy tracking-tight leading-[0.95]">
              PROJECTS IN <br />
              <span className="italic font-normal text-navy underline decoration-cyan decoration-2 underline-offset-8">
                PRODUCTION
              </span>
              .
            </h2>
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              Selected client platforms, custom e-commerce storefronts, and digital healthcare solutions engineered by CyberShield.
            </p>
          </div>

          <div>
            <Link
              href="/work"
              className="btn-secondary !py-3.5 !px-6 text-xs whitespace-nowrap"
            >
              <span>Explore all client work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Real Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {caseStudiesData.map((study) => (
            <TiltCard key={study.id} tiltIntensity={6} glowColor="rgba(27, 163, 190, 0.35)" className="h-full">
              <div className="card-linen p-8 sm:p-10 flex flex-col justify-between h-full group bg-surface-light hover:border-cyan/50 hover:shadow-[0_0_24px_rgba(27,163,190,0.15)] transition-all duration-300">
                <div className="space-y-6">
                  {/* Top Meta */}
                  <div className="flex items-center justify-between border-b border-border-subtle/50 pb-3 text-xs font-mono">
                    <span className="font-bold text-navy">{study.caseNumber} · {study.client}</span>
                    <span className="text-text-muted">{study.industry} · {study.year}</span>
                  </div>

                  {/* Headline Feature Metric */}
                  <div className="space-y-1">
                    <span className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy tracking-tight block">
                      {study.metrics[0].value}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan font-bold block">
                      {study.metrics[0].label}
                    </span>
                  </div>

                  {/* Title & Overview */}
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-navy group-hover:text-cyan transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                      {study.overview}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-border-subtle/40 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Globe className="w-3.5 h-3.5 text-cyan" />
                    <span>Status: {study.duration}</span>
                  </div>

                  {study.url && study.url.startsWith("http") ? (
                    <a
                      href={study.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan hover:text-navy transition-colors group/link"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={`/work#${study.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy group-hover:text-cyan group-hover:underline"
                    >
                      <span>Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Confidentiality Callout */}
        <div className="p-8 rounded-2xl bg-navy text-surface-light border border-navy-hover flex flex-col md:flex-row items-center justify-between gap-6 shadow-feature">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan" />
              <h4 className="font-display font-bold text-xl text-white">
                Much of our work is private.
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-text-inverse-body/80 max-w-2xl">
              Additional architecture blueprints and proprietary system logs are shared under strict NDA with enterprise partners.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-dark-primary !py-3 !px-6 text-xs whitespace-nowrap"
          >
            Request NDA Briefing
          </Link>
        </div>
      </div>
    </section>
  );
}
