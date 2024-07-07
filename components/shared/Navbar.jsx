"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f0e4e4] border-gray-200 md:py-0 py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">
          <div className="py-2">
            <Image
              src="/images/youngsproutstherapy-image-logo.png"
              width={220}
              height={100}
              alt="Youngs Prouts Therapy logo "
            />
          </div>
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM4 15a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li className="py-4">
              <Link href="/">
                <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer">
                  Home
                </div>
              </Link>
            </li>
            <li className="relative group py-4">
              <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer">
                Services
              </div>
              <ul className="absolute mt-2 bg-white border rounded-lg shadow-lg hidden group-hover:block  min-w-max z-50">
                <li>
                  <Link href="/approach-and-specialties">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      Approach & Specialties
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/anxiety-therapy-for-kids-and-teens">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      Anxiety
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/behaviour-therapy-for-kids-and-teens">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      Behaviour Challenges
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group py-4">
              <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer">
                About Us
              </div>
              <ul className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg hidden group-hover:block z-50">
                <li>
                  <Link href="/teams">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      Teams
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/fees">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      Fees
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                      FAQ
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-4">
              <Link href="/contact">
                <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer">
                  Contact us
                </div>
              </Link>
            </li>
            <li className="py-4">
              <Link href="/blog">
                <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer">
                  Blog
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
