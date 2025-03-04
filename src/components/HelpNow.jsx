"use client";
import Link from "next/link";

const HelpNow = () => {
	const scrollToCauses = () => {
		const causesSection = document.getElementById('causes');
		const navbar = document.querySelector('nav');
		if (causesSection) {
			const navbarHeight = navbar ? navbar.offsetHeight : 0;
			const causesPosition = causesSection.getBoundingClientRect().top + window.pageYOffset;
			window.scrollTo({
				top: causesPosition - navbarHeight - 17,
				behavior: 'smooth'
			});
		}
	};

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
					<p
						className="text-xl md:text-2xl lg:text-5xl font-bold text-white mb-10"
						data-aos="fade-up"
						data-aos-delay="300"
					>
						Let’s Turn Today’s Youth Into Tomorrow’s Changemakers
					</p>
					<div
						className="flex flex-col sm:flex-row justify-center gap-4"
						data-aos="fade-up"
						data-aos-delay="500"
					>
						<Link 
							href="https://docs.google.com/forms/d/e/1FAIpQLSdiTokiG23R4iGPTyz47riSJOcplsgXDRz0xYWkQXo9ZGAK9Q/viewform?usp=sharing"
							target="_blank" 
							rel="noopener noreferrer"
							className="cursor-pointer outline outline-offset-2 outline-1 outline-white hover:text-white hover:bg-primary text-white uppercase font-semibold py-3 px-6 rounded-full transition duration-300 text-center"
						>
							Become a Volunteer
						</Link>
						<button 
							onClick={scrollToCauses}
							className="cursor-pointer uppercase bg-secondary text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-center hover:bg-secondary/90"
						>
							Donate Now
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HelpNow;