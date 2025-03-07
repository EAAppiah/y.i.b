"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TabContent = ({ title, content, buttonText, buttonLink }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    const navbar = document.querySelector("nav");
    if (aboutSection) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const aboutPosition =
        aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: aboutPosition - navbarHeight - 17,
        behavior: "smooth",
      });
    }
  };

  const scrollToCauses = () => {
    const causesSection = document.getElementById("services");
    const navbar = document.querySelector("nav");
    if (causesSection) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const causesPosition =
        causesSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: causesPosition - navbarHeight - 17,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-primary lg:text-3xl pt-4 pb-2">
        {title}
      </h2>
      <p className="text-gray-600 text-base lg:text-lg">{content}</p>
      <div className="flex items-center space-x-6 py-4 lg:py-6">
        <button
          onClick={buttonText === "Donate Now" ? scrollToCauses : null}
          className="rounded-2xl bg-primary px-6 py-3 text-sm font-light tracking-wide uppercase text-white transition-colors hover:bg-[#59886b] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          {buttonText}
        </button>
        {/* <button
          onClick={scrollToAbout}
          className="group flex items-center text-primary focus:outline-none"
        >
          Learn More
          <svg
            className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeTab, setActiveTab] = useState("events");

  const tabs = [
    { id: "events", label: "Events" },
    { id: "sessions", label: "Sessions" },
    { id: "networkingResource", label: "Networking" },
  ];

  const tabContents = {
    events: {
      title: "Events",
      content:
        "We offer a diverse range of programs, conferences, trade shows, and competitions that provide our members with access to opportunities, guidance, resources, information, and mentorship. These events feature seasoned professionals and corporate sponsors who enrich our community.",
      buttonText: "Donate Now",
      buttonLink: "#",
      media: [
        {
          type: "image",
          src: "/images/networking1.jpeg",
          alt: "Events Image 1",
        },
        {
          type: "img",
          src: "/images/events2.jpeg",
          alt: "Events Image 2",
        },
      ],
    },
    sessions: {
      title: "One-on-One Sessions",
      content:
        "Through both virtual and in-person sessions, our founder and/or mentors actively engage with community members whose ideas, businesses, projects, and initiatives stand out. These sessions provide tailored guidance, helping members refine their plans, anticipate potential challenges, and proactively allocate resources for optimal execution and growth. Many have successfully launched and expanded their ventures through this structured mentorship.",
      buttonText: "Be A Volunteer",
      buttonLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdiTokiG23R4iGPTyz47riSJOcplsgXDRz0xYWkQXo9ZGAK9Q/viewform?usp=sharing",
      media: [
        {
          type: "image",
          src: "/images/session2.jpeg",
          alt: "Session Image 1",
        },
        {
          type: "img",
          src: "/images/session1.jpeg",
          alt: "Session Image 2",
        },
      ],
    },
    networkingResource: {
      title: "Networking & Resource",
      content:
        "Beyond one-on-one consultancy, we have built a thriving network where community members actively connect with skilled peers who can help bring their ideas to life. Our platform has successfully linked aspiring entrepreneurs with experienced professionals and corporations, facilitating collaborations that have led to business growth, investments, employment opportunities, and long-term success.",
      buttonText: "Be A Regular Sponsor or Trainer Mentor",
      buttonLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSdiTokiG23R4iGPTyz47riSJOcplsgXDRz0xYWkQXo9ZGAK9Q/viewform?usp=sharing",
      media: [
        {
          type: "image",
          src: "/images/yib-group2.jpeg",
          alt: "Networking Image 1",
        },
        {
          type: "img",
          src: "/images/events1.jpeg",
          alt: "Networking Image 2",
        },
      ],
    },
  };

  const renderMedia = (media) => {
    return (
      <div className="space-y-4">
        {media.map((item, index) => (
          <div key={index} className="relative">
            {item.type === "image" ? (
              <div className="relative h-auto w-full aspect-video">
                <Image
                  data-aos="fade-up"
                  data-aos-delay="300"
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
            ) : (
              <div className="absolute -bottom-10 -right-10 w-[250px] h-auto">
                <Image
                  data-aos="fade-up"
                  data-aos-delay="500"
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={200}
                  priority={true}
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 lg:mb-0 lg:w-5/12" data-aos="fade-up">
            <span className="inline-block text-sm xl:text-base text-orange-400 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 mb-3 py-2 px-4 rounded-full">
              Who we are
            </span>
            <h2 className="my-4 text-4xl font-bold md:text-6xl text-primary tracking-wide">
              About Us
            </h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Our community organisation aims to create a conducive environment
              for young people to engage in training, gain inspiration, and be
              provided with the tools necessary for idea development with the
              goal of producing youth-in (youth-induced, youth-inclusive,
              youth-interdependent) businesses and projects.
            </p>
          </div>
          <div className="lg:w-6/12" data-aos="fade-up" data-aos-delay="100">
            <blockquote className="border-l-8 border-secondary bg-white text-lg p-6 italic text-gray-600 shadow-lg">
              "Together, we can build a better world. Our strength lies in our
              unity and our unwavering commitment to positive change."
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div
            className="mb-8 lg:mb-0 lg:w-5/12"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-6 flex space-x-2 border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-4 text-sm lg:text-lg font-medium transition-colors focus:outline-none ${
                    activeTab === tab.id
                      ? "border-b-2 border-primary text-primary"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <TabContent {...tabContents[activeTab]} />
            </div>
          </div>
          <div className="lg:w-6/12">
            <div className="relative">
              {renderMedia(tabContents[activeTab].media)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;