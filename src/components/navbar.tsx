"use client";
import { useState } from "react";
import Logo from "@/components/logo";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

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
				className={`${
					isOpen ? "block" : "hidden"
				} md:flex md:flex-row md:items-center gap-6 absolute md:relative top-[50px] md:top-0 left-0 w-full md:w-auto bg-primary md:bg-transparent text-center md:text-left transition-all duration-300 font-medium`}
			>
				<li className="text-dark">
					<Link href="/" className="block py-2 md:py-0 hover:bg-green-400">
						2025 Projects
					</Link>
				</li>
				<li className="text-dark">
					<Link href="/" className="block py-2 md:py-0 hover:bg-green-400">
						Theatre Plays
					</Link>
				</li>
				<li className="text-dark">
					<Link href="/" className="block py-2 md:py-0 hover:bg-green-400">
						English Through Drama
					</Link>
				</li>
				<li className="text-dark">
					<Link href="/" className="block py-2 md:py-0 hover:bg-green-400">
						GCC
					</Link>
				</li>
				<li className="text-dark">
					<Link href="/" className="block py-2 md:py-0 hover:bg-green-400">
						Feedback
					</Link>
				</li>
				<li>
					<Link
						href="/"
						className="block lg:bg-green-300 hover:bg-green-400 px-4 py-2 rounded-md text-dark md:inline-block"
					>
						Donate
					</Link>
				</li>
			</ul>
		</nav>
	);
}
