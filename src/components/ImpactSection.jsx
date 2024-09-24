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
			});

			if (!countUpInstance.current.error) {
				countUpInstance.current.start();
			} else {
				console.error(countUpInstance.current.error);
			}
		}

		return () => {
			if (countUpInstance.current) {
				countUpInstance.current.reset();
			}
		};
	}, [number, prefix, suffix]);

	return (
		<div
			className={`bg-white rounded-lg shadow-lg p-10 transition-transform hover:scale-105 mb-3 ${className}`}
		>
			<Icon className="text-secondary text-5xl mb-4" />
			<span
				ref={countUpRef}
				className="text-[#59886b] text-3xl lg:text-4xl font-bold"
			></span>
			<span className="block text-gray-600 mt-2">{label}</span>
		</div>
	);
};

const ImpactSection = () => {
	return (
		<section className="bg-gray-100 py-20 overflow-hidden">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					<div className="w-full lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-left">
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
						data-aos-delay="300"
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
