"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useScroll } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, staggerChildren: 0 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, staggerChildren: 0 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

const Navbar = ({ services }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest > 50 && !isShrunk) {
        setIsShrunk(true);
        controls.start({ height: "100px" });
      } else if (latest <= 50 && isShrunk) {
        setIsShrunk(false);
        controls.start({ height: "120px" });
      }
    });
  }, [scrollY, isShrunk, controls]);

  const handleServicesClick = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleAboutUsClick = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
    setIsAboutUsOpen(false);
  };

  return (
    <motion.nav
      className="bg-[#f0e4e4] border-gray-200 w-full fixed top-0 z-50"
      animate={controls}
      initial={{ height: "120px" }}
    >
      <div className="container flex flex-wrap items-center justify-between mx-auto h-full">
        <Link href="/">
          <div className="py-2">
            <Image
              src="/images/youngsproutstherapy-image-logo.png"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              alt="Youngs Prouts Therapy logo"
              className="md:w-[264px] w-[200px] h-auto"
            />
          </div>
        </Link>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={handleMenuClick}
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
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="fixed inset-0 overflow-y-scroll z-50 flex flex-col gap-4 items-center justify-center bg-[#f0e4e4]"
            >
              <div className="absolute top-4 right-4">
                <motion.button onClick={handleMenuClick} className="text-3xl">
                  &times;
                </motion.button>
              </div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/"
                  className="text-xl p-2"
                  onClick={handleMenuClick}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                className="flex flex-col items-center justify-center "
              >
                <div
                  className="text-xl px-2 cursor-pointer flex items-center "
                  onClick={handleServicesClick}
                >
                  Services{" "}
                  <FaChevronDown
                    className={`ml-2 transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <div className="">
                  {isServicesOpen && (
                    <div className="flex flex-col items-center gap-3 mt-4">
                      {services.map((service) => (
                        <div key={service.slug}>
                          <Link
                            href={`/${service.slug}`}
                            className="text-lg p-2 text-black"
                            onClick={handleMenuClick}
                          >
                            {service.pageTitle}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
              <motion.div
                variants={menuItemVariants}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className="text-xl px-2 cursor-pointer flex items-center"
                  onClick={handleAboutUsClick}
                >
                  About Us{" "}
                  <FaChevronDown
                    className={`ml-2 transform transition-transform ${isAboutUsOpen ? "rotate-180" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {isAboutUsOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={menuVariants}
                      className="flex flex-col items-center gap-3 mt-4"
                    >
                      <motion.div variants={menuItemVariants}>
                        <Link
                          href="/teams"
                          className="text-lg p-2"
                          onClick={handleMenuClick}
                        >
                          Teams
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants}>
                        <Link
                          href="/fees"
                          className="text-lg p-2"
                          onClick={handleMenuClick}
                        >
                          Fees
                        </Link>
                      </motion.div>
                      <motion.div variants={menuItemVariants}>
                        <Link
                          href="/faq"
                          className="text-lg p-2"
                          onClick={handleMenuClick}
                        >
                          FAQ
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/contact"
                  className="text-xl p-2"
                  onClick={handleMenuClick}
                >
                  Contact us
                </Link>
              </motion.div>

              <motion.div variants={menuItemVariants}>
                <Link
                  href="/blog"
                  className="text-xl p-2"
                  onClick={handleMenuClick}
                >
                  Blog
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <div
          className={`w-full lg:block md:w-auto ${isMenuOpen ? "block" : "hidden"}`}
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
              <div className=" py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer flex items-center">
                Services <FaChevronDown className="ml-2" />
              </div>
              <ul className="absolute mt-2 bg-white border rounded-lg shadow-lg hidden group-hover:block min-w-max z-50">
                {services?.map((service) => (
                  <div key={service.slug}>
                    <Link href={`/${service.slug}`}>
                      <div className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                        {service.pageTitle}
                      </div>
                    </Link>
                  </div>
                ))}
              </ul>
            </li>
            <li className="relative group py-4">
              <div className="block py-2 pr-4 pl-3 text-gray-700 font-semibold rounded md:bg-transparent md:p-0 cursor-pointer flex items-center">
                About Us <FaChevronDown className="ml-2" />
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
    </motion.nav>
  );
};

export default Navbar;
