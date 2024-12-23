"use client";

import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CustomLeftArrow, CustomRightArrow } from "@/components/arrowButtons";

interface CardProps {
	images: string[];
	location: string;
	description: string;
	buttonColor: string;
	details: string;
}

export default function Card({
	images,
	location,
	description,
	buttonColor,
	details,
}: CardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const modalVariants = {
		hidden: { opacity: 0, y: "-50%", scale: 0.8 },
		visible: { opacity: 1, y: "0", scale: 1 },
		exit: { opacity: 0, y: "50%", scale: 0.8 },
	};

	return (
		<div className="max-w-sm bg-white bg-opacity-40 rounded-lg shadow-md p-4 relative">
			<div className="relative">
				<Carousel
					responsive={responsive}
					infinite={true}
					autoPlay={true}
					autoPlaySpeed={3000}
					showDots={false}
					arrows={true}
					customLeftArrow={<CustomLeftArrow />}
					customRightArrow={<CustomRightArrow />}
				>
					{images.map((image, index) => (
						<div key={index} className="relative">
							<Image
								src={image}
								alt={`Slide ${index}`}
								className="w-full h-80 object-cover"
								width={300}
								height={500}
							/>
						</div>
					))}
				</Carousel>
				<span className="absolute bottom-10 left-0 bg-primary px-1 py-1 text-sm shadow-sm">
					{location}
				</span>
			</div>

			<div className="mt-4">
				<p className="text-gray-700 text-sm">{description}</p>
			</div>

			<button
				onClick={() => setIsModalOpen(true)}
				className={`mt-4 px-4 py-2 rounded ${buttonColor} hover:opacity-90`}
			>
				See More
			</button>

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
							<p className="text-gray-700 mb-4">{details}</p>
							<button
								onClick={() => setIsModalOpen(false)}
								className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:opacity-90"
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
