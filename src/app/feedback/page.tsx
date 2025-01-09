"use client";

import Image from "next/image";
import feedbackData from "@/app/feedback/feedbackData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Feedback() {
	const responsive = {
		allDevices: {
			breakpoint: { max: 4000, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="flex flex-col items-center px-6 sm:px-12 mb-20">
			<h2 className="mt-[8rem]  text-3xl sm:text-2xl font-semibold text-center">
				Feedback
			</h2>
			<p className="my-8 text-lg leading-relaxed max-w-4xl text-justify">
				See what other people have to say.
			</p>

			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={5000}
				arrows={true}
				showDots={true}
				containerClass="carousel-container max-w-[1300px] mx-auto pb-10"
				itemClass="flex justify-center items-center"
				dotListClass="custom-dot-list"
				renderButtonGroupOutside={true}
			>
				{feedbackData.map((feedback) => (
					<div
						key={feedback.id}
						className={`p-6 sm:p-8 rounded-lg max-w-[800px] ${feedback.bgColor}`}
					>
						<p className="text-base sm:text-lg font-medium leading-relaxed mb-6">
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
							<span className="text-sm font-semibold">{feedback.name}</span>
							<div className="relative w-6 h-4 overflow-hidden mx-4">
								<Image
									src={feedback.country}
									alt={`${feedback.name}'s photo`}
									layout="fill"
									objectFit="contain"
								/>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
}
