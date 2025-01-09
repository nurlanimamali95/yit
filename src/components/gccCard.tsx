"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GccCardProps {
	image: string;
	name?: string;
	location?: string | undefined;
	description: string;
	details: string | React.JSX.Element;
}

export default function GccCard({
	image,
	name,
	location,
	description,
	details,
}: GccCardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const modalVariants = {
		hidden: { opacity: 0, y: "-50%", scale: 0.8 },
		visible: { opacity: 1, y: "0", scale: 1 },
		exit: { opacity: 0, y: "50%", scale: 0.8 },
	};

	return (
		<div className="max-w-md bg-white bg-opacity-40 rounded-lg shadow-md p-6 relative flex flex-col">
			<div className="relative">
				<div className="relative">
					<Image
						src={image}
						alt={name || "Image"}
						className="w-full h-96 object-contain rounded-lg"
						width={500}
						height={400}
					/>
				</div>
				{name && (
					<span className="absolute top-0 bg-gray-200 px-3 py-1 text-lg w-full text-center shadow-sm">
						{name}
					</span>
				)}
				{location && (
					<span className="absolute bottom-10 left-0 bg-primary px-2 py-1 text-sm shadow-sm">
						{location}
					</span>
				)}
			</div>
			<div className="mt-6 flex-grow">
				<p className="text-dark font-medium text-base">{description}</p>
			</div>
			<div className="mt-6">
				<button
					onClick={() => setIsModalOpen(true)}
					className={`px-6 py-3 rounded bg-primary hover:opacity-90`}
				>
					See More
				</button>
			</div>

			<AnimatePresence>
				{isModalOpen && (
					<motion.div
						className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1 },
							exit: { opacity: 0 },
						}}
					>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md"
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={modalVariants}
							transition={{ duration: 0.3 }}
						>
							<h2 className="text-lg font-bold mb-4">More Details</h2>
							<p className="text-dark mb-4">{details}</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="mt-4 px-4 py-2 bg-orange-400 text-white rounded hover:opacity-90"
							>
								Close
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
