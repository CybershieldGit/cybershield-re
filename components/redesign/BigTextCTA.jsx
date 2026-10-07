"use client";

import React from "react";
import Link from "next/link";
import { useModal } from "@/context/ModalContext";
import { siteConfig } from "@/data/siteData";
import MagneticButton from "@/components/motion/MagneticButton";
import InfiniteMarquee from "@/components/motion/InfiniteMarquee";
import { ArrowUpRight, ArrowRight, Shield, Mail } from "lucide-react";

export default function BigTextCTA() {
  const { openConsultation } = useModal();

  return (
    <section className="py-20 sm:py-28 bg-navy-dark text-surface-light relative overflow-hidden">
      {/* Background Cyber Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/15 rounded-full blur-2xl pointer-events-none" />

      <div className="container-anchor relative z-10 space-y-10 text-center lg:text-left">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
            <span className="mono-badge text-cyan border-cyan/30 text-[10px] bg-navy-card">
              START A CONVERSATION
            </span>
          </div>

          {/* GIANT ARCHITECTURAL CTA STATEMENT */}
          <h2 className="font-display font-extrabold text-[clamp(2.5rem,5.6vw,5.5rem)] text-white tracking-tight leading-[0.95] select-none uppercase">
            LET&apos;S BUILD FOR <br />
            <span className="italic font-normal text-cyan underline decoration-cyan/50 decoration-2 underline-offset-8">
              THE NEXT DECADE
            </span>
            .
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-text-inverse-body/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-2">
            Every enquiry is read directly by our executive and engineering leadership. We reply within two working days.
          </p>
        </div>

        {/* Dual Magnetic Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <MagneticButton strength={20}>
            <button
              onClick={() => openConsultation("Big Text CTA")}
              className="btn-dark-primary !py-4 !px-8 text-xs shadow-elevated"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-navy-dark" />
            </button>
          </MagneticButton>

          <MagneticButton strength={15}>
            <Link
              href="/contact"
              className="btn-dark-secondary !py-4 !px-8 text-xs"
            >
              <span>Direct Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>
        </div>

        {/* Direct Contact Bar */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-left">
          <div>
            <span className="text-[10px] text-cyan/80 uppercase block mb-1 font-semibold tracking-wider">
              Official Email & Support
            </span>
            <a
              href={`mailto:${siteConfig.contactEmails.support}`}
              className="text-white hover:text-cyan transition-colors truncate block font-bold text-sm"
            >
              {siteConfig.contactEmails.support}
            </a>
          </div>
          <div>
            <span className="text-[10px] text-cyan/80 uppercase block mb-1 font-semibold tracking-wider">
              Studio Headquarters
            </span>
            <span className="text-white/90 block font-sans text-xs">
              {siteConfig.headquarters.address}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-cyan/80 uppercase block mb-1 font-semibold tracking-wider">
              Official Domain
            </span>
            <span className="text-cyan block font-bold">
              {siteConfig.domain}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
