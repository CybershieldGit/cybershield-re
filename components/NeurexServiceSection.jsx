"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function NeurexServiceSection() {
  const { openConsultation } = useModal();
  const [activeTab, setActiveTab] = useState("AI_LLM");

  const tabs = [
    {
      id: "AI_LLM",
      label: "AI & LLM",
      title: "Autonomous AI agents & custom LLM pipelines",
      description:
        "Deploy fine-tuned enterprise models, deterministic evaluation harnesses, and multi-agent workflow pipelines built for real-world business impact.",
      bullets: [
        "Proprietary evaluation harnesses & model fine-tuning",
        "Autonomous workflow agents for high-security domains",
        "Deterministic AI verification & zero-hallucination pipelines",
      ],
      img: "/images/hero-neurex/service-man.avif",
      reviewer: {
        name: "AI Solutions Lead",
        role: "CyberShield AI Practice",
        text: "We don't build wrappers. We build custom evaluation harnesses and fine-tuned multi-agent systems that scale.",
      },
    },
    {
      id: "CLOUD_BACKEND",
      label: "CLOUD & BACKEND",
      title: "Distributed backend backbones & cloud resilience",
      description:
        "Mission-critical architectures, event-driven microservices, and high-throughput databases designed for sub-second performance and 99.9% uptime.",
      bullets: [
        "High-throughput transactional distributed backbones",
        "AWS, Docker, and auto-scaling cloud deployments",
        "Zero-downtime database migrations (Postgres, Redis, Vector)",
      ],
      img: "/images/hero-neurex/service-man.avif",
      reviewer: {
        name: "Systems Architect",
        role: "CyberShield Infrastructure",
        text: "Architected to run cleanly for the next ten years, requiring zero emergency patchwork under peak loads.",
      },
    },
    {
      id: "WEB_GROWTH",
      label: "WEB, APPS & SAAS",
      title: "High-performance web, apps, SaaS & digital growth",
      description:
        "From Next.js web applications and mobile apps to multi-tenant SaaS platforms and creator UGC marketing pipelines that drive compound revenue.",
      bullets: [
        "High-performance Next.js/React web & cross-platform apps",
        "Multi-tenant SaaS architectures & usage billing engines",
        "Full-funnel digital marketing & creator UGC pipelines (Adlyngo)",
      ],
      img: "/images/hero-neurex/service-man.avif",
      reviewer: {
        name: "Digital Growth Lead",
        role: "CyberShield & Adlyngo",
        text: "Uniting engineering craft with high-ROI digital acquisition creates unstoppable organic compounding.",
      },
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-white text-[#000416] relative overflow-hidden border-b border-[#ebebeb]/60">
      {/* Container: max-w 1240px aligned with page grid */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header Row: Heading on left, Get Started button on right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[620px]"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[1.12] lg:leading-[56px] tracking-[-1.2px] lg:tracking-[-1.5px] text-[#000416]">
              Enterprise technology &amp; <br className="hidden sm:block" />
              digital services for scale
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="self-start md:self-auto"
          >
            <div className="btn-wrap">
              <Link
                href="/contact"
                className="btn-01-neon text-white font-medium px-6 py-2.5 sm:px-7 sm:py-3 inline-block"
              >
                <span className="btn-text-wrap">
                  <span className="btn-text _01">Explore Services</span>
                  <span className="btn-text _02">Explore Services</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* The Feature Tab Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#f7f7f8] rounded-[24px] sm:rounded-[36px] overflow-hidden p-5 sm:p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
        >
          {/* Top-Right Tab Switcher Pills */}
          <div className="lg:absolute lg:top-10 lg:right-12 z-20 self-start lg:self-auto w-full lg:w-auto overflow-x-auto no-scrollbar pb-1">
            <div className="inline-flex items-center p-1 bg-[#e9e9e9] rounded-full gap-1 min-w-max">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 sm:px-5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#000416] shadow-sm font-semibold"
                        : "text-[#4a4d5a] hover:text-[#000416]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left Media Column: Portrait Image with Floating Review Card */}
          <div className="w-full lg:w-[540px] xl:w-[580px] shrink-0">
            <div className="relative w-full h-[300px] sm:h-[420px] lg:h-[500px] rounded-[20px] sm:rounded-[36px] overflow-hidden bg-[#e9e9e9] shadow-md">
              <Image
                src={currentTab.img}
                alt="Professional Team Member"
                fill
                className="object-cover object-center"
                priority
              />

              {/* Floating Review Card Overlay at the bottom */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 mx-auto max-w-[320px] sm:max-w-[360px] bg-white rounded-xl sm:rounded-[20px] p-3 sm:p-4 shadow-[0_16px_36px_-6px_rgba(0,4,22,0.18)] border border-[#ebebeb] flex items-start gap-2.5 sm:gap-3 z-10"
              >
                {/* Reviewer Mini Avatar */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border border-[#ebebeb] bg-[#f7f7f8] relative">
                  <Image
                    src="/images/hero-neurex/avatar-1.png"
                    alt={currentTab.reviewer.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Reviewer Details */}
                <div className="flex flex-col">
                  <div className="text-xs sm:text-sm text-[#000416]">
                    <span className="font-semibold text-[#000416]">
                      {currentTab.reviewer.name}
                    </span>
                    <span className="text-[#797a7c]">, {currentTab.reviewer.role}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-[#4a4d5a] leading-relaxed mt-1">
                    {currentTab.reviewer.text}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Text Column: Title, Subtitle, Bullet List, and Learn More Button */}
          <div className="w-full flex-1 flex flex-col justify-between py-2 lg:py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                {/* Title & Description */}
                <div className="space-y-3 max-w-[420px]">
                  <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-medium leading-[1.25] tracking-[-0.32px] text-[#000416]">
                    {currentTab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4a4d5a] leading-relaxed font-normal">
                    {currentTab.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-2 mb-2">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#000416] shrink-0" />
                      <span className="text-sm sm:text-base font-medium text-[#000416]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Dark Pill "Learn more >" Button */}
                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000416] text-white text-sm font-medium hover:bg-[#141622] transition-colors duration-200 group cursor-pointer"
                  >
                    <span className="btn-text-wrap">
                      <span className="btn-text _01">Learn more</span>
                      <span className="btn-text _02">Learn more</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      <path
                        d="M13.1724 12.0007L8.22266 7.05093L9.63688 5.63672L16.0008 12.0007L9.63688 18.3646L8.22266 16.9504L13.1724 12.0007Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
