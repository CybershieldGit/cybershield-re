"use client";

import React, { useState } from "react";
import { philosophyPrinciples } from "@/data/siteData";
import { ChevronDown, Sparkles } from "lucide-react";

export default function PhilosophyAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {philosophyPrinciples.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={item.number}
            className={`transition-all duration-300 rounded-2xl border ${
              isOpen
                ? "bg-white border-[#1ba3be]/50 shadow-[0_15px_35px_-10px_rgba(4,9,43,0.08)] -translate-y-0.5"
                : "bg-white/80 border-black/[0.06] hover:border-black/[0.12] hover:bg-white"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left focus:outline-none rounded-2xl cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5 sm:gap-5">
                <span className="font-mono text-xs font-bold text-[#1ba3be] px-2.5 py-1 rounded-full bg-[#F1F3F5] border border-black/[0.04]">
                  {item.number}
                </span>
                <h3 className="font-display font-extrabold text-base sm:text-lg text-[#04092B]">
                  {item.title}
                </h3>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 bg-[#04092B] text-white"
                    : "bg-[#F1F3F5] text-[#04092B] hover:bg-black/10"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Expandable content */}
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.25,1,0.4,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 pt-1 space-y-2.5 border-t border-black/[0.06] text-xs sm:text-sm text-[#04092B]/75 leading-relaxed">
                  <p className="font-semibold text-[#04092B]">{item.summary}</p>
                  <p className="text-[#04092B]/65">{item.detail}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
