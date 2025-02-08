import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "News", href: "/news" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, href: "#" },
    { name: "Twitter", icon: FaTwitter, href: "#" },
    { name: "Facebook", icon: FaFacebookF, href: "#" },
    { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="block mb-6">
              <h2 className="text-2xl font-bold text-white">Community YIB</h2>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              A psychosocial community organization creating a nurturing environment 
              for young people to thrive, grow, and build a better future together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-gray-800 p-2.5 rounded-lg text-gray-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.name}</span>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <FaArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 pb-2 border-b border-gray-800">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+233557667372"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                >
                  <FaPhone className="w-4 h-4 mr-3" />
                  (+233) 55-766-7372
                </a>
              </li>
              <li>
                <a
                  href="tel:+233535686563"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                >
                  <FaPhone className="w-4 h-4 mr-3" />
                  (+233) 53-568-6563
                </a>
              </li>
              <li>
                <a
                  href="mailto:community.yib@gmail.com"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                >
                  <FaEnvelope className="w-4 h-4 mr-3" />
                  community.yib@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Community YIB. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;