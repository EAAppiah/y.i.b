"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaInstagram } from "react-icons/fa";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const InstagramSection = () => {
	const instagramImages = [
		"/images/first.jpeg",
		"/images/second.jpeg",
		"/images/third.jpeg",
		"/images/fourth.jpeg",
		"/images/boy.jpg",
		"/images/second.jpeg",
		"/images/fourth.jpeg",
	];

	return (
		<section className="pt-20">
			<div className="container mx-auto px-4 mb-12">
				<div className="flex flex-col lg:flex-row items-center lg:items-start -mx-4">
					<div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
						<span className="inline-block text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 mb-3 py-2 px-2 sm:px-4 rounded-full">
							Instagram
						</span>
						<h2 className="text-3xl lg:text-5xl font-bold mb-0 lg:mb-4 text-primary pt-2 lg:py-4">
							We Are On Instagram
						</h2>
					</div>
					<div className="w-full lg:w-2/3 px-4 py-0 lg:py-8">
						<p className="text-gray-600 text-lg">
							Follow us on Instagram for the latest updates, behind-the-scenes
							content, and exciting announcements. Join our community and be
							part of our journey!
						</p>
					</div>
				</div>
			</div>

			<div>
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
								href="#"
								className="block w-full h-full relative overflow-hidden group"
								aria-label={`View Instagram post ${index + 1}`}
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
		</section>
	);
};

export default InstagramSection;
