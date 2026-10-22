"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CyberShieldLogo from "@/components/brand/CyberShieldLogo";
import { X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isDarkHero = pathname === "/" || pathname === "/contact";
  const isLightNav = !isDarkHero;

  const getLinkClass = (href) => {
    const isBlogActive =
      (href === "/work" || href === "/case-studies" || href === "/blog") &&
      (pathname === "/work" || pathname === "/case-studies" || pathname === "/blog" || pathname === "/blogs");
    const isCareerActive =
      (href === "/career" || href === "/careers") && (pathname === "/career" || pathname === "/careers");
    const isActive = pathname === href || isBlogActive || isCareerActive;
    if (isLightNav) {
      return isActive
        ? "text-[#000416] font-bold"
        : "text-[#000416]/80 hover:text-[#000416]";
    }
    return isActive
      ? "text-white font-bold"
      : "text-white/90 hover:text-white";
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isLightNav
            ? "bg-white/95 backdrop-blur-xl border-b border-[#000416]/[0.08] shadow-[0_4px_24px_rgba(0,4,22,0.06)] py-3 sm:py-4"
            : "bg-[#000416]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,4,22,0.35)] py-3 sm:py-4"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-8 lg:px-10">
        <nav
          className="w-full flex items-center justify-between"
          aria-label="CyberShield Collective Navigation"
        >
          {/* Brand Logo & Stance */}
          <Link
            href="/"
            className="flex items-center focus:outline-none group py-0.5 shrink-0"
          >
            <CyberShieldLogo 
              isLightNav={isLightNav}
              className="h-[34px] sm:h-[38px] w-auto transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            <Link
              href="/"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/")}`}
            >
              Home
            </Link>

            <Link
              href="/case-studies"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/case-studies")}`}
            >
              Blog
            </Link>

            <Link
              href="/about"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/about")}`}
            >
              About
            </Link>

            <Link
              href="/career"
              className={`text-[16px] font-semibold transition-colors duration-200 ${getLinkClass("/career")}`}
            >
              Careers
            </Link>
          </div>

          {/* Right Action CTAs (Pill Contact button) */}
          <div className="hidden md:flex items-center">
            {/* Pill button like Neurex Contact us */}
            <div className="btn-wrap">
              <Link
                href="/contact"
                className={
                  isLightNav
                    ? "inline-block bg-[#eeeeee] hover:bg-[#000416] text-[#000416] hover:text-white px-5 py-2 rounded-full font-semibold text-[16px] transition-all duration-200 border border-black/5"
                    : "inline-block btn-01-white text-[#000416]"
                }
              >
                <span className="btn-text-wrap">
                  <span className="btn-text _01">Contact us</span>
                  <span className="btn-text _02">Contact us</span>
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button (Single clean square hamburger button matching Neurex) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-11 h-11 rounded-[10px] flex items-center justify-center transition-all ${
                isLightNav
                  ? "bg-black/[0.04] border border-black/15 text-[#000416] hover:bg-black/[0.08]"
                  : "bg-white/[0.08] border border-white/20 text-white hover:bg-white/[0.15] backdrop-blur-md"
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="flex flex-col gap-[5px] items-center justify-center w-5">
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                  <span className={`block h-[2px] w-5 rounded-full ${isLightNav ? "bg-[#000416]" : "bg-white"}`} />
                </div>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu (Exact Neurex White Rounded Card Floating Menu) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto lg:hidden fixed inset-x-4 top-[74px] sm:top-[82px] bg-white text-[#000416] border border-black/10 rounded-[24px] p-6 shadow-[0_25px_60px_rgba(0,4,22,0.18)] max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Home
              </Link>

              <Link
                href="/case-studies"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                About
              </Link>
              <Link
                href="/career"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 text-[17px] font-medium text-[#000416] hover:bg-[#f7f7f8] rounded-xl transition-colors"
              >
                Careers
              </Link>
              
              <div className="pt-4 mt-2 border-t border-[#ebebeb]">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center py-3 px-6 rounded-full bg-[#000416] text-white font-medium text-base hover:bg-[#1a233a] transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
