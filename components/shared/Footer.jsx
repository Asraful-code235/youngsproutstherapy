import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-8 max-w-screen-2xl mx-auto md:px-0 px-3 mt-16">
      <div className="p-6 md:p-14 block md:flex md:space-y-0 space-y-8 justify-between bg-[#ade1d4] rounded-2xl ">
        <div>
          <div className="flex md:justify-start justify-center">
            <Image
              src="/images/youngsproutstherapy-image-logo.png"
              width={200}
              height={80}
              alt="Youngsproutstherapy Logo"
            />
          </div>
          <p className="text-center md:text-start text-gray-600 mt-4">
            Tailored ADHD therapy and counseling for children <br /> and teens
            in Thornhill, Vaughan. Empower your child <br /> with effective
            strategies for focus and growth.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center md:text-start text-brand-text-color-one">
            Quick Links
          </h3>
          <ul className="mt-4 text-center md:text-start text-gray-600">
            <li>Home</li>
            <li>Teams</li>
            <li>Fees</li>
            <li>Faq</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center md:text-start text-brand-text-color-one">
            Contact Info
          </h3>
          <ul className="mt-4 space-y-3 text-gray-600">
            <li className="flex gap-2 items-center">
              <MdOutlineEmail className="text-2xl" />
              <a href="mailto:info@youngsproutstherapy.com">
                info@youngsproutstherapy.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt className="text-xl" />

              <a href="tel:(289) 579-4769">(+289) 579-4769 (GROW)</a>
            </li>
            <li className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-xl" />
              1137 Centre St Suite #204, Thornhill, ON L4J 3M6
            </li>
          </ul>
        </div>
        <div className="text-center md:text-start">
          <h3 className="text-lg font-bold text-brand-text-color-one">Hours</h3>
          <div className="my-4 text-gray-600">
            Monday - Friday <br />
            11:00am - 7:00pm
          </div>
          <div className="my-4">
            Saturday
            <br />
            Closed
          </div>
          <div className="my-4">
            Sunday
            <br />
            Closed
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-600 mt-8">
          © {new Date().getFullYear()} Young Sprouts Therapy. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
}
