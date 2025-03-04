"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhoneVolume, FaBars, FaTimes } from "react-icons/fa6";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (path) => pathname === path;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('nav');
    if (section && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - navbarHeight - 20,
        behavior: 'smooth'
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", isScroll: true, sectionId: "about" },
    { name: "Causes", path: "#services", isScroll: true, sectionId: "services" },
    { name: "Community", path: "#instagram", isScroll: true, sectionId: "instagram" },
  ];

  const handleNavClick = (item, e) => {
    if (item.isScroll) {
      e.preventDefault();
      scrollToSection(item.sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="w-[120px] lg:w-[200px]">
            <Link href="/" className="relative z-10 block">
              <Image
                src="/images/yib.png"
                alt="Youth in Business logo"
                width={120}
                height={100}
                className="w-auto h-12 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`
                      relative px-2 py-1 text-sm font-medium
                      ${isScrolled ? "text-gray-800" : "text-white"}
                      ${isActive(item.path) ? "text-orange-500" : ""}
                      hover:text-orange-500 transition-colors duration-300
                      after:content-[''] after:absolute after:-bottom-1 after:left-0 
                      after:w-full after:h-0.5 after:bg-orange-500 
                      after:scale-x-0 hover:after:scale-x-100
                      after:transition-transform after:duration-300
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone Number and Mobile Menu Button remain the same */}
          <div className="hidden lg:flex items-center w-[200px] justify-end">
            <a
              href="tel:+233535686563"
              className="flex items-center gap-3 group hover:opacity-80 transition-opacity duration-300"
            >
              <span className="bg-orange-500 p-2 rounded-full group-hover:bg-orange-600 transition-colors duration-300">
                <FaPhoneVolume className="w-4 h-4 text-white" />
              </span>
              <span
                className={`text-sm font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                (+233) 53-568-6563
              </span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <FaBars
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="space-y-8 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    onClick={(e) => handleNavClick(item, e)}
                    className={`
                      text-2xl font-medium
                      ${isActive(item.path) ? "text-orange-500" : "text-white"}
                      hover:text-orange-500 transition-colors duration-300
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <a
              href="tel:+233535686563"
              className="mt-12 flex items-center gap-3 text-white hover:text-orange-500 transition-colors duration-300"
            >
              <FaPhoneVolume className="w-5 h-5" />
              <span className="text-lg">(+233) 53-568-6563</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;