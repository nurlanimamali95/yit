"use client";

import { useState } from "react";
import { projectCard } from "@/app/2025projects/projectCardData";
import Card from "@/components/card";

export default function Projects() {
	const [showAll, setShowAll] = useState(false);

	const visibleCards = showAll ? projectCard : projectCard.slice(0, 6);

	return (
		<div className="flex flex-col items-center">
			<h2 className="mt-[6rem] text-3xl sm:text-2xl font-semibold">
				2025 Projects
			</h2>
			<p className="my-16 text-lg leading-relaxed max-w-[70%]">
				In 2025, we’re launching exciting theater projects that unite children
				from different cultures to explore creativity, build life skills, and
				embrace global citizenship. Through immersive performances, workshops,
				and tours, we’ll inspire young minds to express themselves, collaborate,
				and connect with others worldwide.
			</p>

			<div className="">
				<div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{visibleCards.map((card) => (
						<Card
							key={card.id}
							images={card.images}
							location={card.location}
							description={card.description}
							buttonColor={card.buttonColor}
							details={card.details}
						/>
					))}
				</div>
				<p className="my-10 text-sm">
					*Open to any proposals for 2-4 month theater projects for 2026.
					Honorarium is negotiable.
				</p>
				{!showAll && projectCard.length > 6 && (
					<div className="flex justify-center my-8">
						<button
							onClick={() => setShowAll(true)}
							className="bg-primary text-white rounded-full p-3 hover:bg-opacity-90 transition"
							aria-label="Show More"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
