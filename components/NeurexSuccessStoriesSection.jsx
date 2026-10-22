"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NeurexSuccessStoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      quote:
        "“CyberShield has transformed our digital infrastructure, modernizing our distributed backbones and orchestrating enterprise AI workflows that operate with sub-second reliability.”",
      author: "Executive Director",
      role: "Digital Enterprise Systems",
      logo: "/images/hero-neurex/logos/reverse.svg",
      img: "/images/hero-neurex/success-asian-girl.avif",
      imgAlt: "Technology executive collaborating in modern office",
    },
    {
      quote:
        "“Working with CyberShield means having a partner that operates what they build. From high-growth performance media to multi-tenant SaaS architectures, their team delivers enduring engineering excellence.”",
      author: "VP of Product & Technology",
      role: "Global Solutions Group",
      logo: "/images/hero-neurex/logos/reverse.svg",
      img: "/images/hero-neurex/success-female-laptop.avif",
      imgAlt: "Client executive working on laptop",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const story = stories[currentSlide];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-white text-[#000416] relative overflow-hidden border-b border-[#ebebeb]/60">
      {/* Container: max-w 1240px as per Neurex container-01 */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header Row: Heading on left, Left/Right Arrow Carousel Controls on right */}
        <div className="flex items-end justify-between gap-6 mb-12 sm:mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[530px]"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[56px] font-medium leading-[1.12] lg:leading-[64px] tracking-[-1.2px] lg:tracking-[-1.92px] text-[#000416]">
              Success stories from <br className="hidden sm:block" />
              our clients
            </h2>
          </motion.div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 pb-1">
            <button
              onClick={handlePrev}
              aria-label="Previous story"
              className="w-10 h-10 rounded-xl border border-[#ebebeb] bg-white hover:bg-[#f7f7f8] flex items-center justify-center text-[#000416] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next story"
              className="w-10 h-10 rounded-xl border border-[#ebebeb] bg-white hover:bg-[#f7f7f8] flex items-center justify-center text-[#000416] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 2-Column Success Story Showcase Card */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch"
            >
              {/* Left Column: Portrait Photo with Rounded Corners */}
              <div className="w-full h-[260px] sm:h-[400px] lg:h-[540px] rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-xl relative bg-[#f7f7f8]">
                <Image
                  src={story.img}
                  alt={story.imgAlt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Right Column: Quote Content Container in #f7f7f8 with Rounded Corners */}
              <div className="rounded-[24px] sm:rounded-[36px] bg-[#f7f7f8] p-6 sm:p-12 lg:p-16 flex flex-col justify-between gap-6 sm:gap-10">
                {/* Main Testimonial Statement */}
                <div className="pt-1 sm:pt-2">
                  <p className="text-lg sm:text-2xl lg:text-[28px] font-medium leading-[1.35] tracking-[-0.32px] text-[#000416]">
                    {story.quote}
                  </p>
                </div>

                {/* Bottom Author & Logo Row */}
                <div className="flex items-center justify-between border-t border-[#ebebeb] pt-6 sm:pt-8 mt-auto">
                  <div className="text-sm sm:text-base text-[#000416]">
                    <span className="font-semibold text-[#000416]">{story.author}</span>,{" "}
                    <span className="text-[#797a7c] font-normal">{story.role}</span>
                  </div>

                  {/* Company Logo SVG */}
                  <div className="h-6 sm:h-7 w-auto flex items-center shrink-0">
                    <Image
                      src={story.logo}
                      alt="Client logo"
                      width={90}
                      height={28}
                      className="h-6 sm:h-7 w-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
