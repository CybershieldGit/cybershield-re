"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedTerms) {
      alert("Please accept the Terms & Conditions before submitting.");
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    });
    setAgreedTerms(false);
  };

  return (
    <main className="w-full bg-white text-[#000416]">
      {/* 1. Hero Section (gradient-01-my, exact Neurex Contact-02 structure) */}
      <section className="w-full pt-32 sm:pt-40 lg:pt-44 pb-20 sm:pb-28 lg:pb-32 gradient-01-my text-white relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#1ca3bb]/20 via-[#fffe6a]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
          
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[780px] mx-auto text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.12] tracking-[-1.5px] lg:tracking-[-2px] text-white">
              Reach out for support <br className="hidden sm:block" />
              and inquiries
            </h1>
          </motion.div>

          {/* 2-Column Split: Form Card on Left, Value Proposition & Feature Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_1fr] gap-8 lg:gap-14 items-start">
            
            {/* Left Column: The Floating White Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white text-[#000416] rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(0,4,22,0.25)] border border-black/5 relative"
            >
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#fffe6a] text-[#000416] flex items-center justify-center font-bold text-2xl shadow-md">
                    ✓
                  </div>
                  <h3 className="text-2xl font-medium text-[#000416]">
                    Inquiry Dispatched
                  </h3>
                  <p className="text-sm text-[#4a4d5a] max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#000416]">{formState.name}</span>. Your inquiry has been routed directly to our leadership pod. We will review your message and reply to{" "}
                    <span className="font-semibold text-[#000416]">{formState.email}</span> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-full bg-[#000416] text-white text-sm font-medium hover:bg-[#1a233a] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl sm:text-[28px] font-medium text-[#000416] tracking-tight mb-8">
                    Fill the form below
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full name* */}
                    <div className="space-y-1">
                      <label className="text-sm font-normal text-[#000416]">
                        Full name*
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder=""
                        className="w-full border-b border-[#e5e5e7] py-2 text-base text-[#000416] focus:border-[#000416] focus:outline-none transition-colors bg-transparent"
                      />
                    </div>

                    {/* Email address* */}
                    <div className="space-y-1">
                      <label className="text-sm font-normal text-[#000416]">
                        Email address*
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder=""
                        className="w-full border-b border-[#e5e5e7] py-2 text-base text-[#000416] focus:border-[#000416] focus:outline-none transition-colors bg-transparent"
                      />
                    </div>

                    {/* Company* */}
                    <div className="space-y-1">
                      <label className="text-sm font-normal text-[#000416]">
                        Company*
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        placeholder=""
                        className="w-full border-b border-[#e5e5e7] py-2 text-base text-[#000416] focus:border-[#000416] focus:outline-none transition-colors bg-transparent"
                      />
                    </div>

                    {/* Message or Inquiry* */}
                    <div className="space-y-1">
                      <label className="text-sm font-normal text-[#000416]">
                        Message or Inquiry*
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder=""
                        className="w-full border-b border-[#e5e5e7] py-2 text-base text-[#000416] focus:border-[#000416] focus:outline-none transition-colors bg-transparent resize-none"
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <label className="flex items-center gap-3 pt-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        required
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="w-4 h-4 rounded border-[#d1d1d6] text-[#000416] focus:ring-0 cursor-pointer accent-[#000416]"
                      />
                      <span className="text-xs sm:text-sm text-[#4a4d5a]">
                        I have read and accept the Terms &amp; Conditions
                      </span>
                    </label>

                    {/* Submit Button (btn-01-neon matching Neurex) */}
                    <div className="pt-3">
                      <div className="btn-wrap w-full">
                        <button
                          type="submit"
                          className="btn-01-neon w-full cursor-pointer flex justify-center items-center py-3.5 sm:py-4 rounded-full text-center"
                        >
                          <span className="btn-text-wrap">
                            <span className="btn-text _01">Submit</span>
                            <span className="btn-text _02">Submit</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right Column: Strategic Value Proposition & 2 Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center pt-2 lg:pt-6"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-medium text-white tracking-[-0.8px] leading-[1.2] mb-3">
                Accelerate your workflow together with us
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-8">
                Our solutions help you streamline processes, reduce errors, and boost productivity across your entire team.
              </p>

              {/* Feature Card 1: Seamless Teamwork */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 flex items-start gap-4 text-white hover:bg-white/15 transition-all mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  {/* Users / Teamwork SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base sm:text-lg font-medium text-white mb-1">
                    Seamless Teamwork
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Coordinate tasks and projects without any friction.
                  </p>
                </div>
              </div>

              {/* Feature Card 2: Smart Automation */}
              <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-[24px] p-5 sm:p-6 flex items-start gap-4 text-white hover:bg-white/15 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0">
                  {/* Smart Automation / Lightbulb SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14.85 13.42L14 14.02V16H10V14.02L9.15 13.42C7.8 12.47 7 10.97 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.97 16.2 12.47 14.85 13.42Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base sm:text-lg font-medium text-white mb-1">
                    Smart Automation
                  </h4>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Coordinate tasks and projects without any friction.
                  </p>
                </div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Office Locations & Contact Details Section (section-04, pure white canvas) */}
      <section className="w-full py-20 sm:py-28 lg:py-32 bg-white text-[#000416]">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Section Heading */}
          <div className="mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-medium leading-[1.15] tracking-[-1.5px] text-[#000416]">
              Our office locations and contact details
            </h2>
          </div>

          {/* Interactive Map Visual Box */}
          <div className="h-[340px] sm:h-[460px] lg:h-[520px] rounded-[28px] sm:rounded-[36px] overflow-hidden relative shadow-md border border-[#ebebeb] bg-[#eef1f6] mb-12 sm:mb-16">
            {/* Live Google Map iframe centered on Greater Noida West Artha Mart */}
            <iframe
              src="https://maps.google.com/maps?q=Artha%20Mart%20Greater%20Noida%20West&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "contrast(1.05) saturate(1.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CyberShield Headquarters Map"
              className="w-full h-full object-cover"
            />

            {/* Floating Head Office Pin Tooltip Card (Exact Neurex Callout Style) */}
            <a
              href="https://maps.google.com/?q=Artha+Mart+Greater+Noida+West"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-8 sm:top-12 left-6 sm:left-12 z-10 bg-white rounded-2xl p-3.5 sm:p-4 shadow-[0_16px_36px_-6px_rgba(0,4,22,0.22)] border border-[#ebebeb] flex items-center gap-3.5 max-w-[320px] sm:max-w-[380px] hover:scale-[1.02] transition-transform group cursor-pointer"
            >
              {/* Thumbnail of head office */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 relative bg-[#000416]">
                <Image
                  src="/images/hero-light-headquarters.jpg"
                  alt="CyberShield Head Office"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Head office text & address */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-[#000416]">Head office</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                </div>
                <p className="text-[11px] sm:text-xs text-[#4a4d5a] leading-tight mt-0.5 group-hover:text-[#000416] transition-colors">
                  F-407, 4th Floor, Artha Mart, Greater Noida West, UP 201318, India
                </p>
              </div>
            </a>
          </div>

          {/* 4 Contact Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* Card 1: Office address */}
            <div className="bg-[#f7f7f8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#f0f0f2] transition-colors">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#000416] shadow-sm mb-6">
                {/* Map Pin Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-[#000416] mb-1.5">
                  Office address
                </h4>
                <p className="text-sm text-[#4a4d5a] leading-relaxed">
                  F-407, 4th Floor, Artha Mart, Greater Noida West, UP 201318, India
                </p>
              </div>
            </div>

            {/* Card 2: Open hour */}
            <div className="bg-[#f7f7f8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#f0f0f2] transition-colors">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#000416] shadow-sm mb-6">
                {/* Clock / Open Hours Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-[#000416] mb-1.5">
                  Open hour
                </h4>
                <p className="text-sm text-[#4a4d5a] leading-relaxed">
                  9:30 AM to 6:30 PM (Mon–Fri)
                </p>
              </div>
            </div>

            {/* Card 3: Support */}
            <div className="bg-[#f7f7f8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#f0f0f2] transition-colors">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#000416] shadow-sm mb-6">
                {/* Headphones / Support Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 1C6.48 1 2 5.48 2 11V18C2 19.66 3.34 21 5 21H8V13H4V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V13H16V21H19C20.66 21 22 19.66 22 18V11C22 5.48 17.52 1 12 1Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-[#000416] mb-1.5">
                  Support
                </h4>
                <p className="text-sm text-[#4a4d5a] leading-relaxed">
                  <a href="mailto:support@cybershield.in" className="hover:text-[#000416] transition-colors">
                    support@cybershield.in
                  </a>
                  <br />
                  <a href="mailto:partnerships@cybershield.in" className="hover:text-[#000416] transition-colors">
                    partnerships@cybershield.in
                  </a>
                </p>
              </div>
            </div>

            {/* Card 4: Call us */}
            <div className="bg-[#f7f7f8] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between hover:bg-[#f0f0f2] transition-colors">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-[#000416] shadow-sm mb-6">
                {/* Phone Icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-base font-medium text-[#000416] mb-1.5">
                  Call us
                </h4>
                <p className="text-sm text-[#4a4d5a] leading-relaxed">
                  +91 120 456 7890
                  <br />
                  9:30 AM to 6:30 PM (Mon–Fri)
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}

