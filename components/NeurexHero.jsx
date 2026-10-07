"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function NeurexHero() {
  const { openConsultation } = useModal();

  const partnerLogos = [
    { name: "Unicell", src: "/images/hero-neurex/logos/unicell.svg" },
    { name: "Walter", src: "/images/hero-neurex/logos/walter.svg" },
    { name: "Monosen", src: "/images/hero-neurex/logos/monosen.svg" },
    { name: "Overcut", src: "/images/hero-neurex/logos/overcut.svg" },
    { name: "Primex", src: "/images/hero-neurex/logos/primex.svg" },
    { name: "Boomers", src: "/images/hero-neurex/logos/boomers.svg" },
    { name: "Reverse", src: "/images/hero-neurex/logos/reverse.svg" },
  ];

  return (
    <>
      {/* 1. Neurex Hero Section (14-stop gradient background) */}
      <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-20 md:pb-28 gradient-01-my text-white overflow-hidden">
        {/* Container: max-w 1240px as per Neurex style guide container-01 */}
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:max-w-[550px] flex flex-col gap-6 sm:gap-7"
            >


              {/* Primary Headline 01 */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.08] lg:leading-[72px] tracking-[-1.5px] lg:tracking-[-1.92px] text-white">
                Engineering the digital backbone for enterprise scale
              </h1>

              {/* Sub-headline description */}
              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-normal">
                Founded in 2016, CyberShield Technologies delivers mission-critical solutions across AI &amp; LLMs, Cloud infrastructure, Backend systems, Web &amp; Apps, Digital Marketing, and SaaS — backed by an ecosystem of 6 sister brands.
              </p>

              {/* CTA Button & Social Proof Row */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-2">
                {/* Neurex Neon Yellow Action Button with Dual Rolling Text */}
                <div className="btn-wrap">
                  <Link
                    href="/contact"
                    className="btn-01-neon text-black font-medium inline-block"
                  >
                    <span className="btn-text-wrap">
                      <span className="btn-text _01">Get in touch</span>
                      <span className="btn-text _02">Get in touch</span>
                    </span>
                  </Link>
                </div>

                {/* Rating & Avatar Badge */}
                <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/15 backdrop-blur-md">
                  {/* Overlapping Avatars */}
                  <div className="flex items-center -space-x-2.5">
                    <div className="w-8 h-8 rounded-full border border-[#01162d] overflow-hidden relative shadow-sm">
                      <Image
                        src="/images/hero-neurex/avatar-1.png"
                        alt="Client avatar"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#01162d] overflow-hidden relative shadow-sm">
                      <Image
                        src="/images/hero-neurex/avatar-2.png"
                        alt="Client avatar"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-[#01162d] overflow-hidden relative shadow-sm">
                      <Image
                        src="/images/hero-neurex/avatar-3.png"
                        alt="Client avatar"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Rating Text */}
                  <div className="text-sm font-normal text-white">
                    <span className="font-semibold text-white">99.9% SLA</span>{" "}
                    <span className="text-white/60">· 120+ In-House Engineers</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Asymmetrical Visual Grid (Neurex 2-column staggered cards on both mobile & desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:max-w-[584px] grid grid-cols-2 gap-3 sm:gap-6"
            >
              {/* Column 1: Performance Bar Chart Widget + Female Team Member Card */}
              <div className="flex flex-col gap-3 sm:gap-6">
                {/* 1. Performance Overview SVG Widget */}
                <div className="w-full rounded-[20px] sm:rounded-[30px] overflow-hidden bg-white shadow-xl sm:shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/hero-neurex/chart-widget.svg"
                    alt="Performance Overview Analytics"
                    width={280}
                    height={240}
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>

                {/* 2. Team Member Photo Card (Female with laptop) */}
                <div className="w-full h-[160px] xs:h-[200px] sm:h-[280px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl sm:shadow-2xl relative transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/hero-neurex/team-female.avif"
                    alt="Executive Team Member working"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              {/* Column 2: Male Team Member Card + Enterprise Directory Widget */}
              <div className="flex flex-col gap-3 sm:gap-6">
                {/* 3. Team Member Photo Card (Male with laptop) */}
                <div className="w-full h-[200px] xs:h-[250px] sm:h-[360px] rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl sm:shadow-2xl relative transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/hero-neurex/team-male.avif"
                    alt="CyberShield Principal Engineer at work"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* 4. Enterprise Personnel / Directory Widget */}
                <div className="w-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-white shadow-xl sm:shadow-2xl transition-transform duration-300 hover:scale-[1.02]">
                  <Image
                    src="/images/hero-neurex/team-widget.svg"
                    alt="Enterprise Personnel Directory"
                    width={280}
                    height={206}
                    className="w-full h-auto object-contain block"
                    priority
                  />
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Neurex Logos Section ("Trusted by 100+ companies worldwide") */}
      <section className="w-full py-16 sm:py-20 bg-white border-b border-[#ebebeb]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-medium text-[#000416] tracking-[-0.16px]">
              Trusted by 100+ companies worldwide
            </h2>
          </div>

          {/* Marquee Ticker Track */}
          <div className="relative w-full overflow-hidden">
            {/* Fade Masks on Left and Right edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-max items-center gap-12 sm:gap-16 animate-continuous-flow">
              {/* Set 1 */}
              {partnerLogos.map((logo, idx) => (
                <div
                  key={`logo-1-${idx}`}
                  className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={110}
                    height={36}
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              ))}

              {/* Set 2 for seamless infinite loop */}
              {partnerLogos.map((logo, idx) => (
                <div
                  key={`logo-2-${idx}`}
                  className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={110}
                    height={36}
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              ))}

              {/* Set 3 for extra wide viewport smoothness */}
              {partnerLogos.map((logo, idx) => (
                <div
                  key={`logo-3-${idx}`}
                  className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={110}
                    height={36}
                    className="h-7 sm:h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
