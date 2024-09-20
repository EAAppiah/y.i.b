"use client";
import { useState, useEffect } from "react";

const Hero = () => {
	const [isClient, setIsClient] = useState(false);

	// useEffect(() => {
	// 	setIsClient(true);
	// 	AOS.init({
	// 		duration: 1000,
	// 		once: true,
	// 	});
	// }, []);

	const donationAmounts = [10, 25, 50, 100];

	return (
		<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 py-16 md:py-20">
			<div className="absolute inset-0 z-0">
				<img
					src="/images/hero-background.jpg"
					alt="Hero Background"
					className="object-cover w-full h-full opacity-20"
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
						<span
							className="inline-block text-orange-300 text-xs md:text-sm font-semibold tracking-wide uppercase bg-[#DA5D01] bg-opacity-20 mb-3 py-2 px-4 rounded-full"
							data-aos="fade-right"
						>
							Make a Difference
						</span>
						<h1
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-white my-4 tracking-tight leading-tight"
							data-aos="fade-right"
							data-aos-delay="100"
						>
							Give a helping hand to those who need it!
						</h1>
						<p
							data-aos="fade-right"
							data-aos-delay="200"
							className="my-6 text-gray-300 text-lg md:text-xl max-w-xl mx-auto lg:mx-0"
						>
							Join our mission to create positive change. Your support can
							transform lives and build stronger communities.
						</p>
						<div
							data-aos="fade-right"
							data-aos-delay="300"
							className="mt-8 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center lg:justify-start"
						>
							<a
								href="#donate"
								className="btn btn-primary inline-flex items-center justify-center bg-[#FC6B00] hover:bg-[#DA5D01] text-gray-900 font-semibold px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
							>
								<span className="mr-2">🤲</span>
								<span>Donate Now</span>
							</a>
							<a
								href="#"
								className="text-white hover:text-yellow-300 inline-flex items-center justify-center transition duration-300 ease-in-out"
							>
								<span className="mr-2">▶</span>
								<span>Watch our story</span>
							</a>
						</div>
					</div>

					<div
						className="w-full lg:w-[40%] py-16"
						data-aos="fade-left"
						data-aos-delay="400"
					>
						<form className="bg-white bg-opacity-95 p-6 md:p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
							<h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 text-center">
								Quick Donation
							</h3>
							<div className="mb-6 flex flex-wrap justify-center gap-3">
								{donationAmounts.map((amount) => (
									<label key={amount} className="flex items-center">
										<input
											type="radio"
											name="donation-amount"
											value={amount}
											className="sr-only peer"
										/>
										<span className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 peer-checked:bg-[#FC6B00] peer-checked:text-white transition duration-300 ease-in-out cursor-pointer">
											${amount}
										</span>
									</label>
								))}
							</div>
							<div className="relative mb-6">
								<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
									$
								</span>
								<input
									type="text"
									placeholder="Enter custom amount"
									className="form-input pl-8 w-full border-2 border-gray-300 focus:border-yellow-500 rounded-lg px-4 py-3 transition duration-300 ease-in-out"
									name="custom-donation"
								/>
							</div>
							<div className="mb-6 space-y-4">
								<input
									type="text"
									placeholder="Full Name"
									className="form-input w-full border-2 border-gray-300 focus:border-yellow-500 rounded-lg px-4 py-3 transition duration-300 ease-in-out"
								/>
								<input
									type="email"
									placeholder="Email Address"
									className="form-input w-full border-2 border-gray-300 focus:border-yellow-500 rounded-lg px-4 py-3 transition duration-300 ease-in-out"
								/>
							</div>
							<button
								type="submit"
								className="w-full text-center bg-orange-500 hover:bg-[#DA5D01] text-white font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
							>
								Donate Now
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
