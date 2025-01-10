"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TailoredProjects() {
	const [hoveredCard, setHoveredCard] = useState<"first" | "second" | null>(
		null
	);

	const gradients = {
		first: "linear-gradient(to right, #FFCA5F 0%, #B5E2FF 49%)",
		second: "linear-gradient(to right, #B5E2FF 32%, #FFCA5F 100%)",
	};

	return (
		<section className="mx-[3rem] md:mx-[5rem] my-[3rem] md:my-[10rem]">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch">
				<motion.div
					onHoverStart={() => setHoveredCard("first")}
					onHoverEnd={() => setHoveredCard(null)}
					animate={{
						background:
							hoveredCard === "second" ? gradients.second : gradients.first,
					}}
					transition={{
						background: { duration: 0.7, ease: "easeInOut" },
					}}
					className="p-6 md:p-8 rounded-xl shadow-lg h-fit md:h-[350px] lg:h-[400px] flex flex-col justify-between"
				>
					<h3 className="text-xl font-bold mb-4">For schools:</h3>
					<p className="leading-relaxed md:text-xl lg:text-2xl text-justify">
						All children can have individual needs and experiences, requiring a
						special approach to the learning process, which I always take into
						account. All of my theater projects can be tailor-made to suit your
						requirements! I focus on every child’s interests and preferences to
						ensure that each child has an unforgettable performance art journey.
					</p>
				</motion.div>

				<motion.div
					onHoverStart={() => setHoveredCard("second")}
					onHoverEnd={() => setHoveredCard(null)}
					animate={{
						background:
							hoveredCard === "first" ? gradients.first : gradients.second,
					}}
					transition={{
						background: { duration: 0.7, ease: "easeInOut" },
					}}
					className="p-6 md:p-8 rounded-xl shadow-lg h-fit md:h-[350px] lg:h-[400px] flex flex-col justify-between"
				>
					<h3 className="text-xl font-bold mb-4">
						For individuals and families:
					</h3>
					<p className="md:text-xl lg:text-2xl leading-relaxed text-justify">
						If you are 6 to 16 years old, welcome to my theatre world where art,
						drama, culture, technology, and nature converge to create
						performances and inspire wonder, where the English language is
						taught through body and exploration, where theatre is explored
						through experience and communication.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
