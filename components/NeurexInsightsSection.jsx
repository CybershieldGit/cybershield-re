"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NeurexInsightsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const articles = [
    {
      tags: ["BUSINESS", "CORPORATE"],
      title: "The Hidden Costs of Not Having a Vendor Management Strategy for Your SME Bank",
      description: "Discover why SME-focused banks need a clear approach to reduce expenses and improve efficiency.",
      author: "Darlene Robertson",
      role: "Marketing Coordinator",
      authorImg: "/images/hero-neurex/darlene-author.webp",
      readTime: "10 min read",
      img: "/images/hero-neurex/insights-purple-brain.png",
      imgAlt: "3D illuminated digital brain representing AI vendor strategy",
      link: "/insights",
    },
    {
      tags: ["CORPORATE", "ANALYTICS"],
      title: "Streamlining Financial Infrastructure: Next-Gen Core Banking Protocols",
      description: "How modern high-growth financial technology teams architect resilient data pipelines without operational overhead.",
      author: "Darlene Robertson",
      role: "Marketing Coordinator",
      authorImg: "/images/hero-neurex/darlene-author.webp",
      readTime: "8 min read",
      img: "/images/hero-neurex/insights-second-art.webp",
      imgAlt: "Digital fintech workflows and core banking systems",
      link: "/insights",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const currentArticle = articles[currentSlide];

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 bg-[#f7f7f8] text-[#000416] relative overflow-hidden">
      {/* Container: max-w 1240px as per Neurex container-01 */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Top Header: Centered Section Title */}
        <div className="text-center max-w-[700px] mx-auto mb-12 sm:mb-14 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl lg:text-[56px] font-medium leading-[1.14] lg:leading-[64px] tracking-[-1.2px] lg:tracking-[-1.92px] text-[#000416]"
          >
            Insights from business <br className="hidden sm:block" />
            industry leaders
          </motion.h2>
        </div>

        {/* The Blog Card 06 Container */}
        <div className="w-full mb-8 sm:mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full rounded-[24px] sm:rounded-[36px] bg-[#f7f7f8] overflow-hidden p-5 sm:p-8 lg:p-0 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12"
            >
              {/* Left Image Box: rounded media container */}
              <div className="w-full lg:w-[540px] h-[240px] sm:h-[380px] lg:h-[540px] rounded-[20px] sm:rounded-[32px] lg:rounded-l-[36px] lg:rounded-r-none overflow-hidden relative shrink-0 bg-[#e8ebf5]">
                <Image
                  src={currentArticle.img}
                  alt={currentArticle.imgAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Right Content Box: Category Tags, Headline, Description, Author and Read Time */}
              <div className="w-full flex-1 flex flex-col justify-between py-2 sm:py-4 lg:py-14 lg:pr-14 lg:pl-4 min-h-0 sm:min-h-[440px] lg:min-h-[500px]">
                
                {/* Top Half: Tags & Headlines */}
                <div className="space-y-3 sm:space-y-6 max-w-[500px]">
                  {/* Category Pill Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {currentArticle.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#edecff] text-[#4538ff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Article Title */}
                  <h3 className="text-xl sm:text-3xl lg:text-[34px] font-medium leading-[1.22] tracking-[-0.4px] text-[#000416]">
                    {currentArticle.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#4a4d5a] font-normal leading-relaxed">
                    {currentArticle.description}
                  </p>
                </div>

                {/* Bottom Half: Author Info & Reading Time */}
                <div className="flex items-center justify-between border-t border-[#ebebeb] pt-6 sm:pt-8 mt-8 lg:mt-0 max-w-[500px]">
                  {/* Author Avatar & Name */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg overflow-hidden shrink-0 border border-[#ebebeb] bg-white relative">
                      <Image
                        src={currentArticle.authorImg}
                        alt={currentArticle.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[#000416]">
                        {currentArticle.author}
                      </span>
                      <span className="text-xs text-[#797a7c]">
                        {currentArticle.role}
                      </span>
                    </div>
                  </div>

                  {/* Reading Time with Clock Icon */}
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[#000416]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM15.5355 7.05025L16.9497 8.46447L12 13.4142L10.5858 12L15.5355 7.05025Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{currentArticle.readTime}</span>
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Carousel Navigation Controls (Centered < and > buttons) */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            aria-label="Previous insight"
            className="w-11 h-11 rounded-xl border border-[#ebebeb] bg-white hover:bg-[#f7f7f8] flex items-center justify-center text-[#000416] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next insight"
            className="w-11 h-11 rounded-xl border border-[#ebebeb] bg-white hover:bg-[#f7f7f8] flex items-center justify-center text-[#000416] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M10 6L8.59 7.41L13.17 12L8.59 16.59L10 18L16 12L10 6Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
