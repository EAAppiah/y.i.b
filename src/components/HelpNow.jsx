"use client";
import Link from "next/link";

const HelpNow = () => {
	return (
		<section
			className="relative py-24 bg-cover bg-center overflow-hidden"
			style={{ backgroundImage: "url('/images/boy.jpg')" }}
		>
			<div className="absolute inset-0 opacity-30 bg-[#59886B]"></div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="py-2 inline-block text-white font-semibold tracking-wide uppercase bg-white shadow-xl bg-opacity-20 mb-3 px-4 rounded-full">
						Help Now
					</h2>
					<p className="text-xl md:text-2xl lg:text-6xl font-bold text-white mb-10">
						Let's Help The Unfortunate People
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<button className="cursor-pointer outline outline-offset-2 outline-1 outline-white hover:text-black hover:bg-white text-white uppercase font-semibold py-3 px-6 rounded-full transition duration-300 text-center">
							Become a Volunteer
						</button>
						<button className="cursor-pointer uppercase bg-secondary text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center">
							Donate Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HelpNow;
