"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/siteData";
import { ArrowUpRight, Sparkles, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function WppCareersInset() {
  return (
    <section className="py-20 sm:py-28 bg-[#F1F3F5] w-full">
      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24">
        <div className="bg-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-black/[0.06] shadow-[0_20px_50px_-15px_rgba(4,9,43,0.06)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Application CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1F3F5] text-xs font-mono font-semibold text-[#04092B]">
                <Sparkles className="w-3.5 h-3.5 text-[#1ba3be]" />
                <span>TALENT & OPEN ROLES</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#04092B] tracking-tight leading-[1.05]">
                Let’s build the <br />
                <span className="italic font-normal underline decoration-[#00D2FF] decoration-4 underline-offset-8">
                  future together
                </span>
                .
              </h2>

              <p className="text-base sm:text-lg text-[#04092B]/75 leading-relaxed max-w-xl">
                We don’t believe in rigid corporate job descriptions. If you take deep pride in full-stack web engineering, UI/UX design, or scalable cloud infrastructure, we want to hear from you.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Full-Stack Web Engineering",
                  "UI/UX & Design Systems",
                  "Python & Node APIs",
                  "Headless Commerce",
                  "Greater Noida West HQ",
                ].map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#F1F3F5] text-[#04092B]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href={`mailto:${siteConfig.contactEmails.support}?subject=Open Application - [Your Name / Craft]`}
                  className="wpp-btn-split pl-6 pr-2 py-2 group cursor-pointer text-xs sm:text-sm"
                >
                  <span className="font-bold">Send CV to {siteConfig.contactEmails.support}</span>
                  <span className="btn-icon-circle w-8 h-8">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#04092B]/60 pt-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1ba3be]" />
                  Noida Studio
                </span>
                <span>·</span>
                <span>Direct Founding Review</span>
                <span>·</span>
                <span>Response SLA &lt; 48h</span>
              </div>
            </div>

            {/* Right Column: Creative Circular Talent Cluster (WPP Media Style) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
                {/* Concentric Ambient Rings */}
                <div className="absolute inset-0 rounded-full border border-black/[0.05] animate-pulse" />
                <div className="absolute inset-8 rounded-full border border-black/[0.08]" />
                <div className="absolute inset-16 rounded-full border border-black/[0.05]" />

                {/* Central Luminous Sphere */}
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#1ba3be] to-[#00D2FF] opacity-90 blur-[1px] flex items-center justify-center text-center p-3 shadow-lg">
                  <span className="font-outfit font-black text-xs uppercase tracking-wider text-white">
                    CYBERSHIELD TALENT
                  </span>
                </div>

                {/* Floating Orbiting Avatars / Frames */}
                <div className="absolute top-4 left-6 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt="Engineer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-6 right-8 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                    alt="Designer"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-10 left-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80"
                    alt="Lead"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-8 right-8 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
                    alt="Architect"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
