import React from "react";

export default function ShopLocationMap() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.3195169054884!2d-79.46509692343889!3d43.807731442421925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2c2f7a900001%3A0xa6b26c04612c3e36!2s1137%20Centre%20St%20Suite%20%23204%2C%20Thornhill%2C%20ON%20L4J%203M6%2C%20Canada!5e0!3m2!1sen!2sbd!4v1720340354766!5m2!1sen!2sbd";

  return (
    <div>
      <iframe
        src={mapUrl}
        width="100%"
        height="450"
        style={{ border: 0, filter: "grayscale(100%)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      ></iframe>
    </div>
  );
}
