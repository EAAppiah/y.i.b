"use client";

import React, { useState } from 'react';
import DonationForm from '@/components/DonationForm';

const Hero = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 py-16 md:py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/education.jpeg"
          alt="Community helping hands"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full bg-orange-500/20 mb-6">
              <span className="animate-pulse">❤️</span>
              <span>Make a Difference Today</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Give a Helping Hand to Those in Need
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Join our psychosocial community organization in creating a nurturing environment 
              where young people can thrive, grow, and build a better future together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setIsFormVisible(true)}
                className={`
                  inline-flex items-center justify-center px-8 py-4 
                  bg-orange-500 hover:bg-orange-600 text-white font-semibold 
                  rounded-full transition-all duration-300 transform 
                  hover:-translate-y-1 shadow-lg hover:shadow-orange-500/50
                  ${!isFormVisible ? 'scale-105' : 'scale-100'}
                `}
              >
                <span className="mr-2">💰</span>
                Donate Now
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-300">
                <span className="mr-2">▶️</span>
                Watch Our Story
              </button>
            </div>
          </div>

          {/* Right Content - Donation Form */}
          <div 
            className={`
              w-full lg:w-5/12 transition-all duration-500
              ${isFormVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}
          >
            <DonationForm isFormVisible={isFormVisible} setIsFormVisible={setIsFormVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;