import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

export default function GetStarted({ open, setOpen }) {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const triggerGoogleAdsConversion = () => {
    const gtagScript = document.createElement("script");
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('event', 'conversion', {'send_to': 'AW-10834730946/4Je8CMG_maUDEMK_s64o'});
    `;
    document.head.appendChild(gtagScript);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    if (form.current) {
      await emailjs
        .sendForm(
          "service_cwiihbb",
          "template_0s2nneh",
          form.current,
          "_O-IBWyLZwt2kHPs5"
        )
        .then(
          (result) => {
            setSuccessMessage("Email sent successfully!");
            triggerGoogleAdsConversion();
            setOpen(false);
          },
          (error) => {
            setErrorMessage("Failed to send email. Please try again.");
          }
        );
    }
    triggerGoogleAdsConversion();

    trackGAEvent("Contact", "Form Submit", "clicked");
    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={() => setOpen(!open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4">Contact Us</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleSubmit}
            ref={form}
            className="flex flex-col space-y-4"
          >
            <input
              placeholder="First name*"
              className="p-2 border rounded"
              type="text"
              name="first_name"
              required
            />
            <input
              placeholder="Last name*"
              className="p-2 border rounded"
              type="text"
              name="last_name"
              required
            />
            <input
              placeholder="Email address*"
              className="p-2 border rounded"
              type="email"
              name="email"
              required
            />
            <input
              placeholder="Phone*"
              className="p-2 border rounded"
              type="tel"
              name="phone"
              required
            />
            <textarea
              placeholder="Message"
              className="p-2 border rounded resize-none"
              name="message"
            />
            <Button
              variant={"brandButton"}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
