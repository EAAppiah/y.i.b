"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import DonationModal from "./DonationModal";

const CauseItem = ({
  image,
  title,
  description,
  progress,
  raised,
  goal,
  onDonate,
}) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden h-full"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <Image
      src={image}
      alt={title}
      width={400}
      height={300}
      priority={true}
      className="w-full h-48 sm:h-56 md:h-64 object-cover"
    />
    <div className="p-4 sm:p-6">
      <h3 className="text-lg sm:text-xl md:text-2xl text-black font-bold py-2 sm:py-4">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 text-sm md:text-base py-2">
        {description}
      </p>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4.5">
          <div
            className="bg-primary h-4.5 text-white rounded-full text-center text-xs sm:text-sm"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </div>
      <div className="flex justify-between text-sm lg:text-lg text-gray-500 mb-4">
        <span>${raised.toLocaleString()}</span>
        <span>${goal.toLocaleString()}</span>
      </div>
      <button
        onClick={() => onDonate(title)}
        className="text-center bg-gradient-to-r from-orange-400 to-orange-600 transform text-white py-2 px-4 rounded-full hover:bg-primary-dark transition-transform duration-300 text-sm sm:text-base"
      >  
        Donate Now
      </button>
    </div>
  </div>
);

const FeaturedCauses = () => {
  const swiperRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCause, setSelectedCause] = useState(null);

  const handleDonate = (causeTitle) => {
    setSelectedCause(causeTitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCause(null);
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const causes = [
    {
      image: "/images/food.jpeg",
      title: "Ghana Must Go Help Project Launch 2019 (Rewriting The Story)",
      description: "Inspired by the 1983 deportation of Ghanaians from Nigeria, YIB's Ghana Must Go Help (GMGH) Project repurposes the once-stigmatized checkered bags into a symbol of support, unity, and empowerment, providing aid to underserved communities like Heart of The Father and New Life Orphanages.",      
      progress: 100,
      raised: 3000,
      goal: 3000,
    },
    {
      image: "/images/YIBxHUGS.jpg",
      title: "YIB X HUGS FOUNDATION (Partnership)",
      description:
        "HUGS Foundation & Y.I.B partner to support Martey Tsuru School, providing funds, infrastructure, and artisans to restore classrooms and security. Inspired by Y.I.B, students launched a One Ghana Cedi a Day initiative for sustained impact.",
      progress: 100,
      raised: 4200,
      goal: 4200,
    },
    {
      image: "/images/support.jpeg",
      title: "GMGH 2020 (Push To Start)",
      description:
        "Building on years of support for The Heart of the Father Orphanage, YIB expands its impact by connecting the home with other charities and empowering individuals—investing in skills like sewing and soap production to foster self-sufficiency.",
      progress: 82,
      raised: 4100,
      goal: 5000,
    },
    {
      image: "/images/YMF-support.jpg",
      title: "YIB Partners The Samaritan Project",
      description:
        "The Samaritan Project, with support from Y.I.B's internally generated funds, and donations aims to combat COVID-19 hardships by raising money to support 100 families in La-Tseado with sanitizers, masks, and food packages. The initiative addressed economic inequalities exacerbated by the pandemic.",
      progress: 95,
      raised: 3325,
      goal: 3500,
    },
    {
      image: "/images/education.jpeg",
      title: "YIB Supports YMF LAUNCH",
      description:
        " The YMF Foundation focuses on education, launching the YMF Scholarship Scheme in 2021 to support academically excellent but financially disadvantaged young girls in Ghana. Y.I.B assisted with branding, fundraising, and planning, and a commitment to being a incountry partner for soft skills training in perpetuity",
      progress: 30,
      raised: 3000,
      goal: 10000,
    },
    {
      image: "/images/hearts-avetime.jpg",
      title: "GMGH 2021 (YIB HEARTS AVEYIME)",
      description: "This year, YIB extends the GMGH Project to Aveyime, North Tongu, aiming to donate over 100 bags of essential supplies and money to the community—including food, clothing, and hygiene products—to support the community. Special thanks to Rev. Mawuli Okudzeto and Hon. Okudzeto-Ablakwa",
      progress: 50,
      raised: 1000,
      goal: 2000,
    },
    {
      image: "/images/month-of-love.jpg",
      title: "GMGH 2022 (Month Of Love Project)",
      description: "In February, YIB's GMGH Foundation, alongside DNT Ghana, Purple Rain Decor, and YMF Ghana, aims to donate money for academic  materials & tools, school fees, and GMGH bags filled with essentials to  support orphanages in Prampram, continuing a legacy of care and  empowerment",
      progress: 60,
      raised: 3000,
      goal: 5000,
    },
    {
      image: "/images/ignite-conference.jpg",
      title: "Ignite Conference 2022",
      description: "YIB's Ignite Conference 2022 will bring together 500+ young people to network and gain insights from industry leaders, including Her Excellency Anne Sophie Avé, Gillian Hammah, Andrew Achampong-Kyei, Yaw Sakyi, and Kofi Genfi, inspiring youth to take charge in business, innovation, and industry",
      progress: 76,
      raised: 7600,
      goal: 10000,
    },
    {
      image: "/images/revival.jpg",
      title: "GMGH CLOTHES DRIVE IN PARTNERSHIP WITH REVIVAL FEAST",
      description: "Y.I.B corporate social responsibility project partnered with Revival Feast to support homeless and displaced individuals. Through the Ghana Must Go Help Foundation, in collaboration with Anita Owusu Evangelistic Ministries, a free clothes stand was set up, providing over 200 attendees with donated clothing, shoes, bags, and financial support",
      progress: 100,
      raised: 1600,
      goal: 1600,
    },
    {
      image: "/images/YIBxYMF.jpg",
      title: "YIB X YMF 2023 Empowering Futures",
      description: "YIB and YMF spent a day with financially disadvantaged girls we sponsor, guiding them on their educational and career paths. We brought professionals from various fields to mentor them, providing insights and inspiration for their future careers. Through interactive sessions and personal guidance, the girls gained valuable knowledge and motivation to pursue their dreams. This collaboration reflects our commitment to empowering young women through education and mentorship.",
      progress: 100,
      raised: 4800,
      goal: 4800,
    },
  ];

  return (
    <section id="services" className="bg-gray-100 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 mb-2 sm:mb-3 py-1 sm:py-2 px-2 sm:px-4 rounded-full">
            Causes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4 text-primary">
            Causes & Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto md:text-sm text-base">
            Join us in making a difference. Your support continuously changes
            lives and creates a lasting impact in a wide variety of communities.
          </p>

          <div className="pt-6 flex justify-center space-x-2 sm:space-x-4">
            <button
              className="outline outline-offset-2 outline-1 outline-gray-300 hover:outline-offset-2 text-black uppercase px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center hover:outline-black transition duration-300 text-xs sm:text-sm"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Prev</span>
            </button>
            <button
              className="outline outline-offset-2 outline-1 outline-gray-300 hover:outline-offset-2 text-black uppercase px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center hover:outline-black transition duration-300 text-xs sm:text-sm"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <span>Next</span>
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-1 sm:ml-2"
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
            </button>
          </div>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          className="mySwiper"
        >
          {causes.map((cause, index) => (
            <SwiperSlide key={index}>
              <CauseItem {...cause} onDonate={handleDonate} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Donation Modal */}
      <DonationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        causeTitle={selectedCause}
      />
    </section>
  );
};

export default FeaturedCauses;