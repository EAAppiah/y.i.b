import React from "react";
import Image from "next/image";
import {
	FaBottleWater,
	FaUserGraduate,
	FaCircleDollarToSlot,
	FaSuitcaseMedical,
} from "react-icons/fa6";

const FlipCard = ({ icon: Icon, title, description, delay }) => (
	<div
		className="w-full sm:w-1/2 lg:w-1/4 p-4"
		data-aos="fade-up"
		data-aos-delay={delay}
	>
		<div className="group h-32 xl:h-64 w-full [perspective:1000px]">
			<div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
				<div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white">
					<Icon className="text-4xl text-[#FC6B00] mb-4" />
					<h3 className="text-2xl font-bold text-primary">{title}</h3>
				</div>
				<div className="absolute inset-0 h-full w-full rounded-xl bg-white px-8 text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
					<div className="flex min-h-full flex-col items-center justify-center">
						<h3 className="text-primary text-2xl font-bold mb-2">{title}</h3>
						<p className="text-md xl:text-lg">{description}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const HelpToday = () => {
	const cards = [
		{
			icon: FaBottleWater,
			title: "Pure Water",
			delay: 100,
			description: "Provide clean, safe drinking water to communities in need.",
		},
		{
			icon: FaUserGraduate,
			title: "Give Education",
			delay: 200,
			description:
				"Support education initiatives for underprivileged children.",
		},
		{
			icon: FaCircleDollarToSlot,
			title: "Give Donation",
			delay: 300,
			description:
				"Contribute financially to support various humanitarian causes.",
		},
		{
			icon: FaSuitcaseMedical,
			title: "Medical Mission",
			delay: 400,
			description:
				"Participate in medical outreach programs to underserved areas.",
		},
	];

	return (
		<section
			className="relative py-20 bg-cover bg-center overflow-hidden"
			style={{ backgroundImage: "url('/images/first.jpeg')" }}
		>
			<div className="absolute inset-0 bg-[#59886B] opacity-80"></div>
			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center mb-12" data-aos="fade-up">
					<span className="inline-block text-white text-xs md:text-sm font-semibold tracking-wide uppercase bg-[#FC6B00] bg-opacity-20 mb-3 py-2 px-4 rounded-full">
						Help Now
					</span>
					<h2 className="text-4xl md:text-6xl font-bold text-white">
						Help Today
					</h2>
				</div>
				<div className="flex flex-wrap -mx-4">
					{cards.map((card, index) => (
						<FlipCard key={index} {...card} />
					))}
				</div>
			</div>
			<div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 overflow-hidden opacity-30">
				<Image
					src="/images/blob.png"
					alt="Blob"
					width={256}
					height={256}
					className="w-full h-full object-cover"
				/>
			</div>
		</section>
	);
};

export default HelpToday;
