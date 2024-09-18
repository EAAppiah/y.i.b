"use client";

import React from "react";
import { useEffect } from "react";

const CounterItem = ({ icon, number, label, prefix = "", suffix = "" }) => (
	<div className="counter mb-8">
		<i className={`${icon} block text-secondary text-4xl mb-2`}></i>
		<span className="number text-3xl font-bold">
			{prefix}
			<span className="countup">{number}</span>
			{suffix}
		</span>
		<span className="block text-gray-600">{label}</span>
	</div>
);

const ImpactSection = () => {
	useEffect(() => {
		// This is where you'd typically initialize a counter animation library
		// For example, using a library like CountUp.js
		// countUpInit();
	}, []);

	return (
		<section className="bg-light py-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap justify-between">
					<div className="w-full lg:w-5/12 mb-10 lg:mb-0" data-aos="fade-up">
						<span className="text-primary font-semibold mb-3 block">
							Impact
						</span>
						<h2 className="text-3xl lg:text-4xl font-bold mb-4">
							Explore Volunteer work and Impact in 2020
						</h2>
						<p className="mb-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing, elit.
							Inventore, vero quibusdam quisquam nisi officia obcaecati, modi
							impedit veniam nam possimus!
						</p>
						<p>
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
						<div className="grid grid-cols-2 gap-4">
							<div>
								<CounterItem
									icon="flaticon-social-services"
									number={589}
									label="New Causes"
								/>
								<CounterItem
									icon="flaticon-charity-money"
									number={920}
									label="Fund Raised"
									prefix="$"
									suffix="M"
								/>
							</div>
							<div className="mt-8">
								<CounterItem
									icon="flaticon-money-donation"
									number={4211}
									label="Donors"
								/>
								<CounterItem
									icon="flaticon-organs-donation"
									number={389}
									label="Volunteers"
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
