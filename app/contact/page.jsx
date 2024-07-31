"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import emailjs from "@emailjs/browser";
import ShopLocationMap from "@/components/shared/ShopLocationMap";
import { useRef } from "react";

export default function page() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.Email_Service_Id,
        process.env.Template_id,
        form.current,
        process.env.Public_key
      )
      .then(
        (result) => {
          console.log(result);
          c += 1;
          toast.success("Email Sent Successfully!!");
        },
        (error) => {
          console.log(error);
          toast.error("Error occurred, Try after some time!!");
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="md:h-56 h-48 bg-[#ebb1b1] flex items-center text-white font-serif">
        <div className="mx-auto">
          <h3 className="text-xl">Young Sprouts Therapy</h3>
          <h1 className="mt-3 font-medium text-7xl">Contact</h1>
        </div>
      </div>
      <div className="grid max-w-6xl grid-cols-1 max-sm:divide-y max-sm:divide-gray-100 gap-4 px-6 py-4 mx-auto my-10 md:grid-cols-3 lg:px-4">
        <div className="space-y-2 :text-base">
          <h3 className="font-serif text-3xl font-medium ">Address</h3>
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
        <div className="grid max-w-6xl grid-cols-1 gap-3 px-4 mx-auto lg:px-2 md:grid-cols-2 ">
          <form
            className="flex flex-col py-6 md:py-0 md:px-6 text-base"
            onSubmit={handleSubmit}
            ref={form}
          >
            <label>First name</label>
            <input
              placeholder="Enter first name"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 rounded-md outline-none border-slate-300"
              type="text"
              name="first_name"
              required
            />
            <label>Last name</label>
            <input
              placeholder="Enter last name"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 rounded-md outline-none border-slate-300"
              type="text"
              name="last_name"
            />

            <label>Email address</label>
            <input
              placeholder="Enter email"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 rounded-md outline-none border-slate-300"
              type="email"
              name="email"
              required
            />
            <label>Phone</label>
            <input
              placeholder="Enter phone"
              className="p-1 px-2 mt-1 mb-3 border border-t-0 border-l-0 border-r-0 rounded-md outline-none border-slate-300"
              type="tel"
              name="phone"
              required
            />
            <label>Message</label>
            <textarea
              placeholder="Enter message"
              className="p-1 px-2 mt-2 mb-4 border border-t-0 border-l-0 border-r-0 rounded-md outline-none border-slate-300"
              name="message"
            />
            <input
              type="submit"
              value="Send"
              className="bg-[#ebb1b1] rounded-md py-2 font-medium text-white cursor-pointer hover:bg-transparent hover:text-[#ebb1b1] border hover:border-[#ebb1b1] transition duration-100 ease-in"
            />
          </form>
          <div className="md:p-3">
            <ShopLocationMap />
          </div>
        </div>
      </section>
    </div>
  );
}
