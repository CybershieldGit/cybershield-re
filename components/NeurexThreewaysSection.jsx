"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function NeurexThreewaysSection() {
  const { openConsultation } = useModal();

  const cards = [
    {
      title: "Distributed Backend & Cloud",
      description: "High-throughput transactional microservices, event streaming, and resilient AWS deployments.",
      img: "/images/hero-neurex/card-control-widget.svg",
      imgAlt: "Distributed Backend & Cloud Infrastructure Telemetry",
    },
    {
      title: "Autonomous AI & Workflow Ops",
      description: "Carrier-grade voice AI, WhatsApp automation, and fine-tuned agent workflows that compound output.",
      img: "/images/hero-neurex/instant-notifications-widget.png",
      imgAlt: "Autonomous AI & Workflow Automation",
    },
    {
      title: "Enterprise Governance & Security",
      description: "100% in-house engineering, zero outsourcing, strict data encryption, and 99.9% platform SLAs.",
      img: "/images/hero-neurex/security-careers-widget.svg",
      imgAlt: "Enterprise Governance & Security Architecture",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 gradient-01-my text-white relative overflow-hidden">
      {/* Container: max-w 1240px as per Neurex container-01 */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header Row: Heading on left, Get Started button on right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[680px]"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-medium leading-[1.12] lg:leading-[56px] tracking-[-1.2px] lg:tracking-[-1.5px] text-white">
              Three pillars driving your <br className="hidden sm:block" />
              compound technology advantage
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
                  <span className="btn-text _01">Get in touch</span>
                  <span className="btn-text _02">Get in touch</span>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Outer Visual Container */}
        <div className="flex flex-col gap-8">
          
          {/* Top Big Feature Card: Curly Hair Girl working on laptop with Floating Savannah Nguyen Analytics Card */}
          <motion.div
            initial={{ opacity: 0, y: 35, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[260px] sm:h-[420px] lg:h-[580px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl relative"
          >
            {/* Background Photography */}
            <Image
              src="/images/hero-neurex/threeways-curly-girl.avif"
              alt="Executive working efficiently"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Floating Top-Left Widget: Savannah Nguyen Analytics & Conversion Progress */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-4 sm:top-10 lg:top-12 left-4 sm:left-10 lg:left-12 w-[180px] xs:w-[220px] sm:w-[280px] lg:w-[330px] rounded-[18px] sm:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,4,22,0.35)]"
            >
              <Image
                src="/images/hero-neurex/growth-widget.svg"
                alt="Savannah Nguyen Growth Acquisition"
                width={330}
                height={200}
                className="w-full h-auto object-contain block"
              />
            </motion.div>
          </motion.div>

          {/* Bottom 3 Cards Grid: Obsidian containers with titles & telemetry images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-[24px] sm:rounded-[36px] bg-[#0e111f] p-5 sm:p-8 flex flex-col justify-between gap-6 border border-white/5 transition-transform duration-300 hover:scale-[1.02] shadow-xl"
              >
                {/* Title & Description */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-xl sm:text-[26px] font-medium tracking-[-0.16px] text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Inner Card Visual Image Container */}
                <div className="w-full rounded-[24px] sm:rounded-[30px] overflow-hidden bg-transparent">
                  <Image
                    src={card.img}
                    alt={card.imgAlt}
                    width={340}
                    height={220}
                    className="w-full h-auto object-contain block"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
