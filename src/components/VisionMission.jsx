"use client";
import React from "react";

const VisionMission = () => {
  const content = [
    {
      title: "Our Vision",
      description:
        "We envision a youth-focused economy wherein youth from all walks of life have access to this organization and the information, tools, and network necessary to create opportunities for themselves.",
      delay: 0,
    },
    {
      title: "Our Mission",
      description:
        "Our mission is to build a community of like-minded young, innovative, intellectuals, entrepreneurs, and creatives. We aim to create a conducive environment for prodigious ideas to erupt and develop into youth-induced, youth-inclusive, and youth-interdependent businesses and projects.",
      delay: 100,
    },
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    const navbar = document.querySelector('nav');
    if (aboutSection) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const aboutPosition = aboutSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: aboutPosition - navbarHeight - 17,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="bg-white p-8 rounded-lg shadow-md h-full border-t-8 border-[#ffc85c] hover:-translate-y-3 transition duration-300 ease-in-out">
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={scrollToAbout}
                  className="text-lg inline-block py-2.5 text-[#59886b] transition-colors duration-300 border-b-2 border-[#59886b] hover:text-[#447559] hover:border-[#447559]"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;