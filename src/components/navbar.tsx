"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/logo";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname(); // Get the current route

	// Close the menu whenever the pathname changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Define the navigation links
	const navLinks = [
		{ name: "2025 Projects", href: "/2025projects" },
		{ name: "Theatre Plays", href: "/plays" },
		{ name: "English Through Drama", href: "/etd" },
		{ name: "GCC", href: "/gcc" },
		{ name: "Feedback", href: "/feedback" },
		{ name: "Donate", href: "/donate", isButton: true },
	];

	return (
		<nav
			className="bg-primary flex justify-between items-center w-full px-6 py-4 fixed top-0 left-0 z-50 shadow-md"
			role="navigation"
			aria-label="Main Navigation"
		>
			<Logo />

			<button
				className="md:hidden text-white focus:outline-none"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				<svg
					className="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{isOpen ? (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					) : (
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					)}
				</svg>
			</button>

			<ul
				className={clsx(
					"absolute md:relative top-[50px] md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent text-center md:text-left transition-all duration-300 font-medium",
					isOpen ? "block" : "hidden",
					"md:flex md:flex-row md:items-center gap-6"
				)}
			>
				{navLinks.map((link) => (
					<li key={link.href} className="text-dark">
						<Link
							href={link.href}
							className={clsx(
								"block py-2 md:py-1 px-4 rounded-md",
								pathname === link.href && "bg-white text-dark ",
								!link.isButton &&
									"lg:hover:bg-gray-500 text-dark lg:hover:text-white ",
								link.isButton &&
									"lg:bg-secondary rounded-md lg:hover:text-white lg:hover:bg-gray-500"
							)}
						>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
