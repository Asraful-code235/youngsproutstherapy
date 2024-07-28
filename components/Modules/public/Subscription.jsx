"use client";
import { useState } from "react";

export default function Subscription({ module }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here
    console.log("Subscribed with email:", email);
    // Clear the input field after subscription
    setEmail("");
  };

  if (!module) return null;

  return (
    <section className="max-w-5xl mx-auto p-4 lg:p-6 tracking-wide leading-4 flex flex-col gap-4">
      <h3 className="text-center text-3xl lg:text-5xl font-semibold">
        {module.title}
      </h3>
      <p className="text-sm lg:text-lg font-light text-center">
        {module.description}
      </p>
      <form onSubmit={handleSubscribe} className="mt-6 flex justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="px-4 py-2 border max-w-xl w-full border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#649cac]"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#649cac] text-white rounded-r-md hover:bg-[#7abcce] focus:outline-none focus:ring-2 focus:ring-[#649cac]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
