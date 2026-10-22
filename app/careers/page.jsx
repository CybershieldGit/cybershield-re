"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

// Exact SVG Stroke Icons for Perks & Benefits from Neurex
const PERK_ICONS = {
  purposeful: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M9.33463 6.66671V2.66671C9.33463 1.93033 9.93159 1.33337 10.668 1.33337H21.3346C22.071 1.33337 22.668 1.93033 22.668 2.66671V6.66671H28.0013C28.7377 6.66671 29.3346 7.26367 29.3346 8.00004V26.6667C29.3346 27.4031 28.7377 28 28.0013 28H4.0013C3.26493 28 2.66797 27.4031 2.66797 26.6667V8.00004C2.66797 7.26367 3.26493 6.66671 4.0013 6.66671H9.33463ZM26.668 17.3334H5.33464V25.3334H26.668V17.3334ZM26.668 9.33337H5.33464V14.6667H9.33463V12H12.0013V14.6667H20.0013V12H22.668V14.6667H26.668V9.33337ZM12.0013 4.00004V6.66671H20.0013V4.00004H12.0013Z" fill="#000416"/>
    </svg>
  ),
  pension: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6.67318 12.0037C7.40956 12.0037 8.00651 12.6007 8.00651 13.3371C10.1862 13.3371 12.1914 14.0843 13.7799 15.3364L16.6732 15.3371C18.45 15.3371 20.0464 16.1095 21.1451 17.3367L25.3399 17.3371C27.9963 17.3371 30.2897 18.8908 31.3613 21.1389C28.2083 25.2997 23.1024 28.0037 17.3399 28.0037C13.6189 28.0037 10.4729 27.1995 7.92534 25.7932C7.74076 26.3045 7.2497 26.6704 6.67318 26.6704H2.67318C1.9368 26.6704 1.33984 26.0735 1.33984 25.3371V13.3371C1.33984 12.6007 1.9368 12.0037 2.67318 12.0037H6.67318ZM8.00786 16.0037L8.00651 22.6997L8.06699 22.7431C10.4587 24.4236 13.5773 25.3371 17.3399 25.3371C21.3452 25.3371 25.0713 23.7963 27.7867 21.1645L27.9639 20.9864L27.8049 20.8525C27.1863 20.3685 26.4273 20.0683 25.6132 20.0129L25.3399 20.0037H22.5245C22.6219 20.4325 22.6732 20.8788 22.6732 21.3371V22.6704H10.6732V20.0037L19.7265 20.0024L19.6807 19.8977C19.1733 18.8396 18.124 18.0908 16.8924 18.0108L16.6732 18.0037L12.7673 18.0036C11.5576 16.7697 9.87216 16.0041 8.00786 16.0037ZM5.33984 14.6704H4.00651V24.0037H5.33984V14.6704ZM24.0065 6.67041C26.2156 6.67041 28.0065 8.46126 28.0065 10.6704C28.0065 12.8795 26.2156 14.6704 24.0065 14.6704C21.7973 14.6704 20.0065 12.8795 20.0065 10.6704C20.0065 8.46126 21.7973 6.67041 24.0065 6.67041ZM24.0065 9.33708C23.2701 9.33708 22.6732 9.93402 22.6732 10.6704C22.6732 11.4068 23.2701 12.0037 24.0065 12.0037C24.7429 12.0037 25.3399 11.4068 25.3399 10.6704C25.3399 9.93402 24.7429 9.33708 24.0065 9.33708ZM14.6732 2.67041C16.8823 2.67041 18.6732 4.46126 18.6732 6.67041C18.6732 8.87954 16.8823 10.6704 14.6732 10.6704C12.464 10.6704 10.6732 8.87954 10.6732 6.67041C10.6732 4.46126 12.464 2.67041 14.6732 2.67041ZM14.6732 5.33708C13.9368 5.33708 13.3399 5.93402 13.3399 6.67041C13.3399 7.40678 13.9368 8.00374 14.6732 8.00374C15.4096 8.00374 16.0065 7.40678 16.0065 6.67041C16.0065 5.93402 15.4096 5.33708 14.6732 5.33708Z" fill="#000416"/>
    </svg>
  ),
  referral: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16.0013 14.6663C19.6832 14.6663 22.668 17.6511 22.668 21.3329V29.3329H20.0013V21.3329C20.0013 19.2027 18.3361 17.4613 16.2364 17.3397L16.0013 17.3329C13.871 17.3329 12.1298 18.9981 12.0081 21.0979L12.0013 21.3329V29.3329H9.33463V21.3329C9.33463 17.6511 12.3194 14.6663 16.0013 14.6663ZM7.33464 18.6663C7.70644 18.6663 8.06809 18.7097 8.41477 18.7919C8.19066 19.4583 8.05294 20.1623 8.01325 20.892L8.0013 21.3329L8.00223 21.4471C7.8514 21.3937 7.69225 21.3579 7.52725 21.3421L7.33464 21.3329C6.29504 21.3329 5.4407 22.1261 5.3438 23.1403L5.33464 23.3329V29.3329H2.66797V23.3329C2.66797 20.7556 4.7573 18.6663 7.33464 18.6663ZM24.668 18.6663C27.2453 18.6663 29.3346 20.7556 29.3346 23.3329V29.3329H26.668V23.3329C26.668 22.2933 25.8748 21.4391 24.8606 21.3421L24.668 21.3329C24.4344 21.3329 24.2101 21.3729 24.0017 21.4465L24.0013 21.3329C24.0013 20.4453 23.8568 19.5916 23.59 18.7937C23.9345 18.7097 24.2961 18.6663 24.668 18.6663ZM7.33464 10.6663C9.17558 10.6663 10.668 12.1586 10.668 13.9996C10.668 15.8405 9.17558 17.3329 7.33464 17.3329C5.49369 17.3329 4.0013 15.8405 4.0013 13.9996C4.0013 12.1586 5.49369 10.6663 7.33464 10.6663ZM24.668 10.6663C26.5089 10.6663 28.0013 12.1586 28.0013 13.9996C28.0013 15.8405 26.5089 17.3329 24.668 17.3329C22.827 17.3329 21.3346 15.8405 21.3346 13.9996C21.3346 12.1586 22.827 10.6663 24.668 10.6663ZM7.33464 13.3329C6.96645 13.3329 6.66797 13.6315 6.66797 13.9996C6.66797 14.3677 6.96645 14.6663 7.33464 14.6663C7.70282 14.6663 8.0013 14.3677 8.0013 13.9996C8.0013 13.6315 7.70282 13.3329 7.33464 13.3329ZM24.668 13.3329C24.2998 13.3329 24.0013 13.6315 24.0013 13.9996C24.0013 14.3677 24.2998 14.6663 24.668 14.6663C25.0361 14.6663 25.3346 14.3677 25.3346 13.9996C25.3346 13.6315 25.0361 13.3329 24.668 13.3329ZM16.0013 2.66626C18.9468 2.66626 21.3346 5.05407 21.3346 7.99959C21.3346 10.9451 18.9468 13.3329 16.0013 13.3329C13.0558 13.3329 10.668 10.9451 10.668 7.99959C10.668 5.05407 13.0558 2.66626 16.0013 2.66626ZM16.0013 5.33293C14.5285 5.33293 13.3346 6.52683 13.3346 7.99959C13.3346 9.47235 14.5285 10.6663 16.0013 10.6663C17.4741 10.6663 18.668 9.47235 18.668 7.99959C18.668 6.52683 17.4741 5.33293 16.0013 5.33293Z" fill="#000416"/>
    </svg>
  ),
  socials: (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16.0013 29.3329C8.6375 29.3329 2.66797 23.3633 2.66797 15.9996C2.66797 8.63579 8.6375 2.66626 16.0013 2.66626C23.365 2.66626 29.3346 8.63579 29.3346 15.9996C29.3346 23.3633 23.365 29.3329 16.0013 29.3329ZM12.948 26.2228C11.6645 23.5008 10.8777 20.4985 10.7044 17.3329H5.41716C5.9453 21.5683 8.95649 25.0325 12.948 26.2228ZM13.3756 17.3329C13.5761 20.5847 14.505 23.6392 16.0013 26.3356C17.4976 23.6392 18.4265 20.5847 18.627 17.3329H13.3756ZM26.5854 17.3329H21.2982C21.1249 20.4985 20.3381 23.5008 19.0546 26.2228C23.0461 25.0325 26.0573 21.5683 26.5854 17.3329ZM5.41716 14.6663H10.7044C10.8777 11.5006 11.6645 8.49835 12.948 5.77634C8.95649 6.9667 5.9453 10.4309 5.41716 14.6663ZM13.3756 14.6663H18.627C18.4265 11.4146 17.4976 8.35993 16.0013 5.66358C14.505 8.35993 13.5761 11.4146 13.3756 14.6663ZM19.0546 5.77634C20.3381 8.49835 21.1249 11.5006 21.2982 14.6663H26.5854C26.0573 10.4309 23.0461 6.9667 19.0546 5.77634Z" fill="#000416"/>
    </svg>
  )
};

export default function CareersPage() {
  const { openConsultation } = useModal();
  const [activeFaq, setActiveFaq] = useState(0);

  const perks = [
    {
      icon: PERK_ICONS.purposeful,
      title: "Purposeful Work",
      description: "We work with real purpose to feel fulfilled in your role."
    },
    {
      icon: PERK_ICONS.pension,
      title: "Pension Scheme",
      description: "Invest in your future with to make a pension contribution."
    },
    {
      icon: PERK_ICONS.referral,
      title: "Referral Rewards",
      description: "Receive a cash bonus when you will introduce someone."
    },
    {
      icon: PERK_ICONS.socials,
      title: "Socials",
      description: "Team bonding through events and family gatherings"
    }
  ];

  const engineeringRoles = [
    {
      slug: "ai-llm-systems-engineer",
      title: "AI & LLM Systems Engineer",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    },
    {
      slug: "senior-fullstack-engineer",
      title: "Senior Full-Stack Web Engineer",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    },
    {
      slug: "cloud-devops-architect",
      title: "Cloud Infrastructure & DevOps Architect",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    }
  ];

  const growthRoles = [
    {
      slug: "performance-media-lead",
      title: "Performance Media Buyer & Growth Lead",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    },
    {
      slug: "ugc-creator-pipeline-producer",
      title: "UGC Video Producer & Creator Lead",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    },
    {
      slug: "enterprise-workflow-consultant",
      title: "Enterprise Solutions Consultant",
      location: "Greater Noida West (HQ) / Hybrid",
      type: "Full time"
    }
  ];

  const faqs = [
    {
      q: "Where is CyberShield's main engineering office located?",
      a: "Our headquarters and main studio are located at F-407, 4th Floor, Artha Mart, Greater Noida West, UP 201318, India. We offer flexible hybrid arrangements for our engineering and growth pods."
    },
    {
      q: "What technologies and stacks will I be working with?",
      a: "Depending on your pod, you will work with modern AI frameworks, PyTorch, vLLM, Next.js, React, TypeScript, PostgreSQL, Redis, Docker, AWS cloud infrastructure, and Meta Graph APIs."
    },
    {
      q: "Does CyberShield offer career development and upskilling?",
      a: "Yes. All team members receive unlimited internal access to live executive cohorts and masterclasses via our sister brands IDS (Institute of Digital Studies) and SkillGrow, as well as dedicated learning stipends."
    },
    {
      q: "What is CyberShield's hiring process like?",
      a: "We hire slowly and intentionally: 1) Initial portfolio/resume review, 2) Technical craft or strategy discussion with practice leads, 3) Real-world problem-solving session, and 4) Offer & team welcome."
    },
    {
      q: "What makes CyberShield different from conventional agencies?",
      a: "We are an operating collective with a 100% in-house craft ethos. You don't just ship throwaway client code; you contribute to long-term platforms and sister brands that compound over decades."
    }
  ];

  return (
    <main className="min-h-screen bg-white text-[#000416] selection:bg-[#1CA3BB] selection:text-white overflow-x-hidden pt-28 sm:pt-32 lg:pt-36">
      
      {/* =========================================================================
          SECTION 1: HERO SECTION (Headline + See Open Positions + 5-Image Grid)
      ========================================================================== */}
      <section className="relative w-full pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Display Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[850px] mx-auto"
            >
              <h1 className="heading-01 font-medium text-center">
                Grow with a company that values you
              </h1>
            </motion.div>

            {/* See Open Positions Teal Pill Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex justify-center"
            >
              <div className="btn-wrap">
                <a
                  href="#career"
                  className="btn-01-link bg-[#1CA3BB] hover:bg-[#168ea3] text-white rounded-full px-8 py-4 font-medium text-[16px] inline-flex items-center justify-center transition-all duration-300 shadow-md group"
                >
                  <span className="btn-text-wrap">
                    <span className="btn-text _01">See open positions</span>
                    <span className="btn-text _02">See open positions</span>
                  </span>
                </a>
              </div>
            </motion.div>

            {/* 5-Image Asymmetric Hero Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 sm:mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center"
            >
              {/* Left Column: 2 Stacked Images */}
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="relative w-full h-[240px] sm:h-[260px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]" style={{ position: 'relative' }}>
                  <Image
                    src="/images/career/career-hero-01.avif"
                    alt="Team Member"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
                <div className="relative w-full h-[280px] sm:h-[300px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]" style={{ position: 'relative' }}>
                  <Image
                    src="/images/career/career-hero-02.avif"
                    alt="Team Collaborative Meeting"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Center Column: 1 Tall Portrait */}
              <div className="relative w-full h-[460px] sm:h-[580px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]" style={{ position: 'relative' }}>
                <Image
                  src="/images/career/career-hero-03.avif"
                  alt="Team Member Focus"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Right Column: 2 Stacked Images */}
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="relative w-full h-[280px] sm:h-[300px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]" style={{ position: 'relative' }}>
                  <Image
                    src="/images/career/career-hero-04.avif"
                    alt="Team Discussion"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative w-full h-[240px] sm:h-[260px] rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)]" style={{ position: 'relative' }}>
                  <Image
                    src="/images/career/career-hero-05.avif"
                    alt="Team Member"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MISSION STATEMENT DISPLAY BANNER (.career-text)
      ========================================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]/60">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          <div className="max-w-[1028px] mx-auto text-center">
            <h2 className="heading-02 font-medium leading-[1.15] text-[#000416]">
              Our goal is to uplift businesses with reliable tools that enhance efficiency and drive meaningful results
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: PERKS AND BENEFITS 4-CARD GRID (.service-06-inner)
      ========================================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]/60 bg-[#f7f7f8]">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16 max-w-[680px]">
            <h2 className="heading-02">Perks and benefits</h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {perks.map((perk, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#f8f8f8] hover:bg-[#f3f3f3] transition-colors duration-300 p-8 sm:p-9 rounded-[30px] flex flex-col justify-between min-h-[260px] border border-black/[0.04]"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 flex items-center justify-center">
                  {perk.icon}
                </div>

                {/* Text Details */}
                <div className="flex flex-col gap-2.5 mt-8">
                  <h3 className="sub-heading-03 font-medium text-[#000416]">
                    {perk.title}
                  </h3>
                  <p className="body-regular-02 text-[#4A4D5A] leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: HEAR STRAIGHT FROM OUR EMPLOYEES (3x2 Bento Grid)
      ========================================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]/60">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16">
            <h2 className="heading-02">Hear straight from our employees</h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Top-Left Card (Col Span 2 on Desktop): Peter Wilson Testimonial */}
            <div className="md:col-span-2 bg-[#f8f8f8] rounded-[30px] p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[382px] border border-black/[0.04]">
              {/* Decorative Side Background Asset */}
              <div 
                className="absolute right-0 top-0 bottom-0 w-full sm:w-[45%] bg-contain bg-no-repeat bg-right opacity-90 pointer-events-none hidden sm:block"
                style={{ backgroundImage: `url('/images/career/career-quote-bg.avif')` }}
              />

              {/* Quote Content */}
              <div className="relative z-10 max-w-full sm:max-w-[65%] flex flex-col gap-6 justify-between h-full">
                <div className="flex flex-col gap-5">
                  <div className="w-8 h-8 relative">
                    <Image
                      src="/images/career/quote.svg"
                      alt="Quote Icon"
                      width={32}
                      height={32}
                      className="opacity-70"
                    />
                  </div>
                  <p className="sub-heading-02 text-[#000416] leading-snug">
                    Working here has been a game changer for my career. The leadership is supportive &amp; the culture is collaborative. I feel truly valued as part of the team. The leadership team really encourages failures and celebrates.
                  </p>
                </div>

                <div className="body-medium-01 text-[#000416] pt-4">
                  — Peter Wilson, <span className="text-[#4A4D5A] font-normal">Project Manager</span>
                </div>
              </div>
            </div>

            {/* Top-Right Card (1 Col): 15,000+ Stat */}
            <div className="bg-[#f8f8f8] rounded-[30px] p-8 sm:p-10 flex flex-col justify-between min-h-[382px] border border-black/[0.04]">
              <h3 className="heading-01 font-medium text-[#000416]">
                15,000+
              </h3>
              <div className="body-regular-01 text-[#4A4D5A] mt-auto">
                Businesses around the globe trust us
              </div>
            </div>

            {/* Bottom-Left Card (1 Col): 80% Stat */}
            <div className="bg-[#f8f8f8] rounded-[30px] p-8 sm:p-10 flex flex-col justify-between min-h-[382px] border border-black/[0.04]">
              <h3 className="heading-01 font-medium text-[#000416]">
                80%
              </h3>
              <div className="body-regular-01 text-[#4A4D5A] mt-auto">
                Faster decision-making with our tools
              </div>
            </div>

            {/* Bottom-Center Card (1 Col): Team Working Image */}
            <div className="relative rounded-[30px] overflow-hidden min-h-[382px] shadow-sm border border-black/[0.04]" style={{ position: 'relative' }}>
              <Image
                src="/images/career/career-stats-img.avif"
                alt="Team Collaboration"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Bottom-Right Card (1 Col): 70% Stat */}
            <div className="bg-[#f8f8f8] rounded-[30px] p-8 sm:p-10 flex flex-col justify-between min-h-[382px] border border-black/[0.04]">
              <h3 className="heading-01 font-medium text-[#000416]">
                70%
              </h3>
              <div className="body-regular-01 text-[#4A4D5A] mt-auto">
                Achieve a reduction in Manual tasks and effort
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FIND YOUR PERFECT ROLE (#career)
      ========================================================================== */}
      <section id="career" className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]/60 bg-[#f7f7f8] scroll-mt-24">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Section Heading */}
          <div className="mb-12 sm:mb-16 max-w-[680px]">
            <h2 className="heading-02">Find your perfect role</h2>
          </div>

          <div className="flex flex-col gap-16 sm:gap-20">
            
            {/* Category 1: Sales */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              
              {/* Left Image Showcase Card */}
              <div className="w-full lg:w-[380px] shrink-0 h-[340px] sm:h-[400px] relative rounded-[32px] overflow-hidden shadow-sm border border-black/[0.04]" style={{ position: 'relative' }}>
                <Image
                  src="/images/career/career-cat-01.avif"
                  alt="Modern Office Setup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Role Listings */}
              <div className="w-full flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3.5 py-1 text-[12px] font-mono font-bold uppercase tracking-wider rounded-full bg-[#f0f0f0] text-[#000416]">
                    ENGINEERING &amp; SYSTEMS
                  </span>
                </div>

                <div className="flex flex-col divide-y divide-black/[0.08] border-y border-black/[0.08]">
                  {engineeringRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex flex-col gap-1.5">
                        <Link
                          href={`/careers/${role.slug}`}
                          className="body-medium-01 text-[18px] text-[#000416] group-hover:text-[#1CA3BB] transition-colors"
                        >
                          {role.title}
                        </Link>
                        <div className="flex items-center gap-3 text-[14px] text-[#4A4D5A]">
                          <span className="pr-3 border-r border-black/15">{role.location}</span>
                          <span>{role.type}</span>
                        </div>
                      </div>

                      <div className="btn-wrap self-start sm:self-auto">
                        <Link
                          href={`/careers/${role.slug}`}
                          className="btn-01-link bg-[#1CA3BB] hover:bg-[#168ea3] text-white px-6 py-2.5 rounded-full font-medium text-[14px] inline-flex items-center justify-center transition-all duration-200 shadow-sm"
                        >
                          <span className="btn-text-wrap">
                            <span className="btn-text _01">Apply Now</span>
                            <span className="btn-text _02">Apply Now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Category 2: Growth, Media & Solutions */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
              
              {/* Left Image Showcase Card */}
              <div className="w-full lg:w-[380px] shrink-0 h-[340px] sm:h-[400px] relative rounded-[32px] overflow-hidden shadow-sm border border-black/[0.04]" style={{ position: 'relative' }}>
                <Image
                  src="/images/career/career-cat-02.avif"
                  alt="Creative Office Desk"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Role Listings */}
              <div className="w-full flex-1 flex flex-col">
                <div className="mb-6">
                  <span className="inline-block px-3.5 py-1 text-[12px] font-mono font-bold uppercase tracking-wider rounded-full bg-[#f0f0f0] text-[#000416]">
                    GROWTH, MEDIA &amp; SOLUTIONS
                  </span>
                </div>

                <div className="flex flex-col divide-y divide-black/[0.08] border-y border-black/[0.08]">
                  {growthRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="flex flex-col gap-1.5">
                        <Link
                          href={`/careers/${role.slug}`}
                          className="body-medium-01 text-[18px] text-[#000416] group-hover:text-[#1CA3BB] transition-colors"
                        >
                          {role.title}
                        </Link>
                        <div className="flex items-center gap-3 text-[14px] text-[#4A4D5A]">
                          <span className="pr-3 border-r border-black/15">{role.location}</span>
                          <span>{role.type}</span>
                        </div>
                      </div>

                      <div className="btn-wrap self-start sm:self-auto">
                        <Link
                          href={`/careers/${role.slug}`}
                          className="btn-01-link bg-[#1CA3BB] hover:bg-[#168ea3] text-white px-6 py-2.5 rounded-full font-medium text-[14px] inline-flex items-center justify-center transition-all duration-200 shadow-sm"
                        >
                          <span className="btn-text-wrap">
                            <span className="btn-text _01">Apply Now</span>
                            <span className="btn-text _02">Apply Now</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FREQUENTLY ASKED QUESTIONS ACCORDION (.faq)
      ========================================================================== */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]/60">
        <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Header */}
          <div className="mb-12 sm:mb-16 max-w-[680px]">
            <h2 className="heading-02">Frequently asked question</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            
            {/* Left Image Portrait */}
            <div className="w-full lg:w-[460px] shrink-0 h-[480px] sm:h-[580px] relative rounded-[32px] overflow-hidden shadow-sm border border-black/[0.04]">
              <Image
                src="/images/about/faq-portrait.avif"
                alt="Neurex Support Team"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            {/* Right Accordion List */}
            <div className="w-full flex-1 flex flex-col divide-y divide-black/[0.08]">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="py-6 sm:py-7">
                    <button
                      onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                      className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                    >
                      <h3 className="sub-heading-03 text-[18px] sm:text-[20px] font-medium text-[#000416] group-hover:text-[#1CA3BB] transition-colors">
                        {faq.q}
                      </h3>
                      
                      {/* Plus / Minus Circular Toggle Icon */}
                      <div className="w-8 h-8 rounded-full bg-[#f0f0f0] flex items-center justify-center shrink-0 text-[#000416] transition-transform duration-200">
                        {isOpen ? (
                          <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
                            <rect width="14" height="2" rx="1" fill="currentColor"/>
                          </svg>
                        ) : (
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="currentColor"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 body-regular-01 text-[#4A4D5A] leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
