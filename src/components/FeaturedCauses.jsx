"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CauseItem = ({ image, title, description, progress, raised, goal }) => (
	<div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
		<Image
			src={image}
			alt={title}
			width={400}
			height={300}
			className="w-full h-48 sm:h-56 md:h-64 object-cover"
		/>
		<div className="p-4 sm:p-6">
			<h3 className="text-lg sm:text-xl md:text-2xl text-primary font-bold py-2 sm:py-4">
				{title}
			</h3>
			<p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg py-2">
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
			<button className="text-center bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300 text-sm sm:text-base">
				Donate Now
			</button>
		</div>
	</div>
);

const FeaturedCauses = () => {
	const swiperRef = useRef(null);

	const causes = [
		{
			image: "/images/first.jpeg",
			title: "Food for the Hungry",
			description:
				"Support our mission to provide nutritious meals to those in need and combat hunger in vulnerable communities.",
			progress: 25,
			raised: 509,
			goal: 10000,
		},
		{
			image: "/images/second.jpeg",
			title: "Education for Children",
			description:
				"Help us empower children through education, providing resources and support for a brighter future.",
			progress: 68,
			raised: 7597,
			goal: 10000,
		},
		{
			image: "/images/third.jpeg",
			title: "Support Livelihood",
			description:
				"Join our efforts to create sustainable livelihoods and economic opportunities in under-served communities.",
			progress: 87,
			raised: 19509,
			goal: 25000,
		},
		{
			image: "/images/second.jpeg",
			title: "Clean Water Initiative",
			description:
				"Help us provide clean and safe drinking water to communities facing water scarcity and related health issues.",
			progress: 42,
			raised: 3150,
			goal: 7500,
		},
		{
			image: "/images/first.jpeg",
			title: "Healthcare for All",
			description:
				"Support our mission to bring quality healthcare services to under-served and remote communities.",
			progress: 55,
			raised: 11000,
			goal: 20000,
		},
		{
			image: "/images/fourth.jpeg",
			title: "Environmental Conservation",
			description:
				"Join our efforts to protect and preserve natural habitats and promote sustainable environmental practices.",
			progress: 30,
			raised: 1500,
			goal: 5000,
		},
	];

	return (
		<section className="bg-gray-100 py-8 sm:py-12 md:py-16">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8 sm:mb-12">
					<span className="inline-block text-xs sm:text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 mb-2 sm:mb-3 py-1 sm:py-2 px-2 sm:px-4 rounded-full">
						Causes
					</span>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4 text-primary">
						Featured Causes
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto md:text-sm text-base">
						Join us in making a difference. Your support can change lives and
						create lasting impact in communities around the world.
					</p>

					<div className="py-10 flex justify-center space-x-2 sm:space-x-4">
						<button
							className="outline outline-offset-2 outline-1 outline-gray-300 hover:outline-offset-2 text-black uppercase px-2 sm:px-4 py-1 sm:py-2 rounded-full flex items-center hover:outline-black transition duration-300 text-xs sm:text-sm"
							onClick={() => swiperRef.current?.slidePrev()}
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
							onClick={() => swiperRef.current?.slideNext()}
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
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper;
					}}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
				>
					{causes.map((cause, index) => (
						<SwiperSlide key={index}>
							<CauseItem {...cause} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default FeaturedCauses;
