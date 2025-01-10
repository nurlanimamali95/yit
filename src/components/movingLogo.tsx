"use client";

import Card from "@/components/logoCard";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export default function Logo() {
	const images = [
		"/logos/logo1.png",
		"/logos/logo2.png",
		"/logos/logo3.png",
		"/logos/logo4.png",
		"/logos/logo5.png",
		"/logos/logo6.webp",
		"/logos/logo7.jpg",
		"/logos/logo8.jpg",
		"/logos/logo10.png",
		"/logos/logo11.png",
		"/logos/logo12.png",
	];

	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	useEffect(() => {
		if (width === 0) return;

		const totalWidth = width;
		const finalPosition = -totalWidth;

		animate(xTranslation, [0, finalPosition], {
			ease: "linear",
			duration: 25,
			repeat: Infinity,
			repeatType: "loop",
		});
	}, [xTranslation, width]);

	return (
		<main className="py-8 my-28 overflow-hidden">
			<div ref={ref} className="flex w-full">
				<motion.div className="flex gap-10" style={{ x: xTranslation }}>
					{[...images, ...images, ...images].map((item, idx) => (
						<Card image={item} key={idx} />
					))}
				</motion.div>
			</div>
		</main>
	);
}
