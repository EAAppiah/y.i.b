"use client";

import React from "react";
// import { useEffect } from "react";
import {
	MdOutlineVolunteerActivism,
	MdOutlineCampaign,
	MdAttachMoney,
	MdGroups,
} from "react-icons/md";

const CounterItem = ({
	Icon,
	number,
	label,
	prefix = "",
	suffix = "",
	className = "",
}) => (
	<div
		className={`bg-white rounded-lg shadow-lg p-10 transition-transform hover:scale-105 mb-3 ${className}`}
	>
		<Icon className="text-secondary text-5xl mb-4" />
		<span className="text-[#59886b] text-3xl lg:text-4xl font-bold">
			{prefix}
			<span className="countup">{number.toLocaleString()}</span>
			{suffix}
		</span>
		<span className="block text-gray-600 mt-2">{label}</span>
	</div>
);

const ImpactSection = () => {
	// useEffect(() => {
	// 	// This is where you'd typically initialize a counter animation library
	// 	// For example, using a library like CountUp.js
	// 	// countUpInit();
	// }, []);

	return (
		<section className="bg-gray-100 py-20 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					<div className="w-full lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-up">
						<span className="inline-block text-sm md:text-base text-orange-500 font-semibold tracking-wide uppercase bg-[#da9a6d] bg-opacity-20 mb-3 py-2 px-2 sm:px-4 rounded-full">
							Impact
						</span>
						<h2 className="text-3xl lg:text-6xl font-bold mb-4 text-primary py-4">
							Explore Volunteer work and Impact in 2020
						</h2>
						<p className="mb-4 text-lg text-gray-600">
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
							Inventore, vero quibusdam quisquam nisi officia obcaecati, modi
							impedit veniam nam possimus!
						</p>
						<p className="text-lg text-gray-600">
							Corporis culpa facilis, nesciunt repellat amet nihil voluptatibus
							repudiandae blanditiis officia, ullam adipisci molestiae minima
							magnam quas ex temporibus aliquid!
						</p>
					</div>
					<div
						className="w-full lg:w-6/12"
						data-aos="fade-up"
						data-aos-delay="100"
					>
						<div className="grid grid-cols-2 gap-6 transform">
							<div className="space-y-6">
								<CounterItem
									Icon={MdOutlineCampaign}
									number={589}
									label="New Causes"
									className="transform rotate-6"
								/>
								<CounterItem
									Icon={MdAttachMoney}
									number={920}
									label="Funds Raised"
									prefix="$"
									suffix="M"
									className="transform rotate-6"
								/>
							</div>
							<div className="space-y-6 transform translate-y-4">
								<CounterItem
									Icon={MdGroups}
									number={4211}
									label="Donors"
									className="transform rotate-6"
								/>
								<CounterItem
									Icon={MdOutlineVolunteerActivism}
									number={389}
									label="Volunteers"
									className="transform rotate-6"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImpactSection;
