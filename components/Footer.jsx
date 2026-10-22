"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {

  return (
    <div className="w-full bg-white">
      {/* 1. CTA Top Section (14-stop gradient-01-my) */}
      <section className="cta-section gradient-01-my relative w-full py-20 sm:py-24 lg:py-28 text-white flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10 flex justify-center">
          <div className="max-w-[805px] w-full flex flex-col items-center text-center">
            {/* Heading 01 */}
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.12] lg:leading-[72px] tracking-[-1.5px] lg:tracking-[-1.92px] text-white">
              Build something engineered <br className="hidden sm:inline" />
              for the long term
            </h2>

            {/* Paragraph Subtext */}
            <div className="mt-5 max-w-[580px] mx-auto">
              <p className="text-base sm:text-lg text-white/70 font-normal leading-[28px]">
                Founded in 2016. Partner with our in-house engineering and growth pods for applied AI &amp; LLMs, cloud infrastructure, backend backbones, custom web apps, or digital marketing growth.
              </p>
            </div>

            {/* CyberShield Teal CTA Button with Rolling Text */}
            <div className="mt-7 sm:mt-8 flex justify-center">
              <div className="btn-wrap">
                <Link
                  href="/contact"
                  className="btn-01-neon text-white cursor-pointer inline-block"
                >
                  <div className="btn-text-wrap">
                    <div className="btn-text _01">
                      <span className="text-base font-medium">Get in touch</span>
                    </div>
                    <div className="btn-text _02">
                      <span className="text-base font-medium">Get in touch</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Footer Section on Pure White Canvas */}
      <footer className="footer w-full bg-white text-[#000416] pt-12 sm:pt-14 pb-12 sm:pb-14 border-t border-[#ebebeb]/80 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-10">
          
          {/* Social Media Links Grid: 3 columns x 2 rows with dividers */}
          <div className="social-wrapper mt-6 sm:mt-12 mb-12 sm:mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-24 gap-y-6 lg:gap-y-0">
            
            {/* Col 1: Facebook & LinkedIn */}
            <div className="social-link-outer flex flex-col justify-between">
              <div className="social-link-wrap pb-5">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 13.499H16.5L17.5 9.49902H14V7.49902C14 6.46964 14 5.49902 16 5.49902H17.5V2.13912C17.1743 2.09587 15.943 1.99902 14.6429 1.99902C11.9284 1.99902 10 3.65588 10 6.69873V9.49902H7V13.499H10V21.999H14V13.499Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Facebook</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="social-link-wrap bottom pt-5 border-t border-[#ebebeb]">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.94146 4.99895C6.94109 5.81326 6.44706 6.54604 5.69232 6.85175C4.93758 7.15747 4.07285 6.97507 3.50588 6.39057C2.93891 5.80606 2.78293 4.93617 3.11148 4.19109C3.44004 3.44601 4.18752 2.97452 5.00146 2.99895C6.08253 3.0314 6.94195 3.91739 6.94146 4.99895ZM7.00146 8.47895H3.00146V20.9989H7.00146V8.47895ZM13.3215 8.47895H9.34146V20.9989H13.2815V14.4289C13.2815 10.7689 18.0515 10.4289 18.0515 14.4289V20.9989H22.0015V13.0689C22.0015 6.89895 14.9415 7.12895 13.2815 10.1589L13.3215 8.47895Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Linkedin</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 2: Twitter & Instagram */}
            <div className="social-link-outer flex flex-col justify-between">
              <div className="social-link-wrap pb-5">
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6874 3.06152L12.6907 8.77327L8.37045 3.06152H2.11328L9.58961 12.8377L2.50378 20.9365H5.53795L11.0068 14.6876L15.7863 20.9365H21.8885L14.095 10.6332L20.7198 3.06152H17.6874ZM16.6232 19.1215L5.65436 4.78119H7.45745L18.3034 19.1215H16.6232Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Twitter</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="social-link-wrap bottom pt-5 border-t border-[#ebebeb]">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0271 2C14.1525 2.00186 14.7228 2.00782 15.2156 2.02249L15.4097 2.02883C15.6339 2.0368 15.8551 2.0468 16.1218 2.0593C17.1859 2.10847 17.9118 2.2768 18.5493 2.5243C19.2084 2.77847 19.7651 3.1218 20.3209 3.67764C20.8759 4.23347 21.2193 4.7918 21.4743 5.4493C21.7209 6.08597 21.8893 6.81264 21.9393 7.8768C21.9512 8.14347 21.9608 8.36467 21.9687 8.58891L21.975 8.783C21.9896 9.27574 21.9963 9.84613 21.9984 10.9716L21.9992 11.7172C21.9993 11.8083 21.9993 11.9023 21.9993 11.9993L21.9992 12.2814L21.9986 13.0271C21.9967 14.1525 21.9908 14.7229 21.9761 15.2156L21.9697 15.4097C21.9618 15.634 21.9518 15.8552 21.9393 16.1218C21.8901 17.186 21.7209 17.9118 21.4743 18.5493C21.2201 19.2085 20.8759 19.7652 20.3209 20.321C19.7651 20.876 19.2059 21.2193 18.5493 21.4743C17.9118 21.721 17.1859 21.8893 16.1218 21.9393C15.8551 21.9512 15.6339 21.9609 15.4097 21.9687L15.2156 21.975C14.7228 21.9897 14.1525 21.9963 13.0271 21.9985L12.2814 21.9993C12.1903 21.9993 12.0963 21.9993 11.9993 21.9993H11.7172L10.9715 21.9986C9.84612 21.9968 9.27574 21.9908 8.78299 21.9761L8.58891 21.9698C8.36466 21.9618 8.14346 21.9518 7.8768 21.9393C6.81263 21.8902 6.08763 21.721 5.4493 21.4743C4.79096 21.2202 4.23346 20.876 3.67763 20.321C3.1218 19.7652 2.7793 19.206 2.5243 18.5493C2.2768 17.9118 2.1093 17.186 2.0593 16.1218C2.04742 15.8552 2.03773 15.634 2.02988 15.4097L2.02359 15.2156C2.00896 14.7229 2.00229 14.1525 2.00013 13.0271L2 10.9716C2.00186 9.84613 2.00781 9.27574 2.02248 8.783L2.02883 8.58891C2.0368 8.36467 2.0468 8.14347 2.0593 7.8768C2.10846 6.8118 2.2768 6.0868 2.5243 5.4493C2.77846 4.79097 3.1218 4.23347 3.67763 3.67764C4.23346 3.1218 4.7918 2.7793 5.4493 2.5243C6.0868 2.2768 6.8118 2.1093 7.8768 2.0593C8.14346 2.04743 8.36466 2.03774 8.58891 2.02989L8.78299 2.0236C9.27574 2.00896 9.84612 2.00229 10.9715 2.00013L13.0271 2ZM11.9993 6.9993C9.2364 6.9993 6.9993 9.23883 6.9993 11.9993C6.9993 14.7622 9.23883 16.9993 11.9993 16.9993C14.7622 16.9993 16.9993 14.7598 16.9993 11.9993C16.9993 9.2364 14.7597 6.9993 11.9993 6.9993ZM11.9993 8.9993C13.6562 8.9993 14.9993 10.342 14.9993 11.9993C14.9993 13.6562 13.6566 14.9993 11.9993 14.9993C10.3424 14.9993 8.9993 13.6567 8.9993 11.9993C8.9993 10.3424 10.3419 8.9993 11.9993 8.9993ZM17.2493 5.4993C16.56 5.4993 15.9993 6.05921 15.9993 6.74845C15.9993 7.4377 16.5592 7.99847 17.2493 7.99847C17.9385 7.99847 18.4993 7.43857 18.4993 6.74845C18.4993 6.05921 17.9376 5.49844 17.2493 5.4993Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Instagram</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Col 3: Discord & YouTube */}
            <div className="social-link-outer flex flex-col justify-between">
              <div className="social-link-wrap pb-5">
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.3034 5.33618C17.9344 4.71005 16.4805 4.25372 14.9629 3.99902C14.7719 4.32801 14.5596 4.77373 14.411 5.12394C12.7969 4.89046 11.1944 4.89046 9.60255 5.12394C9.45397 4.77373 9.2311 4.32801 9.05068 3.99902C7.52251 4.25372 6.06861 4.71005 4.70915 5.33618C1.96053 9.39013 1.21766 13.3485 1.5891 17.2539C3.41443 18.5805 5.17612 19.387 6.90701 19.9177C7.33151 19.3446 7.71356 18.729 8.04255 18.0817C7.41641 17.8482 6.82211 17.5617 6.24904 17.2221C6.39762 17.116 6.5462 16.9993 6.68416 16.8825C10.1438 18.4638 13.8911 18.4638 17.3082 16.8825C17.4568 16.9993 17.5948 17.116 17.7434 17.2221C17.1703 17.5617 16.576 17.8482 15.9499 18.0817C16.2789 18.729 16.6609 19.3446 17.0854 19.9177C18.8152 19.387 20.5875 18.5805 22.4033 17.2539C22.8596 12.7331 21.6806 8.80649 19.3034 5.33618ZM8.5201 14.8449C7.48007 14.8449 6.63107 13.9004 6.63107 12.7437C6.63107 11.5869 7.45884 10.6424 8.5201 10.6424C9.57071 10.6424 10.4303 11.5869 10.4091 12.7437C10.4091 13.9004 9.57071 14.8449 8.5201 14.8449ZM15.4936 14.8449C14.4535 14.8449 13.6034 13.9004 13.6034 12.7437C13.6034 11.5869 14.4323 10.6424 15.4936 10.6424C16.5442 10.6424 17.4038 11.5869 17.3825 12.7437C17.3825 13.9004 16.5548 14.8449 15.4936 14.8449Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Discord</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
              <div className="social-link-wrap bottom pt-5 border-t border-[#ebebeb]">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-full flex items-center justify-between text-[#4A4D5A] hover:text-[#000416] transition-all duration-200 group"
                >
                  <div className="social-link-inner flex items-center gap-3">
                    <div className="social-icon w-6 h-6 shrink-0 text-[#4A4D5A] group-hover:text-[#000416] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.543 6.498C21.288 5.513 20.545 4.738 19.604 4.476C18.101 4.058 13.375 4.007 12.244 4.001H11.756C10.625 4.007 5.899 4.058 4.396 4.476C3.454 4.738 2.712 5.513 2.457 6.498C2.057 8.057 2.007 11.1 2.001 11.836V12.163C2.007 12.899 2.057 15.942 2.457 17.502C2.708 18.483 3.451 19.258 4.396 19.524C5.899 19.942 10.625 19.993 11.756 19.999H12.244C13.375 19.993 18.101 19.942 19.604 19.524C20.548 19.258 21.291 18.483 21.543 17.502C21.943 15.942 21.993 12.899 21.999 12.163V11.836C21.993 11.1 21.943 8.057 21.543 6.498ZM10 15.5V8.5L16 12L10 15.5Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <span className="text-base font-medium">Youtube</span>
                  </div>
                  <div className="social-icon w-6 h-6 shrink-0 text-[#000416] group-hover:translate-x-1 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.1716 10.9989L10.8076 5.63491L12.2218 4.2207L20 11.9989L12.2218 19.777L10.8076 18.3628L16.1716 12.9989H4V10.9989H16.1716Z" fill="currentColor"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* 3. Footer Navigation Card (bg #f7f7f8, rounded 24px/32px, responsive padding) */}
          <div className="footer-wrap w-full bg-[#f7f7f8] rounded-[24px] sm:rounded-[32px] px-6 sm:px-14 lg:px-24 py-8 sm:py-16 lg:py-20 mb-10 sm:mb-16">
            <div className="footer-wrapper grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
              
              {/* Column 1: DOMAINS & SERVICES */}
              <div className="footer-block flex flex-col items-start">
                <div className="footer-title text-base font-medium uppercase tracking-tight text-[#000416]">
                  SERVICES &amp; DOMAINS
                </div>
                <div className="flex flex-col space-y-4 mt-5 text-base text-[#4A4D5A]">
                  <Link href="/" className="hover:text-[#000416] transition-colors">AI &amp; LLM Solutions</Link>
                  <Link href="/" className="hover:text-[#000416] transition-colors">Cloud Infrastructure</Link>
                  <Link href="/" className="hover:text-[#000416] transition-colors">Backend Distributed Systems</Link>
                  <Link href="/" className="hover:text-[#000416] transition-colors">Web &amp; Mobile Apps</Link>
                  <Link href="/" className="hover:text-[#000416] transition-colors">Digital Marketing &amp; UGC</Link>
                  <Link href="/" className="hover:text-[#000416] transition-colors">SaaS Product Engineering</Link>
                </div>
              </div>

              {/* Column 2: 6 SISTER BRANDS */}
              <div className="footer-block flex flex-col items-start">
                <div className="footer-title text-base font-medium uppercase tracking-tight text-[#000416]">
                  6 SISTER BRANDS
                </div>
                <div className="flex flex-col space-y-4 mt-5 text-base text-[#4A4D5A]">
                  <a href="https://www.phonotel.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#000416] transition-colors">PhonoTell (Voice AI)</a>
                  <a href="https://www.converro.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#000416] transition-colors">Converro (Enterprise CRM)</a>
                  <a href="https://senderbot.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#000416] transition-colors">SenderBot (WhatsApp API)</a>
                  <a href="https://www.adlyngo.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#000416] transition-colors">Adlyngo (Growth Media)</a>
                  <a href="https://idigitalstudies.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#000416] transition-colors">IDS (Premier EdTech)</a>
                  <Link href="/" className="hover:text-[#000416] transition-colors">SkillGrow (On-Demand Tech)</Link>
                </div>
              </div>

              {/* Column 3: COMPANY */}
              <div className="footer-block flex flex-col items-start">
                <div className="footer-title text-base font-medium uppercase tracking-tight text-[#000416]">
                  COMPANY
                </div>
                <div className="flex flex-col space-y-4 mt-5 text-base text-[#4A4D5A]">
                  <Link href="/" className="hover:text-[#000416] transition-colors">Overview</Link>
                  <Link href="/about" className="hover:text-[#000416] transition-colors">About CyberShield</Link>
                  <Link href="/career" className="hover:text-[#000416] transition-colors">Careers (We&apos;re Hiring)</Link>
                  <Link href="/case-studies" className="hover:text-[#000416] transition-colors">Blog &amp; Insights</Link>
                  <Link href="/contact" className="hover:text-[#000416] transition-colors">Contact Us</Link>
                </div>
              </div>

              {/* Column 4: HEADQUARTERS & CONTACT */}
              <div className="footer-block flex flex-col items-start">
                <div className="footer-title text-base font-medium uppercase tracking-tight text-[#000416]">
                  HEADQUARTERS
                </div>
                <div className="flex flex-col space-y-4 mt-5 text-base text-[#4A4D5A]">
                  <span className="text-sm leading-relaxed">
                    F-407, 4th Floor, Artha Mart,<br />
                    Greater Noida West, UP 201318, India
                  </span>
                  <a href="mailto:support@cybershield.in" className="hover:text-[#000416] transition-colors">
                    support@cybershield.in
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Large Brand Logo & Emblem Centered (Matching Neurex brand-link 684px layout) */}
          <div className="footer-logo-wrap my-8 sm:my-14 lg:my-16 flex justify-center items-center">
            <Link href="/" className="brand-link inline-flex items-center justify-center max-w-[280px] sm:max-w-[480px] lg:max-w-[684px] w-full px-2 hover:opacity-85 transition-opacity">
              <img
                loading="lazy"
                src="/logo_light_h.svg"
                alt="CyberShield Technologies"
                className="footer-logo w-full h-auto object-contain"
              />
            </Link>
          </div>

          {/* 5. Copyright Line */}
          <div className="footer-bottom mt-8 sm:mt-10 text-center flex justify-center items-center text-sm sm:text-base text-[#4A4D5A]">
            <p className="body-regular-02">
              © 2016–2026 CyberShield Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
