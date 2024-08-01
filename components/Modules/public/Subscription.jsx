"use client";
import { useState, useTransition } from "react";

export default function Subscription({ module }) {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Email is required");
      return;
    }

    setMessage("");
    startTransition(async () => {
      try {
        const response = await fetch("/api/createSubscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (response.ok) {
          setMessage("Subscription successful!");
        } else {
          console.error(result.message);
          setMessage(result.message);
        }
      } catch (error) {
        console.error("Subscription request failed", error);
        setMessage("An error occurred while subscribing");
      }

      setEmail("");
    });
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
      <form
        onSubmit={handleSubscribe}
        className="mt-6 flex flex-col items-center"
      >
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isPending}
            className="px-4 py-2 border max-w-xl w-full border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#649cac]"
          />
          <button
            type="submit"
            disabled={isPending}
            className={`px-4 py-2 ${isPending ? "bg-gray-400" : "bg-[#649cac]"} text-white rounded-r-md hover:bg-[#7abcce] focus:outline-none focus:ring-2 focus:ring-[#649cac]`}
          >
            {isPending ? (
              <span className="animate animate-spin  w-5 h-5 rounded-full border-2 border-transparent border-t-2 border-white">
                Loading...
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </div>
        {message && (
          <p
            className={`mt-4 text-center ${message.startsWith("An error") ? "text-red-500" : "text-green-500"}`}
          >
            {message}
          </p>
        )}
      </form>
    </section>
  );
}
