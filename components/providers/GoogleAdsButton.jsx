"use client";
import React from "react";

const GoogleAdsButton = ({ CONVERSION_LABEL, onClick, children }) => {
  // const handleClick = () => {
  //   if (typeof window !== "undefined" && window.gtag) {
  //     window.gtag("event", "conversion", {
  //       send_to: `AW-10834730946/${CONVERSION_LABEL}`,
  //     });
  //   }

  //   if (onClick) {
  //     onClick();
  //   }
  // };

  return (
    <>
      {/* <script id="google-gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10834730946');
        `}
      </script> */}

      {/* <div onClick={handleClick} className="w-full"> */}
      {children}
      {/* </div> */}
    </>
  );
};

export default GoogleAdsButton;
