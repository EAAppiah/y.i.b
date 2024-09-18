"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhoneVolume } from "react-icons/fa6";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path) => pathname === path;

	const navItems = ["Home", "About", "Services", "News", "Contact"];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled ? "bg-white shadow-md" : "bg-transparent"
			}`}
		>
			<div className="container mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link href="/" className="flex items-center">
						<Image
							src="/images/yib.png"
							alt="Youth in Business logo"
							width={120}
							height={100}
							className="mr-2"
						/>
					</Link>

					{/* Desktop Menu */}
					<ul className="hidden lg:flex space-x-6 text-sm">
						{navItems.map((item) => (
							<li key={item}>
								<Link
									href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
									className={`
                    ${
											isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
												? "font-semibold text-primary"
												: ""
										}
                    ${isScrolled ? "text-gray-800" : "text-white"}
                    hover:text-primary transition-colors duration-300 relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] 
                    after:bg-primary after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 
                    hover:after:scale-x-100 hover:after:origin-bottom-left
                  `}
								>
									{item}
								</Link>
							</li>
						))}
					</ul>

					<div className="hidden lg:flex items-center">
						<a href="tel:123-489-9381" className="flex items-center group">
							<span className="bg-secondary p-2 rounded-full mr-2 group-hover:opacity-70 transition-opacity duration-300">
								<FaPhoneVolume className="text-white" />
							</span>
							<span
								className={`${
									isScrolled ? "text-gray-800" : "text-white"
								} text-lg font-medium transition-colors duration-300`}
							>
								123-489-9381
							</span>
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="lg:hidden focus:outline-none"
						aria-label="Toggle menu"
					>
						<svg
							className={`h-6 w-6 fill-current transition-colors duration-300 ${
								isScrolled ? "text-primary" : "text-white"
							}`}
							viewBox="0 0 24 24"
						>
							{isOpen ? (
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
								/>
							) : (
								<path
									fillRule="evenodd"
									d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="lg:hidden mt-4 bg-white shadow-md rounded-lg overflow-hidden">
						<ul className="divide-y divide-gray-200">
							{navItems.map((item) => (
								<li key={item}>
									<Link
										href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
										className={`block py-3 px-4 ${
											isActive(item === "Home" ? "/" : `/${item.toLowerCase()}`)
												? "text-primary font-semibold bg-gray-50"
												: "text-gray-600"
										} hover:bg-gray-50 hover:text-primary transition-colors duration-300`}
										onClick={() => setIsOpen(false)}
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
						<a
							href="tel:123-489-9381"
							className="flex items-center justify-center py-3 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
						>
							<span className="bg-[#FC6B00] p-2 rounded-full opacity-70 mr-2">
								<FaPhoneVolume className="text-white" />
							</span>
							<span className="text-gray-800 text-lg font-medium">
								123-489-9381
							</span>
						</a>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
