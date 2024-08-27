"use client";
import { useState, useRef } from "react";
import ShopLocationMap from "@/components/shared/ShopLocationMap";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (form.current) {
      await emailjs
        .sendForm(
          "service_mhes258",
          "template_9do5abh",
          form.current,
          "NBm1Am8HA6NeOIEUY"
        )
        .then(
          (result) => {
            setSuccessMessage("Email sent successfully!");
            triggerGoogleAdsConversion();
          },
          (error) => {
            setErrorMessage("Failed to send email. Please try again.");
          }
        );
    }

    setIsSubmitting(false);
    e.target.reset();
  };

  const triggerGoogleAdsConversion = () => {
    window.dataLayer = window.dataLayer || [];
    window.gtag("event", "conversion", {
      send_to: "AW-10834730946/4Je8CMG_maUDEMK_s64o",
    });
  };

  return (
    <div>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-10834730946"
      />
      <script id="google-gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-10834730946');
        `}
      </script>
      <div className="md:h-56 h-48 bg-[#ebb1b1] flex items-center text-white font-serif">
        <div className="mx-auto">
          <h3 className="text-xl">Young Sprouts Therapy</h3>
          <h1 className="mt-3 font-medium text-7xl">Contact</h1>
        </div>
      </div>
      <div className="grid max-w-6xl grid-cols-1 max-sm:divide-y max-sm:divide-gray-100 gap-4 px-6 py-4 mx-auto my-10 md:grid-cols-3 lg:px-4">
        <div className="space-y-2 :text-base">
          <h3 className="font-serif text-3xl font-medium">Address</h3>
          <p>1137 Centre Street Suite #204</p>
          <p>Thornhill, ON, L4J 3M6</p>
        </div>
        <div className="space-y-2 text-base">
          <h3 className="font-serif text-3xl font-medium">Contact</h3>
          <p>
            <a
              href="mailto:info@youngsproutstherapy.com"
              className="text-blue-500 underline"
            >
              info@youngsproutstherapy.com
            </a>
          </p>
          <p>289-579-4769 (GROW)</p>
        </div>
        <div className="space-y-2 text-base">
          <h3 className="font-serif text-3xl font-medium">Opening Hours</h3>
          <p>Mon-Thurs: 9:00 am - 9:00 pm</p>
          <p>Friday: 9:00 am - 3:00 pm</p>
          <p>Saturday: Closed</p>
          <p>Sunday: 9:00 am - 9:00 pm</p>
        </div>
      </div>
      <section className="py-10 dark:bg-gray-100 dark:text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 gap-3 px-4 mx-auto lg:px-2 md:grid-cols-2">
          <form
            className="flex flex-col py-6 md:py-0 md:px-6 text-base"
            onSubmit={handleSubmit}
            ref={form}
          >
            <label>First name</label>
            <input
              placeholder="Enter first name"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 outline-none border-slate-300"
              type="text"
              name="first_name"
              required
            />
            <label>Last name</label>
            <input
              placeholder="Enter last name"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 outline-none border-slate-300"
              type="text"
              name="last_name"
            />
            <label>Email address</label>
            <input
              placeholder="Enter email"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 outline-none border-slate-300"
              type="email"
              name="email"
              required
            />
            <label>Phone</label>
            <input
              placeholder="Enter phone"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 outline-none border-slate-300"
              type="tel"
              name="phone"
              required
            />
            <label>Message</label>
            <textarea
              placeholder="Enter message"
              className="p-1 px-2 mt-2 mb-4 resize-none border border-t-0 border-l-0 border-r-0 outline-none border-slate-300"
              name="message"
            />
            <input
              type="submit"
              value={isSubmitting ? "Sending..." : "Send"}
              className="bg-[#ebb1b1] rounded-full py-2 font-medium text-white cursor-pointer hover:bg-transparent hover:text-[#ebb1b1] border hover:border-[#ebb1b1] transition duration-100 ease-in"
              disabled={isSubmitting}
            />
            {errorMessage && (
              <p className="mt-4 text-red-500">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="mt-4 text-green-500">{successMessage}</p>
            )}
          </form>
          <div className="md:p-3">
            <ShopLocationMap />
          </div>
        </div>
      </section>
    </div>
  );
}
