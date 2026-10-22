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
      <section className="w-full pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 border-b border-black/[0.06]">
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
                            className="btn-01-link w-full bg-[#1CA3BB] hover:bg-[#168ea3] text-white py-3.5 rounded-full font-medium text-[16px] flex items-center justify-center transition-all duration-200 shadow-md disabled:opacity-60 cursor-pointer"
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
                      <div className="w-14 h-14 rounded-full bg-[#1CA3BB] flex items-center justify-center mb-4 text-white">
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
      <section className="section-02 w-full py-20 sm:py-24 lg:py-28 bg-[#ffffff]">
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
        </div>
      </section>

    </div>
  );
}
