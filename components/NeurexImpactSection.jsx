"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NeurexImpactSection() {
  const statCards = [
    {
      value: "10+",
      label: "Years of operational engineering tenure (Founded 2016)",
    },
    {
      value: "06",
      label: "Specialized sister brands in our operating collective",
    },
    {
      value: "120+",
      label: "In-house engineers, designers & digital specialists",
    },
    {
      value: "99.9%",
      label: "Enterprise availability SLA with zero outsourcing",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden text-[#000416]">
      {/* Container: max-w 1310px as per Neurex container-02 */}
      <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-[720px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[56px] font-medium leading-[1.14] lg:leading-[64px] tracking-[-1.2px] lg:tracking-[-1.92px] text-[#000416]"
          >
            The impact we’ve engineered <br className="hidden sm:block" />
            for businesses
          </motion.h2>
        </div>

        {/* 4 Stat Cards Row: 2x2 on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-10">
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-auto min-h-[160px] sm:min-h-[220px] lg:h-[280px] rounded-[22px] sm:rounded-[32px] bg-[#f6f6f6] p-4 sm:p-7 flex flex-col justify-between items-center text-center transition-all duration-300 hover:shadow-md"
            >
              {/* Stat Value */}
              <div className="w-full flex items-center justify-center pt-2 sm:pt-4">
                <span className="text-3xl sm:text-[44px] lg:text-[64px] font-medium leading-none tracking-[-1px] lg:tracking-[-1.92px] text-[#000416]">
                  {card.value}
                </span>
              </div>

              {/* Stat Label */}
              <div className="max-w-[210px] mx-auto pb-1 sm:pb-3">
                <p className="text-xs sm:text-base text-[#4a4d5a] font-normal leading-snug sm:leading-relaxed">
                  {card.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Banner Card with Skewed Background & Mikhail Nilov Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center justify-between min-h-[300px] sm:min-h-[340px]"
        >
          {/* Skewed Background Canvas (-10deg on desktop, flat on mobile) */}
          <div className="absolute inset-0 bg-[#f6f6f6] rounded-[32px] -z-10 lg:transform lg:-skew-x-[10deg] origin-center" />

          {/* Left Testimonial Quote Content */}
          <div className="w-full lg:max-w-[580px] p-8 sm:p-12 lg:pl-16 lg:py-12 flex flex-col justify-between gap-8 z-10">
            {/* Top Quote Block */}
            <div className="flex flex-col items-start gap-4 sm:gap-5">
              {/* Grey Double Quote Icon SVG */}
              <svg
                width="38"
                height="30"
                viewBox="0 0 38 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M0 30L8.7465 0H17.6703L12.7652 30H0ZM20.3297 30L29.0762 0H38L33.0949 30H20.3297Z"
                  fill="#CFCFCF"
                />
              </svg>

              {/* Quote Headline Text */}
              <p className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-[1.3] text-[#000416] tracking-[-0.32px]">
                CyberShield&apos;s systems seamlessly bridge distributed backend infrastructure with autonomous AI workflows, built for long-term compound scale.
              </p>
            </div>

            {/* Author Attribution */}
            <div className="text-base sm:text-lg text-[#000416]">
              <span className="font-medium text-[#000416]">Enterprise Partner,</span>{" "}
              <span className="text-[#000416]/70">Digital Operations &amp; Systems</span>
            </div>
          </div>

          {/* Right Image Box (Client with arms crossed) */}
          <div className="w-full lg:w-auto lg:max-w-[360px] flex justify-end items-end pr-6 sm:pr-10 lg:pr-14 self-end z-10">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-[280px] sm:h-[320px] lg:h-[340px] flex items-end justify-center">
              <Image
                src="/images/hero-neurex/courtney-founder.avif"
                alt="Courtney, Founder at Overcut"
                width={340}
                height={340}
                className="w-full h-full object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
