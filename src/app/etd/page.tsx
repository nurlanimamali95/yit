"use client";

import { useState } from "react";
import { etdCard } from "@/app/etd/etdCardData";
import Card from "@/components/card";

export default function Etd() {
	const [showAll, setShowAll] = useState(false);

	const visibleCards = showAll ? etdCard : etdCard.slice(0, 6);

	return (
		<div className="flex flex-col items-center">
			<h2 className="mt-[6rem] text-3xl sm:text-2xl font-semibold">
				English Through Drama
			</h2>
			<p className="my-16 text-lg leading-relaxed max-w-[70%]">
				I staged over 60 plays, from ten minute performances to over 90 minutes
				of classical plays for 350+ audiences. Sustainability, anti-bullying
				movement, and “sharing is caring” are among vital topics through plays
				and classes.
			</p>

			<div>
				<div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{visibleCards.map((card) => (
						<Card
							key={card.id}
							images={card.images}
							description={card.description}
							buttonColor={card.buttonColor}
							details={card.details}
						/>
					))}
				</div>

				{!showAll && etdCard.length > 6 && (
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
