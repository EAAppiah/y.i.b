"use client";
import React, { useEffect, useRef } from "react";
import {
  MdOutlineVolunteerActivism,
  MdOutlineCampaign,
  MdAttachMoney,
  MdGroups,
} from "react-icons/md";
import { CountUp } from "countup.js";
import AOS from "aos";
import "aos/dist/aos.css";

const CounterItem = ({
  Icon,
  number,
  label,
  prefix = "",
  suffix = "",
  className = "",
  delay = 0,
}) => {
  const countUpRef = useRef(null);
  const countUpInstance = useRef(null);

  useEffect(() => {
    if (countUpRef.current) {
      countUpInstance.current = new CountUp(countUpRef.current, number, {
        duration: 2.5,
        separator: ",",
        prefix,
        suffix,
        useEasing: true,
        useGrouping: true,
      });

      if (!countUpInstance.current.error) {
        // Delay start to sync with appearance
        setTimeout(() => {
          countUpInstance.current.start();
        }, delay);
      } else {
        console.error(countUpInstance.current.error);
      }
    }

    return () => {
      if (countUpInstance.current) {
        countUpInstance.current.reset();
      }
    };
  }, [number, prefix, suffix, delay]);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`relative bg-white rounded-2xl shadow-lg p-8 transition-all duration-300 
        hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
          <Icon className="text-orange-500 text-3xl" />
        </div>
      </div>
      <div className="space-y-2">
        <span
          ref={countUpRef}
          className="block text-4xl lg:text-5xl font-bold text-primary"
        ></span>
        <span className="block text-gray-600 font-medium text-lg">{label}</span>
      </div>
    </div>
  );
};

const ImpactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-5/12" data-aos="fade-right">
            <div className="relative">
              <span className="inline-block text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-orange-100 mb-3 py-2 px-4 rounded-full">
                Our Impact
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-primary leading-tight">
                Making a Difference in{" "}
                <span className="text-orange-500">2020</span>
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
                <p>
                  A psychosocial community organisation creating a conducive environment for
                  young people to engage in training, gain inspiration, and access tools
                  for idea development.
                </p>
                <p>
                  Founded by Mr. Damon Osei, we address the prejudice and lack of support
                  facing young entrepreneurs. Our mission combats cultural biases and educational
                  gaps that lead to concerning trends in youth activities.
                </p>
                <p>
                  Through mentorship, resources, and community support, we're building a
                  future where youth-led businesses and projects thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-2 gap-6">
              <CounterItem
                Icon={MdOutlineCampaign}
                number={589}
                label="New Initiatives"
                delay={200}
                className="transform hover:rotate-2"
              />
              <CounterItem
                Icon={MdAttachMoney}
                number={920}
                label="Funds Raised"
                prefix="$"
                suffix="M"
                delay={400}
                className="transform hover:-rotate-2"
              />
              <CounterItem
                Icon={MdGroups}
                number={4211}
                label="Community Members"
                delay={600}
                className="transform hover:rotate-2"
              />
              <CounterItem
                Icon={MdOutlineVolunteerActivism}
                number={389}
                label="Active Volunteers"
                delay={800}
                className="transform hover:-rotate-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;