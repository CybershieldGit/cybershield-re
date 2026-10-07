"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Neurex Clock SVG Icon
function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5 shrink-0">
      <path
        d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20ZM15.5355 7.05025L16.9497 8.46447L12 13.4142L10.5858 12L15.5355 7.05025Z"
        fill="#000416"
      />
    </svg>
  );
}

const HERO_BLOG_POSTS = [
  {
    id: 1,
    title: "Lack of visibility makes budget control difficult.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed8562d12a8700b59f884c_Rectangle%2034626794.webp",
    tags: [
      { text: "Business", bg: "#edecff", color: "#4538ff" },
      { text: "CORPORATE", bg: "#edecff", color: "#4538ff" },
    ],
    author: {
      name: "Darlene Robertson",
      role: "Marketing Coordinator",
      avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    },
    readTime: "10 min read",
    slug: "lack-of-visibility-makes-budget-control-difficult",
  },
  {
    id: 2,
    title: "Deal Acceleration Tactics to Shorten Your Sales Cycle",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed86ceafb9bd7c4ce0d558_Rectangle%2034626796.webp",
    tags: [
      { text: "CORPORATE", bg: "#edecff", color: "#4538ff" },
      { text: "Customer", bg: "#edecff", color: "#4538ff" },
    ],
    author: {
      name: "Darlene Robertson",
      role: "Marketing Coordinator",
      avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    },
    readTime: "10 min read",
    slug: "deal-acceleration-tactics-to-shorten-your-sales-cycle",
  },
  {
    id: 3,
    title: "Every sales team wants to close deals faster.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed8702b853ff67327ea8c1_Rectangle%2034626799.webp",
    tags: [
      { text: "Customer", bg: "#edecff", color: "#4538ff" },
      { text: "NEWS", bg: "#ffe6fe", color: "#e41add" },
    ],
    author: {
      name: "Darlene Robertson",
      role: "Marketing Coordinator",
      avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    },
    readTime: "10 min read",
    slug: "every-sales-team-wants-to-close-deals-faster",
  },
];

const MORE_ARTICLES = [
  {
    id: 1,
    title: "Deal Acceleration Tactics to Shorten Your Sales Cycle",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed86ceafb9bd7c4ce0d558_Rectangle%2034626796.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "deal-acceleration-tactics-to-shorten-your-sales-cycle",
  },
  {
    id: 2,
    title: "Every sales team wants to close deals faster.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed8702b853ff67327ea8c1_Rectangle%2034626799.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "every-sales-team-wants-to-close-deals-faster",
  },
  {
    id: 3,
    title: "Long sales cycles drain energy and slow revenue growth.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed871cbddd189de1424599_Rectangle%2034626802.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "long-sales-cycles-drain-energy-and-slow-revenue-growth",
  },
  {
    id: 4,
    title: "Understanding your buyer’s pain points is the first step.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed8790af6dce22923784c6_Rectangle%2034626797.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "understanding-your-buyers-pain-points-is-the-first-step",
  },
  {
    id: 5,
    title: "Deal Acceleration Tactics to Shorten Your Sales Cycle",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed87ac0f5d847161721a58_Rectangle%2034626803.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "deal-acceleration-tactics-to-shorten-your-sales-cycle-2",
  },
  {
    id: 6,
    title: "Focus on qualified leads instead of chasing every opportunity.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed87d6c43fd536595d3350_Rectangle%2034626800.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "focus-on-qualified-leads-instead-of-chasing-every-opportunity",
  },
  {
    id: 7,
    title: "Build trust early with clear communication and transparency.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed881c22e354b14643b3f6_Rectangle%2034626798.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "build-trust-early-with-clear-communication-and-transparency",
  },
  {
    id: 8,
    title: "Share value-focused content that answers real buyer questions.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed883e4c64c67dac4a8175_Rectangle%2034626801.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "share-value-focused-content-that-answers-real-buyer-questions",
  },
  {
    id: 9,
    title: "Automate follow-ups to maintain consistent engagement.",
    image: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68ed885e6a281bee2238e74b_Rectangle%2034626739.webp",
    author: "Darlene Robertson",
    avatar: "https://cdn.prod.website-files.com/68e65290d37baec8f182d5fc/68e65cdde54a388986331134_f5ea9148e40d1c93c3c447aa4f6993b92a86c0b6.webp",
    readTime: "10 min read",
    slug: "automate-follow-ups-to-maintain-consistent-engagement",
  },
];

export default function NeurexBlogPage() {
  // Active expandable card in the hero (default is center card index 1)
  const [activeCardIndex, setActiveCardIndex] = useState(1);

  return (
    <div className="w-full bg-white text-[#000416] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="hero-section w-full pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="blog-01-hero flex flex-col items-center">
            
            {/* Header Wrap */}
            <div className="header-wrap max-w-[637px] mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.125] lg:leading-[72px] tracking-[-1.5px] lg:tracking-[-1.92px] text-[#000416]">
                Stay informed with our latest articles
              </h1>
            </div>

            {/* Expandable 3-Card Accordion (expend-blog) */}
            <div className="expend-blog mt-10 sm:mt-12 lg:mt-[52px] w-full flex flex-col lg:flex-row gap-6 lg:gap-[2.759%] items-stretch">
              {HERO_BLOG_POSTS.map((post, idx) => {
                const isExpanded = activeCardIndex === idx;

                return (
                  <div
                    key={post.id}
                    onMouseEnter={() => setActiveCardIndex(idx)}
                    className="expend-blog-wrap cursor-pointer transition-[flex,width] duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] max-lg:!w-full max-lg:!flex-none"
                    style={{
                      flex: isExpanded ? "0 0 50%" : "0 0 22.241%",
                      width: isExpanded ? "50%" : "22.241%",
                    }}
                  >
                    <div className="blog-card-04 relative w-full h-[460px] sm:h-[500px] lg:h-[560px] rounded-[28px] sm:rounded-[36px] overflow-hidden group">
                      
                      {/* Background Image with subtle zoom on card hover */}
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                        />
                      </div>

                      {/* Floating Bottom Content Card (blog-card-04-content) */}
                      <div
                        className={`blog-card-04-content absolute inset-x-0 bottom-0 bg-[#f7f7f8] rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 lg:p-8 flex flex-col gap-4 sm:gap-5 z-10 ${
                          isExpanded
                            ? "translate-y-0 opacity-100 pointer-events-auto"
                            : "max-lg:translate-y-0 max-lg:opacity-100 lg:translate-y-[100%] lg:opacity-0 pointer-events-none"
                        }`}
                        style={{
                          transition: "transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        }}
                      >
                        {/* Tags */}
                        <div className="blog-single-tag-wrap flex flex-wrap items-center gap-2">
                          {post.tags.map((tag, tagIdx) => (
                            <div
                              key={tagIdx}
                              style={{ backgroundColor: tag.bg, color: tag.color }}
                              className="px-4 py-1.5 rounded-full"
                            >
                              <span className="text-[14px] leading-[20px] font-medium uppercase tracking-wide">
                                {tag.text}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Title (sub-heading-01) */}
                        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-medium leading-[1.28] lg:leading-[36px] tracking-[-0.5px] text-[#000416] line-clamp-2">
                          {post.title}
                        </h2>

                        {/* Bottom Row: Author + Read Time */}
                        <div className="blog-card-02-bottom flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-[#000416]/5">
                          {/* Author Box */}
                          <div className="author-box-02 flex items-center gap-3">
                            <div className="author-img-box-02 w-10 h-10 sm:w-12 sm:h-12 rounded-[8px] overflow-hidden shrink-0 border border-black/5">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="author-text flex flex-col leading-tight">
                              <span className="text-[16px] leading-[24px] font-medium text-[#000416]">
                                {post.author.name}
                              </span>
                              <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-normal text-[#4A4D5A]">
                                {post.author.role}
                              </span>
                            </div>
                          </div>

                          {/* Read Time */}
                          <div className="time-wrap flex items-center gap-2 text-[#000416]">
                            <ClockIcon />
                            <span className="text-[15px] sm:text-[16px] font-normal whitespace-nowrap">
                              {post.readTime}
                            </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SECTION 02: MORE BLOGS & ARTICLES */}
      <section className="section-02 w-full pt-16 sm:pt-20 lg:pt-24 pb-28 sm:pb-36 lg:pb-40">
        <div className="w-full max-w-[1310px] mx-auto px-4 sm:px-8 lg:px-10">
          <div className="blogs-01 flex flex-col gap-10 sm:gap-12 lg:gap-[52px]">
            
            {/* Heading 02 */}
            <h2 className="heading-02 text-3xl sm:text-4xl lg:text-[56px] font-medium leading-[1.15] lg:leading-[64px] tracking-[-1.2px] lg:tracking-[-1.5px] text-[#000416]">
              More blogs &amp; articles
            </h2>

            {/* Sub-Header & Grid */}
            <div className="blogs-02 flex flex-col gap-8">
              
              {/* Category Tag */}
              <div>
                <span className="tag inline-block text-[14px] leading-[20px] font-medium uppercase tracking-[0.5px] text-[#000416]">
                  Optimizing digital experiences
                </span>
              </div>

              {/* 3-Column Collection Grid (blogs-collection-01) */}
              <div className="blogs-collection-01 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                {MORE_ARTICLES.map((article, idx) => (
                  <div
                    key={idx}
                    className="group"
                  >
                    <div className="blog-card bg-white border border-[#ebebeb] rounded-[30px] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,4,22,0.08)] flex flex-col h-full">
                      
                      {/* Card Image with zoom on hover */}
                      <div className="blog-card-01-img w-full h-[280px] sm:h-[300px] lg:h-[320px] rounded-[30px] overflow-hidden relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>

                      {/* Card Content Text */}
                      <div className="blog-card-01-text p-5 sm:p-6 flex flex-col justify-between flex-1 gap-6">
                        
                        {/* Title (sub-heading-03) */}
                        <h3 className="sub-heading-03 text-[18px] sm:text-[20px] font-medium leading-[26px] sm:leading-[28px] tracking-[-0.4px] text-[#000416] group-hover:text-[#4538ff] transition-colors">
                          {article.title}
                        </h3>

                        {/* Bottom Bar: Profile + Time */}
                        <div className="blog-card-01-bottom flex items-center justify-between gap-4 pt-4 border-t border-[#ebebeb]/80">
                          {/* Profile */}
                          <div className="blog-card-profile flex items-center gap-3">
                            <div className="blog-card-profile-img w-7 h-7 rounded-[8px] overflow-hidden shrink-0 border border-black/5">
                              <img
                                src={article.avatar}
                                alt={article.author}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="text-[15px] sm:text-[16px] font-medium text-[#000416]">
                              {article.author}
                            </span>
                          </div>

                          {/* Read Time */}
                          <span className="text-[15px] sm:text-[16px] font-normal text-[#4A4D5A] whitespace-nowrap">
                            {article.readTime}
                          </span>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
