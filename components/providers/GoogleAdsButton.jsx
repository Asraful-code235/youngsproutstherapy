"use client";

import { useEffect } from "react";

export default function GoogleAdsButton({ conversionLabel, children }) {
  const triggerGoogleAdsConversion = () => {
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('event', 'conversion', {'send_to': 'AW-10834730946/${conversionLabel}'});
    `;
    document.head.appendChild(gtagScript);
  };

  const handleClick = () => {
    triggerGoogleAdsConversion();
  };

  return <div onClick={handleClick}>{children}</div>;
}
