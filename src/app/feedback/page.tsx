"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import feedbackData from "@/app/feedback/feedbackData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Feedback() {
	const [chunkSize, setChunkSize] = useState(4);
	const [hideArrows, setHideArrows] = useState(false);
	const [showDots, setShowDots] = useState(false);

	useEffect(() => {
		const updateResponsiveSettings = () => {
			const width = window.innerWidth;

			if (width < 768) {
				setChunkSize(2);
				setHideArrows(true);
				setShowDots(true);
			} else if (width < 1024) {
				setChunkSize(4);
				setHideArrows(true);
				setShowDots(true);
			} else {
				setChunkSize(4);
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
			<h2 className="my-[6rem] text-3xl sm:text-2xl font-semibold">Feedback</h2>

			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={3000}
				arrows={!hideArrows}
				showDots={showDots}
				containerClass="carousel-container max-w-screen mx-auto pb-10"
				dotListClass="custom-dot-list"
			>
				{feedbackChunks.map((chunk, index) => (
					<div
						key={index}
						className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-x-[1rem] gap-y-[4rem] justify-items-center p-4 w-fit mx-auto"
					>
						{chunk.map((feedback) => (
							<div
								key={feedback.id}
								className={`w-full sm:w-[450px] md:w-[40rem] h-[330px] p-6 rounded-lg shadow-lg ${feedback.bgColor} flex flex-col justify-between`}
							>
								<p className="text-base sm:text-lg font-medium leading-relaxed line-clamp-5 sm:line-clamp-none">
									{feedback.text}
								</p>

								<div className="flex items-center mt-4">
									<div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
										<Image
											src={feedback.photo}
											alt={`${feedback.name}'s photo`}
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<span className="text-sm sm:text-base font-semibold">
										{feedback.name}
									</span>
									<div className="relative w-6 h-4 overflow-hidden mx-4">
										<Image
											src={feedback.country}
											alt={`${feedback.name}'s flag`}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				))}
			</Carousel>
		</div>
	);
}
