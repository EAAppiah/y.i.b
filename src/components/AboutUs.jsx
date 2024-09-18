"use client";
import React, { useState } from "react";
import Image from "next/image";

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
	const [activeTab, setActiveTab] = useState("mission");

	const tabs = [
		{ id: "mission", label: "Our Mission" },
		{ id: "values", label: "Our Values" },
		{ id: "history", label: "Our History" },
	];

	const tabContents = {
		mission: {
			title: "Our Mission",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eveniet voluptates eligendi maxime ad. Quas commodi distinctio modi, aspernatur, quos neque omnis magnam voluptatibus, sapiente fugiat cupiditate velit impedit praesentium. Reprehenderit hic illo, nulla autem odit molestiae molestias, dolores accusantium eos? Ut aspernatur fuga labore eius sequi nihil sit iusto, enim. Aliquam, cumque! Quaerat inventore illo dicta, exercitationem natus ducimus?",
			buttonText: "Donate Now",
			buttonLink: "#",
			learnMoreLink: "#",
		},
		values: {
			title: "Our Values",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eveniet voluptates eligendi maxime ad. Quas commodi distinctio modi, aspernatur, quos neque omnis magnam voluptatibus, sapiente fugiat cupiditate velit impedit praesentium. Reprehenderit hic illo, nulla autem odit molestiae molestias, dolores accusantium eos? Ut aspernatur fuga labore eius sequi nihil sit iusto, enim. Aliquam, cumque! Quaerat inventore illo dicta, exercitationem natus ducimus?",
			buttonText: "Be A Volunteer",
			buttonLink: "#",
			learnMoreLink: "#",
		},
		history: {
			title: "Our History",
			content:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eveniet voluptates eligendi maxime ad. Quas commodi distinctio modi, aspernatur, quos neque omnis magnam voluptatibus, sapiente fugiat cupiditate velit impedit praesentium. Reprehenderit hic illo, nulla autem odit molestiae molestias, dolores accusantium eos? Ut aspernatur fuga labore eius sequi nihil sit iusto, enim. Aliquam, cumque! Quaerat inventore illo dicta, exercitationem natus ducimus?",
			buttonText: "Be a Sponsor",
			buttonLink: "#",
			learnMoreLink: "#",
		},
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
							Dedicated to making a difference, we work tirelessly to address
							global challenges and create positive change in communities around
							the world.
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
					<div className="lg:w-6/12" data-aos="fade-up" data-aos-delay="300">
						<div className="relative">
							<Image
								src="/images/second.jpeg"
								alt="Our work in action"
								width={600}
								height={400}
								className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
							/>
							<Image
								src="/images/third.jpeg"
								alt="Making a difference"
								width={300}
								height={200}
								className="absolute -bottom-10 -right-10 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
