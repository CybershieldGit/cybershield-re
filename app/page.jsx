"use client";

import React from "react";
import NeurexHero from "@/components/NeurexHero";
import NeurexImpactSection from "@/components/NeurexImpactSection";
import NeurexServiceSection from "@/components/NeurexServiceSection";
import NeurexPlatformSection from "@/components/NeurexPlatformSection";
import NeurexThreewaysSection from "@/components/NeurexThreewaysSection";
import NeurexSuccessStoriesSection from "@/components/NeurexSuccessStoriesSection";
import NeurexInsightsSection from "@/components/NeurexInsightsSection";

export default function HomePage() {

  return (
    <main className="bg-white min-h-screen text-[#000416] selection:bg-[#1CA3BB] selection:text-white">
      {/* 1. Neurex Home-02 Hero Section & Partner Logos Marquee */}
      <NeurexHero />

      {/* 2. Neurex Home-01 Impact & Testimonial Section */}
      <NeurexImpactSection />

      {/* 3. Neurex Home-01 Service Section ("Build a stronger future with smarter tools") */}
      <NeurexServiceSection />

      {/* 4. Neurex Home-02 Platform Features Section ("One platform for buyer and suppliers") */}
      <NeurexPlatformSection />

      {/* 5. Neurex Home-01 Threeways Section ("Threeways we save your both time and money") */}
      <NeurexThreewaysSection />

      {/* 6. Neurex Home-02 Client Testimonials ("Success stories from our clients") */}
      <NeurexSuccessStoriesSection />

      {/* 7. Neurex Home-02 Blog & Thought Leadership Insights */}
      <NeurexInsightsSection />
    </main>
  );
}
