import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
	FaInstagram,
	FaTwitter,
	FaFacebookF,
	FaLinkedinIn,
	FaPinterest,
	FaDribbble,
} from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-black py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="font-bold mb-4 text-white uppercase">Contact</h3>
						<address className="not-italic mb-4 text-[#88888B]">
							1st Bawaleshie Rd, East Legon, Accra Gh
						</address>
						<ul className="space-y-2 text-gray-300">
							<li>
								<a
									href="tel://11234567890"
									className="underline hover:no-underline hover:text-white"
								>
									+1(123)-456-7890
								</a>
							</li>
							<li>
								<a
									href="tel://11234567890"
									className="underline hover:no-underline hover:text-white"
								>
									+1(123)-456-7890
								</a>
							</li>
							<li>
								<a
									href="mailto:info@mydomain.com"
									className="underline hover:no-underline hover:text-white"
								>
									info@mydomain.com
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-4 text-white uppercase">Sources</h3>
						<div className="flex space-x-20">
							<ul className="space-y-2 text-gray-300">
								<li>
									<Link
										href="/about"
										className="underline hover:no-underline hover:text-white"
									>
										About us
									</Link>
								</li>
								<li>
									<Link
										href="/services"
										className="underline hover:no-underline hover:text-white"
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										href="/vision"
										className="underline hover:no-underline hover:text-white"
									>
										Vision
									</Link>
								</li>
								<li>
									<Link
										href="/mission"
										className="underline hover:no-underline hover:text-white"
									>
										Mission
									</Link>
								</li>
								<li>
									<Link
										href="/terms"
										className="underline hover:no-underline hover:text-white"
									>
										Terms
									</Link>
								</li>
								<li>
									<Link
										href="/privacy"
										className="underline hover:no-underline hover:text-white"
									>
										Privacy
									</Link>
								</li>
							</ul>
							<ul className="space-y-2 text-gray-200">
								<li>
									<Link
										href="/partners"
										className="underline hover:no-underline hover:text-white"
									>
										Partners
									</Link>
								</li>
								<li>
									<Link
										href="/business"
										className="underline hover:no-underline hover:text-white"
									>
										Business
									</Link>
								</li>
								<li>
									<Link
										href="/careers"
										className="underline hover:no-underline hover:text-white"
									>
										Careers
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="underline hover:no-underline hover:text-white"
									>
										Blog
									</Link>
								</li>
								<li>
									<Link
										href="/faq"
										className="underline hover:no-underline hover:text-white"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/creative"
										className="underline hover:no-underline hover:text-white"
									>
										Creative
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div>
						<h3 className="font-bold mb-4 text-white uppercase">Links</h3>
						<ul className="space-y-2 mb-6 text-gray-300">
							<li>
								<Link
									href="/about"
									className="underline hover:no-underline hover:text-white"
								>
									About us
								</Link>
							</li>
							<li>
								<Link
									href="/vision"
									className="underline hover:no-underline hover:text-white"
								>
									Services
								</Link>
							</li>
							<li>
								<Link
									href="/vision"
									className="underline hover:no-underline hover:text-white"
								>
									News
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="underline hover:no-underline hover:text-white"
								>
									Contact us
								</Link>
							</li>
						</ul>

						<ul className="flex space-x-4">
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">Instagram</span>
									<FaInstagram />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">Twitter</span>
									<FaTwitter />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">Facebook</span>
									<FaFacebookF />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">LinkedIn</span>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">Pinterest</span>
									<FaPinterest />
								</a>
							</li>
							<li className="bg-gray-300 p-2 rounded-lg text-gray-600  hover:bg-[#FC6B00] hover:text-white">
								<a href="#">
									<span className="sr-only">Dribbble</span>
									<FaDribbble />
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="py-20 text-center">
					<p className="text-gray-300 text-base font-light">
						Copyright &copy;{new Date().getFullYear()}. All Rights Reserved.
					</p>
				</div>
			</div>
			<div class="h-[100px]"></div>
		</footer>
	);
};

export default Footer;
