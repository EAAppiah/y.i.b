"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaInstagram, FaFilePdf, FaDownload, FaTimes } from "react-icons/fa";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const InstagramSection = () => {
  const [showPdf, setShowPdf] = useState(false);

  const instagramImages = [
    "/images/insta/first.jpeg",
    "/images/insta/second.jpeg",
    "/images/insta/third.jpeg",
    "/images/insta/fourth.jpeg",
    "/images/insta/fifth.jpeg",
    "/images/insta/sixth.jpeg",
    "/images/insta/seventh.jpeg",
  ];

  return (
    <section id="instagram" className="pt-20 relative">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8" data-aos="fade-left">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-4">
              <span className="inline-block text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 py-2 px-2 sm:px-4 rounded-full w-fit">
                Instagram
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold text-primary">
                We Are On Instagram
              </h2>
              <p className="text-gray-600 text-lg mt-2">
                Follow us on Instagram for the latest updates, behind-the-scenes
                content, and exciting announcements. Join our community and be
                part of our journey!
              </p>
            </div>
            
            <button 
              onClick={() => setShowPdf(true)}
              className="mt-6 flex items-center gap-2 bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full transition duration-300"
              aria-label="View YIB Overview"
            >
              <FaFilePdf className="text-xl" />
              <span>YIB Overview</span>
            </button>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[FreeMode, Autoplay]}
        >
          {instagramImages.map((img, index) => (
            <SwiperSlide key={index} className="aspect-square">
              <a
                target="_blank"
                href="https://www.instagram.com/yibcommunity/"
                className="block w-full h-full relative overflow-hidden group"
                aria-label={`View Instagram post ${index + 1}`}
                rel="noopener noreferrer"
              >
                <Image
                  src={img}
                  alt={`Instagram Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-4xl" />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* PDF Viewer Modal */}
      {showPdf && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col relative">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaFilePdf className="text-primary" /> 
                YIB Community Overview
              </h3>
              <div className="flex items-center gap-4">
                <a 
                  href="/yib-overview.pdf" 
                  download 
                  className="flex items-center gap-2 text-primary hover:text-primary/80"
                >
                  <FaDownload /> Download
                </a>
                <button 
                  onClick={() => setShowPdf(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close PDF viewer"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe 
                src="/yib-overview.pdf" 
                className="w-full h-full" 
                title="YIB Overview PDF"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InstagramSection;