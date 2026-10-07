"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight, ArrowRight, Mail, Shield, Sparkles } from "lucide-react";

export default function CTASection() {
  const { openConsultation } = useModal();

  return (
    <section className="py-20 sm:py-24 bg-canvas-base relative">
      <div className="container-anchor">
        <div className="bg-forest text-surface-light rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-feature border border-forest-hover">
          {/* Ambient Botanical Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sage-light/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sage-light animate-pulse-glow" />
              <span className="mono-badge text-sage-light border-sage-light/30 text-[10px]">
                START A CONVERSATION
              </span>
            </div>

            <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Let&apos;s build something{" "}
              <span className="italic underline decoration-sage-stroke decoration-2 underline-offset-8">
                worth operating
              </span>
              .
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-text-inverse-body/90 leading-relaxed max-w-2xl">
              Whether you are an enterprise modernizing mission-critical ledgers, an institution seeking vertical AI deployment, or a founder looking for a long-horizon venture partner.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => openConsultation("CTA Section")}
                className="btn-dark-primary !py-3.5 !px-7 text-xs"
              >
                <span>Book a Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className="btn-dark-secondary !py-3.5 !px-7 text-xs text-center"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-left">
              <div>
                <span className="text-[10px] text-sage-light/70 uppercase block mb-1 font-semibold tracking-wider">
                  Official Email & Support
                </span>
                <a
                  href={`mailto:${siteConfig.contactEmails.support}`}
                  className="text-white hover:text-sage-light transition-colors truncate block font-bold text-sm"
                >
                  {siteConfig.contactEmails.support}
                </a>
              </div>
              <div>
                <span className="text-[10px] text-sage-light/70 uppercase block mb-1 font-semibold tracking-wider">
                  Studio Headquarters
                </span>
                <span className="text-white/90 block font-sans text-xs">
                  {siteConfig.headquarters.address}
                </span>
              </div>
              <div>
                <span className="text-[10px] text-sage-light/70 uppercase block mb-1 font-semibold tracking-wider">
                  Official Domain
                </span>
                <span className="text-sage-light block font-bold">
                  {siteConfig.domain}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
