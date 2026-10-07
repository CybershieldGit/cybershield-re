"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowUpRight } from "lucide-react";

export default function ConsultationSplitButton({
  label = "Book a Free Consultation",
  source = "Consultation Button",
  className = "",
}) {
  const { openConsultation } = useModal();

  return (
    <button
      type="button"
      onClick={() => openConsultation(source)}
      className={`wpp-btn-split pl-6 pr-2 py-2 group cursor-pointer text-xs sm:text-sm bg-white text-[#04092B] hover:bg-white/90 border-0 ${className}`}
    >
      <span className="font-bold">{label}</span>
      <span className="btn-icon-circle w-8 h-8 bg-[#1ba3be] text-white">
        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
      </span>
    </button>
  );
}
