"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

// Neurex Core Beliefs SVG Icons
function TransparentIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M2.66797 11.9914C2.66797 7.57774 6.23669 3.99976 10.6688 3.99976H21.3337C25.7525 3.99976 29.3346 7.5928 29.3346 11.9914V27.9998H10.6688C6.25009 27.9998 2.66797 24.4067 2.66797 20.0082V11.9914ZM26.668 25.3331V11.9914C26.668 9.06028 24.2745 6.66642 21.3337 6.66642H10.6688C7.71408 6.66642 5.33464 9.04586 5.33464 11.9914V20.0082C5.33464 22.9392 7.72813 25.3331 10.6688 25.3331H26.668ZM18.668 14.6664H21.3346V17.3331H18.668V14.6664ZM10.668 14.6664H13.3346V17.3331H10.668V14.6664Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AccountabilityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M15.8161 3.18743C17.134 2.30884 18.8461 2.29063 20.1824 3.14098L25.7226 6.66659H28.001C28.7374 6.66659 29.3344 7.26355 29.3344 7.99992V19.9999C29.3344 20.7363 28.7374 21.3332 28.001 21.3332H25.9748C26.0541 22.5963 25.459 23.8803 24.262 24.5985L17.4708 28.6733C16.6134 29.1876 15.5492 29.1756 14.7098 28.6632C13.7761 29.4889 12.3388 29.5799 11.296 28.7605L4.44168 23.3749C3.4198 22.5721 3.16138 21.2004 3.68902 20.1129C3.04461 19.6076 2.66797 18.8339 2.66797 18.0145V8C2.66797 7.26363 3.26493 6.66667 4.0013 6.66667H10.5972L15.8161 3.18743ZM5.56482 18.1936L6.48753 17.3863C8.12781 15.9509 10.6152 16.0931 12.0813 17.7059L15.6842 21.6691C16.8436 22.9444 17.055 24.818 16.2118 26.3187L22.89 22.3119C23.2652 22.0868 23.4009 21.6368 23.261 21.2577L17.3582 12.994C17.0266 12.5298 16.4365 12.328 15.8901 12.4919L12.5764 13.486C11.167 13.9088 9.63914 13.5236 8.59862 12.4831L8.20826 12.0928C7.45092 11.3354 7.25506 10.2576 7.57377 9.33334H5.33464V18.0145L5.56482 18.1936ZM18.7508 5.39075C18.3053 5.1073 17.7346 5.11336 17.2953 5.40623L10.0939 10.2072L10.4842 10.5975C10.8311 10.9444 11.3404 11.0727 11.8102 10.9318L15.1238 9.9377C16.763 9.44594 18.5336 10.0515 19.5282 11.444L24.6872 18.6665H26.6677V9.33326H25.7226C25.2154 9.33326 24.7188 9.18864 24.2909 8.91636L18.7508 5.39075ZM8.24354 19.3931L6.08921 21.2781L12.9436 26.6637L13.8821 25.0212C14.1688 24.5196 14.0997 23.8904 13.711 23.4628L10.1081 19.4996C9.61944 18.962 8.7903 18.9147 8.24354 19.3931Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CustomerFocusIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M16.0013 14.6663C19.6832 14.6663 22.668 17.6511 22.668 21.3329V29.3329H20.0013V21.3329C20.0013 19.2027 18.3361 17.4613 16.2364 17.3397L16.0013 17.3329C13.871 17.3329 12.1298 18.9981 12.0081 21.0979L12.0013 21.3329V29.3329H9.33463V21.3329C9.33463 17.6511 12.3194 14.6663 16.0013 14.6663ZM7.33464 18.6663C7.70644 18.6663 8.06809 18.7097 8.41477 18.7919C8.19066 19.4583 8.05294 20.1623 8.01325 20.892L8.0013 21.3329L8.00223 21.4471C7.8514 21.3937 7.69225 21.3579 7.52725 21.3421L7.33464 21.3329C6.29504 21.3329 5.4407 22.1261 5.3438 23.1403L5.33464 23.3329V29.3329H2.66797V23.3329C2.66797 20.7556 4.7573 18.6663 7.33464 18.6663ZM24.668 18.6663C27.2453 18.6663 29.3346 20.7556 29.3346 23.3329V29.3329H26.668V23.3329C26.668 22.2933 25.8748 21.4391 24.8606 21.3421L24.668 21.3329C24.4344 21.3329 24.2101 21.3729 24.0017 21.4465L24.0013 21.3329C24.0013 20.4453 23.8568 19.5916 23.59 18.7937C23.9345 18.7097 24.2961 18.6663 24.668 18.6663ZM7.33464 10.6663C9.17558 10.6663 10.668 12.1586 10.668 13.9996C10.668 15.8405 9.17558 17.3329 7.33464 17.3329C5.49369 17.3329 4.0013 15.8405 4.0013 13.9996C4.0013 12.1586 5.49369 10.6663 7.33464 10.6663ZM24.668 10.6663C26.5089 10.6663 28.0013 12.1586 28.0013 13.9996C28.0013 15.8405 26.5089 17.3329 24.668 17.3329C22.827 17.3329 21.3346 15.8405 21.3346 13.9996C21.3346 12.1586 22.827 10.6663 24.668 10.6663ZM7.33464 13.3329C6.96645 13.3329 6.66797 13.6315 6.66797 13.9996C6.66797 14.3677 6.96645 14.6663 7.33464 14.6663C7.70282 14.6663 8.0013 14.3677 8.0013 13.9996C8.0013 13.6315 7.70282 13.3329 7.33464 13.3329ZM24.668 13.3329C24.2998 13.3329 24.0013 13.6315 24.0013 13.9996C24.0013 14.3677 24.2998 14.6663 24.668 14.6663C25.0361 14.6663 25.3346 14.3677 25.3346 13.9996C25.3346 13.6315 25.0361 13.3329 24.668 13.3329ZM16.0013 2.66626C18.9468 2.66626 21.3346 5.05407 21.3346 7.99959C21.3346 10.9451 18.9468 13.3329 16.0013 13.3329C13.0558 13.3329 10.668 10.9451 10.668 7.99959C10.668 5.05407 13.0558 2.66626 16.0013 2.66626ZM16.0013 5.33293C14.5285 5.33293 13.3346 6.52683 13.3346 7.99959C13.3346 9.47235 14.5285 10.6663 16.0013 10.6663C17.4741 10.6663 18.668 9.47235 18.668 7.99959C18.668 6.52683 17.4741 5.33293 16.0013 5.33293Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SustainabilityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M16.0013 29.3329C8.6375 29.3329 2.66797 23.3633 2.66797 15.9996C2.66797 8.63579 8.6375 2.66626 16.0013 2.66626C23.365 2.66626 29.3346 8.63579 29.3346 15.9996C29.3346 23.3633 23.365 29.3329 16.0013 29.3329ZM12.948 26.2228C11.6645 23.5008 10.8777 20.4985 10.7044 17.3329H5.41716C5.9453 21.5683 8.95649 25.0325 12.948 26.2228ZM13.3756 17.3329C13.5761 20.5847 14.505 23.6392 16.0013 26.3356C17.4976 23.6392 18.4265 20.5847 18.627 17.3329H13.3756ZM26.5854 17.3329H21.2982C21.1249 20.4985 20.3381 23.5008 19.0546 26.2228C23.0461 25.0325 26.0573 21.5683 26.5854 17.3329ZM5.41716 14.6663H10.7044C10.8777 11.5006 11.6645 8.49835 12.948 5.77634C8.95649 6.9667 5.9453 10.4309 5.41716 14.6663ZM13.3756 14.6663H18.627C18.4265 11.4146 17.4976 8.35993 16.0013 5.66358C14.505 8.35993 13.5761 11.4146 13.3756 14.6663ZM19.0546 5.77634C20.3381 8.49835 21.1249 11.5006 21.2982 14.6663H26.5854C26.0573 10.4309 23.0461 6.9667 19.0546 5.77634Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ExcellenceIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M22.6654 20.3269V29.4889C22.6654 29.857 22.3668 30.1557 21.9987 30.1557C21.8779 30.1557 21.7594 30.1227 21.6558 30.0606L15.9987 26.6663L10.3417 30.0606C10.026 30.2499 9.61647 30.1475 9.42703 29.8319C9.36487 29.7282 9.33203 29.6097 9.33203 29.4889V20.3269C6.89346 18.3721 5.33203 15.3682 5.33203 11.9997C5.33203 6.10863 10.1077 1.33301 15.9987 1.33301C21.8898 1.33301 26.6654 6.10863 26.6654 11.9997C26.6654 15.3682 25.1039 18.3721 22.6654 20.3269ZM11.9987 21.891V25.9565L15.9987 23.5565L19.9987 25.9565V21.891C18.7635 22.391 17.4132 22.6663 15.9987 22.6663C14.5842 22.6663 13.2339 22.391 11.9987 21.891ZM15.9987 19.9997C20.417 19.9997 23.9987 16.4179 23.9987 11.9997C23.9987 7.58139 20.417 3.99967 15.9987 3.99967C11.5804 3.99967 7.9987 7.58139 7.9987 11.9997C7.9987 16.4179 11.5804 19.9997 15.9987 19.9997Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AgilityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#000416]">
      <path
        d="M9.33199 28.6661C6.0183 28.6661 3.33203 25.9799 3.33203 22.6662C3.33203 19.3525 6.0183 16.6662 9.33199 16.6662C12.6457 16.6662 15.3319 19.3525 15.3319 22.6662C15.3319 25.9799 12.6457 28.6661 9.33199 28.6661ZM22.6652 15.3329C19.3515 15.3329 16.6653 12.6466 16.6653 9.33296C16.6653 6.01928 19.3515 3.33301 22.6652 3.33301C25.9789 3.33301 28.6652 6.01928 28.6652 9.33296C28.6652 12.6466 25.9789 15.3329 22.6652 15.3329ZM9.33199 25.9995C11.1729 25.9995 12.6653 24.5071 12.6653 22.6662C12.6653 20.8253 11.1729 19.3329 9.33199 19.3329C7.49105 19.3329 5.99868 20.8253 5.99868 22.6662C5.99868 24.5071 7.49105 25.9995 9.33199 25.9995ZM22.6652 12.6663C24.5061 12.6663 25.9985 11.1739 25.9985 9.33296C25.9985 7.49203 24.5061 5.99965 22.6652 5.99965C20.8243 5.99965 19.3319 7.49203 19.3319 9.33296C19.3319 11.1739 20.8243 12.6663 22.6652 12.6663ZM3.99869 10.6663C3.99869 6.98442 6.98344 3.99967 10.6653 3.99967H14.6653V6.66632H10.6653C8.45619 6.66632 6.66534 8.45717 6.66534 10.6663V14.6663H3.99869V10.6663ZM27.9985 17.3329H25.3319V21.3329C25.3319 23.5421 23.5411 25.3328 21.3319 25.3328H17.3319V27.9995H21.3319C25.0137 27.9995 27.9985 25.0147 27.9985 21.3329V17.3329Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Social Arrow SVG Icon
function ArrowUpRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-4 h-4">
      <path
        d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z"
        fill="#000416"
      />
    </svg>
  );
}

export default function AboutPage() {
  const { openConsultation } = useModal();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { number: "2016", suffix: "", text: "Year CyberShield was founded in Greater Noida" },
    { number: "6", suffix: "", text: "Dedicated sister brands in our operating collective" },
    { number: "120", suffix: "+", text: "In-house engineers, designers & digital specialists" },
    { number: "99.9", suffix: "%", text: "Platform availability SLA with zero outsourcing" },
  ];

  const beliefs = [
    {
      title: "Craft Over Volume",
      text: "We would rather ship one system correctly than ten systems quickly. Volume is vanity; craft compounds.",
      Icon: TransparentIcon,
    },
    {
      title: "Own What You Build",
      text: "We operate what we build alongside our partners for the long horizon. Zero handoffs and walkaways.",
      Icon: AccountabilityIcon,
    },
    {
      title: "Design In Decades",
      text: "Every architectural decision assumes the system will run cleanly ten years from now.",
      Icon: CustomerFocusIcon,
    },
    {
      title: "Boring First / Refuse Trends",
      text: "We choose battle-tested, proven primitives over ephemeral weekly hype.",
      Icon: SustainabilityIcon,
    },
    {
      title: "Zero Outsourcing",
      text: "Every line of software, AI pipeline, and design is engineered in-house under a single culture.",
      Icon: ExcellenceIcon,
    },
    {
      title: "Speak Plainly",
      text: "Clear thinking creates clear technology. No buzzwords in documentation, code, or interfaces.",
      Icon: AgilityIcon,
    },
  ];

  const teamMembers = [
    {
      name: "Aman Sharma",
      role: "Founder & Managing Director",
      image: "/images/about/team-01.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
    {
      name: "Rohan Varma",
      role: "Head of AI & Systems Architecture",
      image: "/images/about/team-02.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
    {
      name: "Priya Nair",
      role: "Director of Enterprise Solutions",
      image: "/images/about/team-03.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
    {
      name: "Arjun Mehta",
      role: "VP of Cloud & DevOps",
      image: "/images/about/team-04.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
    {
      name: "Sneha Patel",
      role: "Head of Product & SaaS Operations",
      image: "/images/about/team-05.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
    {
      name: "Devendra Singh",
      role: "Head of Growth & Performance Media",
      image: "/images/about/team-06.avif",
      linkedin: "https://www.linkedin.com/",
      x: "https://x.com/",
    },
  ];

  const faqs = [
    {
      question: "What services does CyberShield Technologies provide?",
      answer:
        "Founded in 2016, CyberShield provides comprehensive technology and digital services across AI & LLMs, Cloud infrastructure, Backend distributed backbones, Web & Apps, Digital Marketing (creator UGC & performance media), and multi-tenant SaaS platforms.",
    },
    {
      question: "What are CyberShield's 6 sister brands?",
      answer:
        "CyberShield operates 6 dedicated brands: PhonoTell (Enterprise Voice AI & Telephony), Converro (Enterprise Workflow CRM), SenderBot (WhatsApp API & Conversational Ops), Adlyngo (Growth & Performance Media Agency), IDS (Institute of Digital Studies - Premier Live Cohort EdTech), and SkillGrow (Accessible On-Demand EdTech).",
    },
    {
      question: "Does CyberShield outsource any software or AI development?",
      answer:
        "No. We enforce a strict zero-outsourcing policy. Every platform, distributed system, AI pipeline, and design token is conceived, built, and maintained in-house by our team of 120+ specialists.",
    },
    {
      question: "Where is CyberShield headquartered?",
      answer:
        "CyberShield Technologies is headquartered at F-407, 4th Floor, Artha Mart, Greater Noida West, UP 201318, India.",
    },
    {
      question: "How can enterprise teams partner with CyberShield?",
      answer:
        "We partner with high-growth startups and global enterprises on custom software engineering, cloud migration, autonomous AI workflow integration, and full-funnel media scaling.",
    },
  ];

  return (
    <div className="w-full bg-white text-[#000416] overflow-x-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* 1. HERO SECTION */}
      <section className="w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="container-02">
          <div className="flex flex-col gap-10 sm:gap-14">
            {/* Hero Text Content */}
            <div className="max-w-[780px] flex flex-col gap-5 sm:gap-6">
              <h1 className="heading-01 font-medium tracking-tight text-[#000416]">
                Architecting the systems and digital services that power modern enterprises
              </h1>
              <p className="body-regular-01 text-[#4a4d5a] max-w-[620px]">
                Founded in 2016, CyberShield Technologies is a tech and digital services company delivering end-to-end solutions in AI, Cloud, Backend, Web &amp; Apps, Digital Marketing, and SaaS, backed by 6 sister brands.
              </p>
              <div className="pt-2">
                <div className="btn-wrap">
                  <Link
                    href="/contact"
                    className="btn-01-neon text-white cursor-pointer inline-block"
                  >
                    <span className="btn-text-wrap">
                      <span className="btn-text _01">Get in touch</span>
                      <span className="btn-text _02">Get in touch</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Asymmetric 3-Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              {/* Left Large Main Hero Image */}
              <div className="md:col-span-8 rounded-[28px] sm:rounded-[36px] overflow-hidden relative min-h-[300px] sm:min-h-[440px] lg:min-h-[480px]">
                <Image
                  src="/images/about/hero-team-01.avif"
                  alt="Team collaboration"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Right Stacked 2 Images */}
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-5 sm:gap-6">
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] overflow-hidden relative min-h-[190px] sm:min-h-[210px]">
                  <Image
                    src="/images/about/hero-team-02.avif"
                    alt="Team member"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex-1 rounded-[28px] sm:rounded-[36px] overflow-hidden relative min-h-[190px] sm:min-h-[210px]">
                  <Image
                    src="/images/about/hero-team-03.avif"
                    alt="Team meeting"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IMPACT & STATS SECTION + TESTIMONIAL CARD */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]">
        <div className="container-01">
          <div className="flex flex-col gap-12 sm:gap-16">
            {/* Heading */}
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                The impact we’ve created for businesses
              </h2>
            </div>

            {/* 4 Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-[#f7f7f8] border border-[#ebebeb] flex flex-col justify-between min-h-[180px] sm:min-h-[220px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="heading-01 font-medium text-[#000416] flex items-baseline">
                    <span>{item.number}</span>
                    <span className="text-[#000416] ml-0.5">{item.suffix}</span>
                  </div>
                  <p className="body-regular-01 text-[#4a4d5a] mt-4">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Card */}
            <div className="rounded-[32px] sm:rounded-[40px] bg-[#f7f7f8] border border-[#ebebeb] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative overflow-hidden">
              <div className="flex-1 flex flex-col gap-6 relative z-10">
                {/* Quote Icon */}
                <svg width="38" height="30" viewBox="0 0 38 30" fill="none" className="shrink-0">
                  <path
                    d="M0 30L8.7465 0H17.6703L12.7652 30H0ZM20.3297 30L29.0762 0H38L33.0949 30H20.3297Z"
                    fill="#CFCFCF"
                  />
                </svg>

                <h3 className="sub-heading-01 font-medium text-[#000416] leading-snug">
                  CyberShield combines deep distributed engineering with autonomous AI workflows, building software that compounds for the long horizon.
                </h3>

                <div className="body-regular-01 text-[#000416]">
                  <span className="font-semibold text-[#000416]">Enterprise Partner,</span>{" "}
                  <span className="text-[#797a7c]">Digital Systems &amp; Operations</span>
                </div>
              </div>

              {/* Client Portrait with Neurex ambient float */}
              <div className="relative shrink-0 w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/images/about/testimonial-client.avif"
                  alt="Client Courtney"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INNOVATION & DETAILS ASYMMETRIC GRID */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]">
        <div className="container-01">
          <div className="flex flex-col gap-10 sm:gap-14">
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                Innovate marketing system to boost your business
              </h2>
            </div>

            {/* Top Panoramic Banner */}
            <div className="w-full rounded-[28px] sm:rounded-[36px] overflow-hidden relative h-[280px] sm:h-[420px] lg:h-[480px]">
              <Image
                src="/images/about/detail-wide.avif"
                alt="Marketing team system"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom 2 Asymmetric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Card 1: Text Left + Image Right */}
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#ebebeb] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex-1 flex flex-col gap-2">
                  <h3 className="sub-heading-02 font-medium text-[#000416]">
                    Go beyond your goals
                  </h3>
                  <p className="body-regular-01 text-[#4a4d5a]">
                    Grow confidently with the grow Plan 3% to start, then 1% ongoing
                  </p>
                </div>
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden relative shrink-0">
                  <Image
                    src="/images/about/detail-sub-01.avif"
                    alt="Growth goals"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Card 2: Image Left + Text Right */}
              <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#ebebeb] p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-2xl overflow-hidden relative shrink-0 order-2 sm:order-1">
                  <Image
                    src="/images/about/detail-sub-02.avif"
                    alt="Flexible system"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2 order-1 sm:order-2">
                  <h3 className="sub-heading-02 font-medium text-[#000416]">
                    Flexible deposits
                  </h3>
                  <p className="body-regular-01 text-[#4a4d5a]">
                    Automatic savings, yours whenever you need them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE BELIEFS 6-CARD GRID */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb] bg-[#f7f7f8]">
        <div className="container-01">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                Core beliefs behind every business decision
              </h2>
            </div>

            {/* 6 Belief Cards in 3x2 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {beliefs.map((b, i) => {
                const IconComponent = b.Icon;
                return (
                  <div
                    key={i}
                    className="p-8 sm:p-10 rounded-[28px] sm:rounded-[32px] bg-white border border-[#ebebeb] flex flex-col gap-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#f7f7f8] border border-[#ebebeb] flex items-center justify-center shrink-0">
                      <IconComponent />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="sub-heading-03 font-medium text-[#000416]">
                        {b.title}
                      </h3>
                      <p className="body-regular-02 text-[#4a4d5a]">
                        {b.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE MINDS TEAM GRID */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]">
        <div className="container-01">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                Meet the minds driving our achievements
              </h2>
            </div>

            {/* 6 Team Member Cards in 3x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {teamMembers.map((member, i) => (
                <div
                  key={i}
                  className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#ebebeb] overflow-hidden flex flex-col group shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Photo with subtle hover gradient */}
                  <div className="w-full relative h-[320px] sm:h-[360px] overflow-hidden bg-[#f0f0f2]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Info Box */}
                  <div className="p-6 sm:p-7 flex flex-col gap-3">
                    <h3 className="sub-heading-03 font-medium text-[#000416]">
                      {member.name}
                    </h3>
                    <div className="flex items-center justify-between gap-4 pt-1 border-t border-[#ebebeb]">
                      <span className="body-regular-02 text-[#4a4d5a]">
                        {member.role}
                      </span>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#f7f7f8] hover:bg-[#000416] hover:text-white flex items-center justify-center transition-colors text-[#4a4d5a]"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
                          </svg>
                        </a>
                        <a
                          href={member.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#f7f7f8] hover:bg-[#000416] hover:text-white flex items-center justify-center transition-colors text-[#4a4d5a]"
                          aria-label={`${member.name} X`}
                        >
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. GLOBAL REACH CONTACT SECTION */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb] bg-[#f7f7f8]">
        <div className="container-01">
          <div className="flex flex-col gap-10 sm:gap-14">
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                Expanding our reach for connect you globally
              </h2>
            </div>

            {/* Contact Card Details Box */}
            <div className="rounded-[32px] sm:rounded-[40px] bg-white border border-[#ebebeb] p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col gap-8 sm:gap-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-[#ebebeb]">
                <div className="flex flex-col gap-1.5">
                  <span className="body-regular-01 text-[#797a7c]">Address</span>
                  <span className="body-medium-01 text-lg font-medium text-[#000416]">
                    F-407, 4th Floor, Artha Mart, Greater Noida West, UP 201318, India
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="body-regular-01 text-[#797a7c]">Email address</span>
                  <a
                    href="mailto:support@cybershield.in"
                    className="body-medium-01 text-lg font-medium text-[#000416] hover:text-[#1CA3BB] transition-colors"
                  >
                    support@cybershield.in
                  </a>
                </div>
              </div>

              {/* Social Channels Link Strip */}
              <div className="flex flex-wrap items-center gap-3">
                {[
                  { name: "Facebook", href: "https://www.facebook.com/" },
                  { name: "Twitter / X", href: "https://x.com/" },
                  { name: "Linkedin", href: "https://www.linkedin.com/" },
                  { name: "Instagram", href: "https://www.instagram.com/" },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#ebebeb] bg-[#f7f7f8] hover:bg-[#000416] hover:text-white text-[#000416] font-medium text-sm transition-all duration-200 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRightIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="w-full py-20 sm:py-24 lg:py-28 border-t border-[#ebebeb]">
        <div className="container-01">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="max-w-[680px]">
              <h2 className="heading-02 font-medium text-[#000416]">
                Frequently asked question
              </h2>
            </div>

            {/* Split Image & Accordion List */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Portrait Image */}
              <div className="lg:col-span-5 rounded-[28px] sm:rounded-[36px] overflow-hidden relative min-h-[380px] sm:min-h-[500px] lg:min-h-[560px]">
                <Image
                  src="/images/about/faq-portrait.avif"
                  alt="CyberShield advisory team"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Right Accordion List */}
              <div className="lg:col-span-7 flex flex-col divide-y divide-[#ebebeb]">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                      <button
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                        aria-expanded={isOpen}
                      >
                        <span className="sub-heading-03 font-medium text-[#000416] group-hover:text-[#1CA3BB] transition-colors">
                          {faq.question}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#f7f7f8] border border-[#ebebeb] flex items-center justify-center shrink-0 transition-colors group-hover:border-[#1CA3BB]">
                          {isOpen ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                              <line x1="12" y1="5" x2="12" y2="19" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                          )}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="body-regular-01 text-[#4a4d5a] pt-4 pr-10">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
