import React from "react";

export default function CyberShieldLogo({ 
  className = "h-[34px] sm:h-[38px] w-auto", 
  isLightNav,
  variant,
  textClassName = "",
  size,
  withText,
}) {
  // Determine if logo should be light (navy text for light backgrounds) or dark (white text for dark backgrounds)
  let isLight = false;
  if (variant) {
    isLight = variant === "light";
  } else if (typeof isLightNav === "boolean") {
    isLight = isLightNav;
  } else if (textClassName) {
    isLight = !textClassName.includes("text-white");
  }

  return (
    <div className="flex items-center group shrink-0">
      <img
        src={isLight ? "/logo_light_h.svg" : "/Group 1000005294.svg"}
        alt="CyberShield Technologies"
        className={`${className} object-contain transition-transform duration-300 group-hover:scale-[1.02] shrink-0`}
      />
    </div>
  );
}
