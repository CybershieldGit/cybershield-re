"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function JobApplicationClient({ role, allRoles = [] }) {
  const { openConsultation } = useModal();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: `Application for ${role.title}`,
    location: "",
    resume: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 750);
  };

  // Find other roles for "Find your perfect role"
  const otherRoles = allRoles.filter((r) => r.slug !== role.slug).slice(0, 3);

  return (
    <div className="w-full bg-[#f7f7f8] min-h-screen text-[#000416]">
      {/* =========================================================================
          HERO & 2-COLUMN APPLICATION SECTION
      ========================================================================== */}
      <section className="w-full pt-32 sm:pt-40 pb-20 border-b border-black/[0.06]">
        <div className="container-02">
          
          {/* Header Title & Tags */}
          <div className="career-single">
            <div className="header-wrap-02">
              <h1 className="heading-02 font-medium tracking-tight text-[#000416]">
                {role.title}
              </h1>
            </div>

            <div className="career-card-text _02 flex items-center mt-4">
              <div className="career-location mr-3 pr-3 border-r border-black/15">
                <div className="color-secondary text-[16px] text-[#4A4D5A]">
                  {role.location}
                </div>
              </div>
              <div className="color-secondary text-[16px] text-[#4A4D5A]">
                {role.type}
              </div>
            </div>

            {/* 2-Column Split: Form (Left, Sticky) & Job Details (Right, Scrolling) */}
            <div className="career-details-wrap mt-14 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-14 relative">
              
              {/* Left Column: Application Form Wrapper (Sticky on Desktop) */}
              <div
                className="career-form-wrapper w-full lg:w-[568px] shrink-0 bg-[#f1f1f1] rounded-[36px] p-6 sm:p-10 border border-black/[0.04] shadow-sm lg:sticky lg:top-[100px] z-10"
                style={{ alignSelf: 'flex-start' }}
              >
                <h3 className="sub-heading-02 text-[22px] sm:text-[24px] font-medium text-[#000416]">
                  Application Form
                </h3>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="career-form mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                      {/* First Name */}
                      <div className="career-field-wrap flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          First Name <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="career-field-wrap flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Last Name <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Email Address */}
                      <div className="career-field-wrap flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Email Address <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Phone Number */}
                      <div className="career-field-wrap flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Phone Number <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Subject */}
                      <div className="career-field-wrap sm:col-span-2 flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Subject <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Location */}
                      <div className="career-field-wrap sm:col-span-2 flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Location <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Resume */}
                      <div className="career-field-wrap sm:col-span-2 flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          Resume <span className="text-red-500 font-medium">*</span>
                        </label>
                        <input
                          type="text"
                          name="resume"
                          value={formData.resume}
                          onChange={handleChange}
                          required
                          placeholder=""
                          className="career-form-field w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* How can we help */}
                      <div className="career-field-wrap sm:col-span-2 flex flex-col gap-2">
                        <label className="body-regular-01 text-[15px] font-normal text-[#4A4D5A] flex items-center gap-1">
                          How can we help <span className="text-red-500 font-medium">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder=""
                          className="career-form-field textarea w-full px-4 py-3.5 rounded-[16px] bg-white text-[#000416] border border-black/10 focus:border-[#000416] focus:outline-none transition-colors min-h-[172px] resize-y text-[15px] shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                        />
                      </div>

                      {/* Submit Button Wrap - Full Width */}
                      <div className="form-btn-wrap sm:col-span-2 pt-2 w-full">
                        <div className="btn-wrap w-full">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-01-link w-full bg-[#fffe6a] hover:bg-[#f5f458] text-[#000416] py-3.5 rounded-full font-medium text-[16px] flex items-center justify-center transition-all duration-200 shadow-sm disabled:opacity-60 cursor-pointer"
                          >
                            <span className="btn-text-wrap w-full text-center">
                              <span className="btn-text _01">
                                {isSubmitting ? "Submitting application..." : "Submit application"}
                              </span>
                              <span className="btn-text _02">
                                {isSubmitting ? "Submitting application..." : "Submit application"}
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-8 p-6 sm:p-8 rounded-[24px] bg-white border border-black/10 shadow-sm text-center flex flex-col items-center"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#fffe6a] flex items-center justify-center mb-4 text-[#000416]">
                        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <h4 className="sub-heading-02 text-[20px] font-medium text-[#000416] mb-2">
                        Thank you! Your submission has been received!
                      </h4>
                      <p className="body-regular-01 text-[#4A4D5A] text-[15px] max-w-[400px]">
                        Our Talent Acquisition team will carefully review your application for <strong>{role.title}</strong> and connect with you shortly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            subject: `Application for ${role.title}`,
                            location: "",
                            resume: "",
                            message: ""
                          });
                        }}
                        className="mt-6 text-sm font-medium text-[#000416] underline hover:opacity-75 transition-opacity"
                      >
                        Submit another response
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Column: Job Details Specifications (Scrolls Naturally) */}
              <div className="career-details w-full lg:w-[522px] flex flex-col gap-10 pb-16">
                
                {/* 1. Why join us */}
                <div className="career-row flex flex-col gap-3">
                  <h2 className="sub-heading-01 font-medium text-[#000416] text-[24px] sm:text-[28px] tracking-tight">
                    Why join us
                  </h2>
                  <p className="body-regular-01 text-[#4A4D5A] leading-[1.65] text-[16px] sm:text-[17px]">
                    {role.whyJoin}
                  </p>
                </div>

                {/* 2. Job Description */}
                <div className="career-row flex flex-col gap-3">
                  <h2 className="sub-heading-01 font-medium text-[#000416] text-[24px] sm:text-[28px] tracking-tight">
                    Job Description:
                  </h2>
                  <p className="body-regular-01 text-[#4A4D5A] leading-[1.65] text-[16px] sm:text-[17px]">
                    {role.description}
                  </p>
                </div>

                {/* 3. Key Responsibilities */}
                <div className="career-row flex flex-col gap-3">
                  <h2 className="sub-heading-01 font-medium text-[#000416] text-[24px] sm:text-[28px] tracking-tight">
                    Key Responsibilities
                  </h2>
                  <ul className="body-regular-01 text-[#4A4D5A] space-y-3 list-disc pl-5 leading-[1.6] text-[16px]">
                    {role.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* 4. Requirements */}
                <div className="career-row flex flex-col gap-3">
                  <h2 className="sub-heading-01 font-medium text-[#000416] text-[24px] sm:text-[28px] tracking-tight">
                    Requirements:
                  </h2>
                  <ul className="body-regular-01 text-[#4A4D5A] space-y-3 list-disc pl-5 leading-[1.6] text-[16px]">
                    {role.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* 5. What We Offer */}
                <div className="career-row flex flex-col gap-3">
                  <h2 className="sub-heading-01 font-medium text-[#000416] text-[24px] sm:text-[28px] tracking-tight">
                    What We Offer:
                  </h2>
                  <ul className="body-regular-01 text-[#4A4D5A] space-y-3 list-disc pl-5 leading-[1.6] text-[16px]">
                    {role.offers.map((offer, idx) => (
                      <li key={idx}>{offer}</li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          BOTTOM SECTION: FIND YOUR PERFECT ROLE (Related Openings)
      ========================================================================== */}
      <section className="section-02 w-full py-20 sm:py-28 bg-[#ffffff]">
        <div className="container-01">
          <div className="careers">
            
            <div className="header mb-12 sm:mb-16">
              <div className="header-wrap-02 max-w-[680px]">
                <h2 className="heading-02 font-medium text-[#000416]">
                  Find your perfect role
                </h2>
              </div>
            </div>

            <div className="career-wrap">
              <div className="career-category flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                
                {/* Left Category Image Box */}
                <div
                  className="career-img-box w-full lg:w-[380px] shrink-0 h-[340px] sm:h-[400px] rounded-[32px] overflow-hidden shadow-sm border border-black/[0.04]"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/career/career-cat-01.avif"
                    alt="Office collaboration at CyberShield"
                    fill
                    sizes="(max-width: 1024px) 100vw, 380px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Role Listings */}
                <div className="career-collection-wrap w-full flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className="tag inline-block px-3.5 py-1 text-[12px] font-mono font-bold uppercase tracking-wider rounded-full bg-[#f0f0f0] text-[#000416]">
                      {role.category || "Open Roles"}
                    </span>
                  </div>

                  <div className="career-list flex flex-col divide-y divide-black/[0.08] border-y border-black/[0.08]">
                    {otherRoles.map((r, idx) => (
                      <div
                        key={idx}
                        className="career-card py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                      >
                        <div className="career-card-text-wrap flex flex-col gap-1.5">
                          <Link
                            href={`/careers/${r.slug}`}
                            className="body-medium-01 text-[18px] text-[#000416] group-hover:text-[#1CA3BB] transition-colors"
                          >
                            {r.title}
                          </Link>
                          <div className="career-card-text flex items-center text-[14px] text-[#4A4D5A]">
                            <div className="career-location mr-3 pr-3 border-r border-black/15">
                              <span className="color-secondary">{r.location}</span>
                            </div>
                            <span className="color-secondary">{r.type}</span>
                          </div>
                        </div>

                        <div className="btn-wrap self-start sm:self-auto">
                          <Link
                            href={`/careers/${r.slug}`}
                            className="btn-01-link bg-[#fffe6a] hover:bg-[#f5f458] text-[#000416] px-6 py-2.5 rounded-full font-medium text-[14px] inline-flex items-center justify-center transition-all duration-200 shadow-sm"
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
        </div>
      </section>

      {/* =========================================================================
          SECTION: 14-STOP GRADIENT CTA BANNER (.cta-section.gradient-01-my)
      ========================================================================== */}
      <div className="cta-footer">
        <section className="cta-section gradient-01-my w-full py-24 sm:py-32 text-white relative overflow-hidden">
          <div className="container-01">
            <div className="cta">
              <div className="cta-inner max-w-[960px] mx-auto text-center flex flex-col items-center">
                <div className="cta-content flex flex-col items-center">
                  
                  <div className="cta-content-top flex flex-col items-center">
                    <h2 className="heading-01 font-medium text-white max-w-[850px] leading-[1.12]">
                      Achieve more with simplicity and smart solutions
                    </h2>
                    <div className="cta-short mt-6 max-w-[620px]">
                      <div className="op-70 text-white/75 text-[16px] sm:text-[18px] leading-relaxed">
                        <p className="body-regular-01">
                          Whether you’re a startup or scaling enterprise, our platform empowers you to make better decisions and unlock new opportunities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="cta-bottom mt-10">
                    <div className="btn-wrap">
                      <button
                        onClick={() => openConsultation("Careers CTA Consultation")}
                        className="btn-01-link bg-[#fffe6a] hover:bg-[#f5f458] text-[#000416] px-8 py-4 rounded-full font-medium text-[16px] inline-flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
                      >
                        <span className="btn-text-wrap">
                          <span className="btn-text _01">Get started</span>
                          <span className="btn-text _02">Get started</span>
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            NEUREX IDENTICAL FOOTER
        ========================================================================== */}
        <footer className="footer w-full bg-[#f7f7f8] pt-16 pb-12 border-t border-black/[0.06]">
          <div className="container-01">
            
            {/* Social Links Row */}
            <div className="social-wrapper mb-16 pb-12 border-b border-black/[0.08] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Facebook", href: "https://facebook.com", icon: "M14 13.499H16.5L17.5 9.49902H14V7.49902C14 6.46964 14 5.49902 16 5.49902H17.5V2.13912C17.1743 2.09587 15.943 1.99902 14.6429 1.99902C11.9284 1.99902 10 3.65588 10 6.69873V9.49902H7V13.499H10V21.999H14V13.499Z" },
                { name: "Linkedin", href: "https://linkedin.com", icon: "M6.94146 4.99895C6.94109 5.81326 6.44706 6.54604 5.69232 6.85175C4.93758 7.15747 4.07285 6.97507 3.50588 6.39057C2.93891 5.80606 2.78293 4.93617 3.11148 4.19109C3.44004 3.44601 4.18752 2.97452 5.00146 2.99895C6.08253 3.0314 6.94195 3.91739 6.94146 4.99895ZM7.00146 8.47895H3.00146V20.9989H7.00146V8.47895ZM13.3215 8.47895H9.34146V20.9989H13.2815V14.4289C13.2815 10.7689 18.0515 10.4289 18.0515 14.4289V20.9989H22.0015V13.0689C22.0015 6.89895 14.9415 7.12895 13.2815 10.1589L13.3215 8.47895Z" },
                { name: "Twitter", href: "https://twitter.com", icon: "M17.6874 3.06152L12.6907 8.77327L8.37045 3.06152H2.11328L9.58961 12.8377L2.50378 20.9365H5.53795L11.0068 14.6876L15.7863 20.9365H21.8885L14.095 10.6332L20.7198 3.06152H17.6874ZM16.6232 19.1215L5.65436 4.78119H7.45745L18.3034 19.1215H16.6232Z" },
                { name: "Instagram", href: "https://instagram.com", icon: "M13.0271 2C14.1525 2.00186 14.7228 2.00782 15.2156 2.02249L15.4097 2.02883C15.6339 2.0368 15.8551 2.0468 16.1218 2.0593C17.1859 2.10847 17.9118 2.2768 18.5493 2.5243C19.2084 2.77847 19.7651 3.1218 20.3209 3.67764C20.8759 4.23347 21.2193 4.7918 21.4743 5.4493C21.7209 6.08597 21.8893 6.81264 21.9393 7.8768C21.9512 8.14347 21.9608 8.36467 21.9687 8.58891L21.975 8.783C21.9896 9.27574 21.9963 9.84613 21.9984 10.9716L21.9992 11.7172C21.9993 11.8083 21.9993 11.9023 21.9993 11.9993L21.9992 12.2814L21.9986 13.0271C21.9967 14.1525 21.9908 14.7229 21.9761 15.2156L21.9697 15.4097C21.9618 15.634 21.9518 15.8552 21.9393 16.1218C21.8901 17.186 21.7209 17.9118 21.4743 18.5493C21.2201 19.2085 20.8759 19.7652 20.3209 20.321C19.7651 20.876 19.2059 21.2193 18.5493 21.4743C17.9118 21.721 17.1859 21.8893 16.1218 21.9393C15.8551 21.9512 15.6339 21.9609 15.4097 21.9687L15.2156 21.975C14.7228 21.9897 14.1525 21.9963 13.0271 21.9985L12.2814 21.9993C12.1903 21.9993 12.0963 21.9993 11.9993 21.9993H11.7172L10.9715 21.9986C9.84612 21.9968 9.27574 21.9908 8.78299 21.9761L8.58891 21.9698C8.36466 21.9618 8.14346 21.9518 7.8768 21.9393C6.81263 21.8902 6.08763 21.721 5.4493 21.4743C4.79096 21.2202 4.23346 20.876 3.67763 20.321C3.1218 19.7652 2.7793 19.206 2.5243 18.5493C2.2768 17.9118 2.1093 17.186 2.0593 16.1218C2.04742 15.8552 2.03773 15.634 2.02988 15.4097L2.02359 15.2156C2.00896 14.7229 2.00229 14.1525 2.00013 13.0271L2 10.9716C2.00186 9.84613 2.00781 9.27574 2.02248 8.783L2.02883 8.58891C2.0368 8.36467 2.0468 8.14347 2.0593 7.8768C2.10846 6.8118 2.2768 6.0868 2.5243 5.4493C2.77846 4.79097 3.1218 4.23347 3.67763 3.67764C4.23346 3.1218 4.7918 2.7793 5.4493 2.5243C6.0868 2.2768 6.8118 2.1093 7.8768 2.0593C8.14346 2.04743 8.36466 2.03774 8.58891 2.02989L8.78299 2.0236C9.27574 2.00896 9.84612 2.00229 10.9715 2.00013L13.0271 2Z" },
                { name: "Discord", href: "https://discord.com", icon: "M19.3034 5.33618C17.9344 4.71005 16.4805 4.25372 14.9629 3.99902C14.7719 4.32801 14.5596 4.77373 14.411 5.12394C12.7969 4.89046 11.1944 4.89046 9.60255 5.12394C9.45397 4.77373 9.2311 4.32801 9.05068 3.99902C7.52251 4.25372 6.06861 4.71005 4.70915 5.33618C1.96053 9.39013 1.21766 13.3485 1.5891 17.2539C3.41443 18.5805 5.17612 19.387 6.90701 19.9177C7.33151 19.3446 7.71356 18.729 8.04255 18.0817C7.41641 17.8482 6.82211 17.5617 6.24904 17.2221C6.39762 17.116 6.5462 16.9993 6.68416 16.8825C10.1438 18.4638 13.8911 18.4638 17.3082 16.8825C17.4568 16.9993 17.5948 17.116 17.7434 17.2221C17.1703 17.5617 16.576 17.8482 15.9499 18.0817C16.2789 18.729 16.6609 19.3446 17.0854 19.9177C18.8152 19.387 20.5875 18.5805 22.4033 17.2539C22.8596 12.7331 21.6806 8.80649 19.3034 5.33618Z" },
                { name: "Youtube", href: "https://youtube.com", icon: "M12.2439 3.99902C12.778 4.00196 14.1143 4.01488 15.5341 4.07175L16.0375 4.0937C17.467 4.16138 18.8953 4.277 19.6037 4.47452C20.5486 4.73997 21.2913 5.51452 21.5423 6.49634C21.942 8.05543 21.992 11.0984 21.9982 11.8348L21.9991 11.9874V11.9981C21.9991 11.9981 21.9991 12.0018 21.9991 12.0089L21.9982 12.1615C21.992 12.8979 21.942 15.9409 21.5423 17.5C21.2878 18.4854 20.5451 19.26 19.6037 19.5218C18.8953 19.7193 17.467 19.8349 16.0375 19.9026L15.5341 19.9245C14.1143 19.9814 12.778 19.9943 12.2439 19.9973L12.0095 19.9981H11.9991C11.9991 19.9981 11.9956 19.9981 11.9887 19.9981L11.7545 19.9973C10.6241 19.9911 5.89772 19.94 4.39451 19.5218C3.4496 19.2563 2.70692 18.4818 2.45587 17.5C2.0562 15.9409 2.00624 12.8979 2 12.1615V11.8348C2.00624 11.0984 2.0562 8.05543 2.45587 6.49634C2.7104 5.51088 3.45308 4.73634 4.39451 4.47452C5.89772 4.05625 10.6241 4.00524 11.7545 3.99902H12.2439ZM9.99911 8.49816V15.4981L15.9991 11.9981L9.99911 8.49816Z" }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/[0.06] hover:border-black/20 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 fill-[#4A4D5A] group-hover:fill-[#000416] transition-colors" viewBox="0 0 24 24">
                      <path d={item.icon} />
                    </svg>
                    <span className="text-[14px] font-medium text-[#000416]">{item.name}</span>
                  </div>
                  <svg className="w-4 h-4 fill-[#000416] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" viewBox="0 0 24 24">
                    <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" />
                  </svg>
                </a>
              ))}
            </div>

            {/* 4-Column Navigation Grid */}
            <div className="footer-wrap grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 mb-16">
              
              {/* Column 1: Overview */}
              <div className="flex flex-col gap-3">
                <span className="footer-title text-[12px] font-mono font-bold uppercase tracking-wider text-[#797a7c]">
                  overview
                </span>
                <Link href="/" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Home 01</Link>
                <Link href="/about" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">About</Link>
                <Link href="/career" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Career</Link>
                <Link href={`/careers/${role.slug}`} className="text-[15px] font-medium text-[#000416]">Career single</Link>
              </div>

              {/* Column 2: Company */}
              <div className="flex flex-col gap-3">
                <span className="footer-title text-[12px] font-mono font-bold uppercase tracking-wider text-[#797a7c]">
                  Company
                </span>
                <Link href="/pricing" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Pricing 01</Link>
                <Link href="/contact" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Contact 01</Link>
                <Link href="/contact" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Contact 02</Link>
              </div>

              {/* Column 3: Resources */}
              <div className="flex flex-col gap-3">
                <span className="footer-title text-[12px] font-mono font-bold uppercase tracking-wider text-[#797a7c]">
                  Resources
                </span>
                <Link href="/blog" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Blog 01</Link>
                <Link href="/blog" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Blog 02</Link>
                <Link href="/blog" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Blog Single</Link>
              </div>

              {/* Column 4: Utilities */}
              <div className="flex flex-col gap-3">
                <span className="footer-title text-[12px] font-mono font-bold uppercase tracking-wider text-[#797a7c]">
                  Utilities
                </span>
                <Link href="/login" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Log in</Link>
                <Link href="/signup" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Sign Up</Link>
                <Link href="/style-guide" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">Style guide</Link>
                <Link href="/license" className="text-[15px] text-[#4A4D5A] hover:text-[#000416] transition-colors">License</Link>
              </div>

            </div>

            {/* Bottom Branding & Legal */}
            <div className="pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#000416] text-[#fffe6a] flex items-center justify-center font-bold text-sm">
                  CS
                </div>
                <span className="font-semibold text-[17px] tracking-tight text-[#000416]">
                  CYBERSHIELD
                </span>
              </div>
              <p className="text-[14px] text-[#797a7c]">
                © {new Date().getFullYear()} CyberShield Technologies Inc. All rights reserved.
              </p>
            </div>

          </div>
        </footer>
      </div>

    </div>
  );
}
