"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TabContent = ({
	title,
	content,
	buttonText,
	buttonLink,
	learnMoreLink,
}) => (
	<div className="space-y-4">
		<h2 className="text-2xl font-bold text-primary lg:text-3xl pt-4 pb-2">
			{title}
		</h2>
		<p className="text-gray-600 text-base lg:text-lg">{content}</p>
		<div className="flex items-center space-x-6 py-4 lg:py-6">
			<button
				href={buttonLink}
				className="rounded-2xl  bg-primary px-6 py-3 text-sm font-light tracking-wide uppercase text-white transition-colors hover:bg-[#59886b] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
			>
				{buttonText}
			</button>
			<a
				href={learnMoreLink}
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
			</a>
		</div>
	</div>
);

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
				"The variety of programs, conferences, trade shows, and competitions that will be later outlined intend to provide members with access to opportunities, guidance, resources, information, and mentors. These events will be graced with the presence of our handpicked array of seasoned professionals and corporate sponsors.",
			buttonText: "Donate Now",
			buttonLink: "#",
			learnMoreLink: "#",
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
				"Whether on zoom or in person, our founder sits with community members whose ideas, existing businesses, current projects and behaviour stand out. These sessions seek to assist with planning out their ideas, predicting possible obstacles and redundancies to pre-purpose resource solutions, and enabling them to execute or improve on their projects and businesses.",
			buttonText: "Be A Volunteer",
			buttonLink: "#",
			learnMoreLink: "#",
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
				"In addition to the founder-member consultancy, we aim to introduce community members to one another to connect idea developers with skilled members who have the prerequisite abilities to enable execution. Thereafter we will provide this team with the necessary professionals or corporations to bring such ideas to true fruition with the support, investment, guidance or employment they may provide.",
			buttonText: "Be a Sponsor",
			buttonLink: "#",
			learnMoreLink: "#",
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
							<Image
								data-aos="fade-up"
								data-aos-delay="300"
								src={item.src}
								alt={item.alt}
								width={600}
								height={400}
								className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
							/>
						) : (
							<Image
								data-aos="fade-up"
								data-aos-delay="500"
								src={item.src}
								alt={item.alt}
								width={300}
								height={200}
								className="absolute -bottom-10 -right-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
							/>
						)}
					</div>
				))}
			</div>
		);
	};

	return (
		<section className="bg-gray-50 py-20">
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
							goal of producing youth-in businesses and projects.
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
