"use client";

import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/siteData";
import TiltCard from "@/components/motion/TiltCard";
import { ArrowRight, Clock, Award, ShieldCheck, ArrowUpRight } from "lucide-react";

export function CaseStudyCard({ study }) {
  return (
    <TiltCard tiltIntensity={6} glowColor="rgba(197, 222, 185, 0.45)" className="h-full">
      <div className="card-linen p-6 sm:p-8 flex flex-col justify-between group h-full bg-surface-light hover:border-forest/40 transition-all duration-300">
        <div className="space-y-4">
          {/* Top Header */}
          <div className="flex items-center justify-between border-b border-border-subtle/40 pb-3">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-forest">
                {study.caseNumber}
              </span>
              <span className="text-border-subtle">·</span>
              <span className="text-xs font-semibold text-text-muted">
                {study.industry}
              </span>
            </div>
            <span className="font-mono text-xs text-sage-stroke font-semibold">
              {study.year}
            </span>
          </div>

          {/* Client & Title */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-text-muted">
              {study.client}
            </span>
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-forest group-hover:text-forest-hover transition-colors">
              {study.title}
            </h3>
            <p className="text-xs sm:text-sm text-text-body/90 leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* Key Metrics Highlight */}
          <div className="bg-surface-warm rounded-xl p-3.5 border border-border-subtle space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-muted flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-forest" />
                Duration:
              </span>
              <span className="font-mono font-semibold text-forest">
                {study.duration}
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-muted flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-forest" />
                Verified Outcome:
              </span>
              <span className="font-semibold text-forest text-right">
                {study.outcome}
              </span>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-4 border-t border-border-subtle/30">
          <Link
            href={`/work#${study.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-forest-hover transition-colors"
          >
            <span>Read the study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}

export default function WorkSection() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-canvas-base relative">
      <div className="container-anchor">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-forest" />
              <span className="mono-badge text-forest bg-surface-light border-border-subtle text-[11px]">
                SELECTED CASE STUDIES
              </span>
            </div>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-forest tracking-tight">
              Systems in <br />
              <span className="italic underline decoration-sage-stroke decoration-2 underline-offset-8">
                production
              </span>
              .
            </h2>
            <div className="section-underline" />
            <p className="text-sm sm:text-base text-text-body leading-relaxed pt-2">
              A representative sample of platforms currently operated by CyberShield and its partners. Names are shared where our clients have permitted.
            </p>
          </div>

          <div>
            <Link href="/work" className="btn-secondary !text-xs whitespace-nowrap">
              <span>See all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 4 Case Studies Grid with TiltCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {caseStudiesData.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>

        {/* Confidentiality Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-surface-light border border-border-card text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-surface-warm flex items-center justify-center text-forest shrink-0 border border-border-subtle">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-base text-forest">
                Much of our work is private.
              </h4>
              <p className="text-xs sm:text-sm text-text-body">
                Additional case material and architecture blueprints are shared under NDA with prospective enterprise partners.
              </p>
            </div>
          </div>
          <Link href="/contact" className="btn-primary !py-2.5 !text-xs whitespace-nowrap">
            Request NDA Briefing
          </Link>
        </div>
      </div>
    </section>
  );
}
