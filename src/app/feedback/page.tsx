"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import feedbackData from "@/app/feedback/feedbackData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Feedback() {
	const [chunkSize, setChunkSize] = useState(6);
	const [hideArrows, setHideArrows] = useState(false);
	const [showDots, setShowDots] = useState(false);

	useEffect(() => {
		const updateResponsiveSettings = () => {
			const width = window.innerWidth;

			if (width < 768) {
				setChunkSize(3);
				setHideArrows(true);
				setShowDots(true);
			} else if (width < 1024) {
				setChunkSize(3);
				setHideArrows(true);
				setShowDots(true);
			} else {
				setChunkSize(6);
				setHideArrows(false);
				setShowDots(false);
			}
		};

		updateResponsiveSettings();

		window.addEventListener("resize", updateResponsiveSettings);

		return () => {
			window.removeEventListener("resize", updateResponsiveSettings);
		};
	}, []);

	const feedbackChunks = useMemo(() => {
		const chunks = [];
		for (let i = 0; i < feedbackData.length; i += chunkSize) {
			chunks.push(feedbackData.slice(i, i + chunkSize));
		}
		return chunks;
	}, [chunkSize]);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 1024 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 1024, min: 768 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 768, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="flex flex-col items-center px-8 mb-20">
			<h2 className="mt-[6rem] text-3xl sm:text-2xl font-semibold">Feedback</h2>
			<p className="my-16 text-lg leading-relaxed max-w-[70%] text-center">
				See what other people have to say.
			</p>

			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={3000}
				arrows={!hideArrows}
				showDots={showDots}
				containerClass="carousel-container max-w-[1200px] mx-auto  pb-10"
				dotListClass="custom-dot-list "
			>
				{feedbackChunks.map((chunk, index) => (
					<div
						key={index}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-5 justify-items-center p-2 sm:p-4 w-fit mx-auto"
					>
						{chunk.map((feedback) => (
							<div
								key={feedback.id}
								className={`w-full sm:w-[300px] md:w-[320px] h-auto p-4 rounded-lg shadow-lg ${feedback.bgColor}`}
							>
								<p className="text-sm sm:text-base font-medium mb-4">
									{feedback.text}
								</p>
								<div className="flex items-center">
									<div className="relative w-10 h-10 rounded-full overflow-hidden mr-4">
										<Image
											src={feedback.photo}
											alt={`${feedback.name}'s photo`}
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<span className="text-sm font-semibold">{feedback.name}</span>
								</div>
							</div>
						))}
					</div>
				))}
			</Carousel>
		</div>
	);
}
