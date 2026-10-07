"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const BRAND_CARDS = [
  {
    id: "adlyngo",
    name: "Adlyngo",
    headline: "Growth & Digital Marketing",
    description: "Performance marketing, content, UGC and digital growth for modern brands.",
    link: "https://www.adlyngo.com",
    artImage: "/images/brands/adlyngo-art.jpg",
    accent: "#FF4500",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF3B30]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#FF3B30] group-hover:bg-[#FF3B30] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" fill="none">
        <path d="M18 4L32 30H23L18 20L13 30H4L18 4Z" fill="url(#adlyngo-gradient)" />
        <path d="M18 20L22.5 29H13.5L18 20Z" fill="#FF8A65" />
        <defs>
          <linearGradient id="adlyngo-gradient" x1="4" y1="4" x2="32" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF3B30" />
            <stop offset="1" stopColor="#FF6B00" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "phonotell",
    name: "Phonotell",
    headline: "AI Communication Infrastructure",
    description: "AI voice agents and intelligent IVR systems for enterprises.",
    link: "https://www.phonotel.com",
    artImage: "/images/brands/phonotell-art.jpg",
    accent: "#6366F1",
    ctaTextClass: "text-[#6366F1] group-hover:text-[#4F46E5]",
    ctaCircleClass: "border border-purple-300 text-purple-600 bg-purple-50/60 group-hover:bg-[#6366F1] group-hover:border-[#6366F1] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" fill="none">
        <rect x="5" y="6" width="9" height="24" rx="4.5" fill="#3B82F6" />
        <path d="M14 6H23C27.5 6 31 9.5 31 14C31 18.5 27.5 22 23 22H14V6Z" fill="url(#phonotell-gradient)" />
        <defs>
          <linearGradient id="phonotell-gradient" x1="14" y1="6" x2="31" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "converro",
    name: "Converro",
    headline: "Enterprise CRM & Workflow",
    description: "A unified platform to manage customers, workflows and operations.",
    link: "https://www.converro.io",
    artImage: "/images/brands/converro-art.jpg",
    accent: "#10B981",
    ctaTextClass: "text-gray-900 group-hover:text-[#10B981]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" fill="none">
        <path
          d="M26 12C23 8.5 18 8.5 14.5 11.5C10 15 9.5 22 13.5 26.5C17.5 30.5 24 30.5 27.5 26.5L30.5 29.5C25 35 16 35 10 29.5C4 23.5 4.5 13.5 11 8.5C16.5 4 25 4 30 9.5L26 12Z"
          fill="url(#converro-gradient)"
        />
        <defs>
          <linearGradient id="converro-gradient" x1="6" y1="6" x2="30" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E699" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "ids",
    name: "iDS",
    headline: "Professional Technology Education",
    description: "Live, industry-focused learning in digital, data, marketing and more.",
    link: "https://idigitalstudies.com/",
    artImage: "/images/brands/ids-art.jpg",
    accent: "#FF3B30",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF3B30]",
    ctaCircleClass: "bg-[#FF3B30] text-white shadow-sm group-hover:bg-[#D32F2F]",
    renderLogo: () => (
      <div className="font-display font-black text-2xl tracking-tighter leading-none flex items-center">
        <span className="text-gray-900">i</span>
        <span className="text-gray-900">D</span>
        <span className="text-[#FF3B30]">S</span>
      </div>
    ),
  },
  {
    id: "senderbot",
    name: "Senderbot",
    headline: "WhatsApp Business Automation",
    description: "Automate conversations and workflows on WhatsApp.",
    link: "https://senderbot.io",
    artImage: "/images/brands/senderbot-art.jpg",
    accent: "#25D366",
    ctaTextClass: "text-gray-900 group-hover:text-[#25D366]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" fill="none">
        <path
          d="M26 8H15C11 8 8 11 8 15C8 19 11 21 15 22L21 23.5C25 24.5 28 26.5 28 30.5C28 34.5 25 37 21 37H10"
          stroke="url(#senderbot-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="senderbot-gradient" x1="8" y1="8" x2="28" y2="37" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00E676" />
            <stop offset="1" stopColor="#00C853" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "skillgrow",
    name: "Skillgrow",
    headline: "Accessible Digital Learning",
    description: "Affordable, recorded courses to build practical skills.",
    link: "/ecosystem#skillgrow",
    artImage: "/images/brands/skillgrow-art.jpg",
    accent: "#FF7A00",
    ctaTextClass: "text-gray-900 group-hover:text-[#FF7A00]",
    ctaCircleClass: "border border-gray-200 text-gray-700 bg-white group-hover:border-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white",
    renderLogo: () => (
      <svg viewBox="0 0 36 36" className="w-8 h-8 shrink-0" fill="none">
        <rect x="5" y="16" width="5.5" height="15" rx="2.75" fill="#FF7A00" />
        <rect x="12.5" y="11.5" width="5.5" height="19.5" rx="2.75" fill="#FF5252" />
        <rect x="20" y="7" width="5.5" height="24" rx="2.75" fill="#FF4081" />
        <rect x="27.5" y="3.5" width="5.5" height="27.5" rx="2.75" fill="#E040FB" />
      </svg>
    ),
  },
];

export default function WppBrandsMatrix() {
  return (
    <section className="py-24 sm:py-32 bg-[#ece8df] relative w-full border-t border-[#ded6c7]" id="the-collective">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 2xl:px-24 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fbf9f4] border border-[#ded6c7] text-xs font-mono font-bold text-[#0A1333]">
            <span className="w-2 h-2 rounded-full bg-[#1CA3BB] animate-pulse" />
            <span>THE CYBERSHIELD HOLDING COLLECTIVE</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-[#0A1333] tracking-tight leading-[1.08]">
            Six specialized brands. <br />
            <span className="font-normal italic">One unified architecture.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#0A1333]/80 leading-relaxed max-w-2xl">
            CyberShield serves as the enterprise parent company, powering a distributed network of standalone leaders in Conversational AI, Workflow CRM, WhatsApp APIs, Performance Media, and Technical Education.
          </p>
        </div>

        {/* 6 Specialized Brands Grid: High-Readability DOM Typography + Ultra-Crisp Art */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-5 w-full pt-2">
          {BRAND_CARDS.map((brand) => (
            <a
              key={brand.id}
              href={brand.link}
              target={brand.link.startsWith("http") ? "_blank" : "_self"}
              rel={brand.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="group bg-white rounded-3xl border border-gray-100/90 shadow-[0_4px_24px_rgba(10,19,51,0.05)] hover:shadow-[0_22px_50px_rgba(10,19,51,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
              aria-label={`${brand.name} - ${brand.headline}`}
            >
              {/* Top Typography & Details Section */}
              <div className="p-5 sm:p-6 pb-2 flex flex-col flex-1">
                {/* Brand Logo Emblem & Name */}
                <div className="flex items-center gap-2.5">
                  {brand.renderLogo()}
                  {brand.id !== "ids" && (
                    <span className="font-display font-bold text-lg text-gray-900 tracking-tight">
                      {brand.name}
                    </span>
                  )}
                </div>

                {/* Headline */}
                <h3 className="font-display font-bold text-[15px] sm:text-[16px] text-[#0A1333] tracking-tight leading-snug mt-4 min-h-[44px]">
                  {brand.headline}
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[12.5px] text-gray-500 leading-relaxed mt-2 min-h-[56px]">
                  {brand.description}
                </p>

                {/* Visit Site CTA Row */}
                <div className="flex items-center justify-between pt-4 pb-2 border-t border-gray-100/60 mt-auto">
                  <span className={`text-xs font-bold tracking-tight flex items-center gap-1.5 transition-colors ${brand.ctaTextClass}`}>
                    Visit Site <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${brand.ctaCircleClass}`}>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                  </span>
                </div>
              </div>

              {/* Bottom Visual Graphic: Crystal Clear 8K Studio Artwork */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden rounded-b-3xl mt-auto bg-gray-50">
                <Image
                  src={brand.artImage}
                  alt={`${brand.name} visual preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 17vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Parent Synergy Statement */}
        <div className="bg-[#f6f3eb] rounded-3xl p-8 border border-[#ded6c7] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl space-y-1">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1CA3BB]">
              ENTERPRISE ECOSYSTEM SYNERGY
            </span>
            <h4 className="font-display font-bold text-xl text-[#0A1333]">
              Need a unified solution combining AI software, voice agents, and marketing?
            </h4>
            <p className="text-xs text-[#0A1333]/80 leading-relaxed">
              CyberShield offers consolidated enterprise master service agreements (MSAs) that span across all 6 sister brands under unified governance and SLAs.
            </p>
          </div>
          <a
            href="/contact"
            className="btn-primary flex-shrink-0"
          >
            <span>Consolidated Enterprise Inquiries</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
