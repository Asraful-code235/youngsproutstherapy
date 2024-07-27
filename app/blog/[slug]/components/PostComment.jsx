"use client";
import React, { useState, useTransition } from "react";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function PostComment({ post }) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isTimeoutActive, setIsTimeoutActive] = useState(false);
  const router = useRouter();

  const handleComment = async (event) => {
    event.preventDefault();
    if (!comment.length) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/createComment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: post?._id,
          name,
          email,
          comment,
          slug: post?.slug?.current,
        }),
      });

      const data = await response.json();

      if (data.message === "Comment submitted") {
        setMessage("Thank you for your comment!");
        setComment("");
        setName("");
        setEmail("");
        setIsTimeoutActive(true);

        // Simulate a 3-second timeout for displaying the message
        setTimeout(() => setIsTimeoutActive(false), 15000);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-screen-2xl mx-auto">
      <h2 className="text-xl text-center font-medium mt-6">
        Let us know your thoughts.
      </h2>
      <div className="py-10 max-w-2xl mx-auto px-4 grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your name…"
            className="my-3 border border-gray-300 focus-within:ring outline-none focus-within:border-none focus-within:ring-[#f0e4e4] rounded px-3 py-2 w-full"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />

          <input
            type="email"
            placeholder="Your email (optional)…"
            className="my-3 border border-gray-300 rounded focus-within:ring outline-none focus-within:border-none focus-within:ring-[#f0e4e4] px-3 py-2 w-full"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <textarea
          placeholder="Write a comment…"
          className="my-3 focus-within:ring outline-none p-3 rounded-md focus-within:border-none focus-within:ring-[#f0e4e4] border border-gray-300"
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />

        <Button
          variant="solid"
          className={` ${isSubmitting ? "!bg-[#f0e4e4]" : "!bg-[#ebb1b1]"} !text-white  transition-all duration-300 ease-in-out`}
          disabled={!comment.length || isSubmitting}
          onClick={handleComment}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
        {!message && !isTimeoutActive && (
          <p className="mt-4 text-center text-[#ade1d4] font-bold tracking-tighter">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
