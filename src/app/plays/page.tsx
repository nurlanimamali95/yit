"use client";

import { useState } from "react";
import { playsCard } from "@/app/plays/playsCardData";
import Card from "@/components/card";

export default function Projects() {
	const [showAll, setShowAll] = useState(false);

	const visibleCards = showAll ? playsCard : playsCard.slice(0, 6);

	return (
		<div className="flex flex-col items-center">
			<h2 className="mt-[8rem] text-3xl sm:text-2xl font-semibold">
				Theatre Plays
			</h2>
			<p className="my-16 text-lg  max-w-[70%] text-justify">
				Together with a professional team of choreographers, musicians, and
				stage managers, we staged over 100 plays, from ten-minute chamber
				performances to over 120-minute classical plays for 300+ audiences.
				Sustainability, the anti-bullying movement, and “sharing is caring” are
				among vital topics through plays and classes. The list of plays is
				endless! The most memorable ones are listed below!!! We follow the
				inclusion, where neurotypical children learn to support children with
				special needs ( ADD, ADHD, OCD, HSP, mild autistic spectrum, selective
				mutism, children with social phobia or learning difficulties).
			</p>

			<div className="">
				<div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{visibleCards.map((card) => (
						<Card
							key={card.id}
							images={card.images}
							name={card.name}
							description={card.description}
							buttonColor={card.buttonColor}
							details={card.details}
						/>
					))}
				</div>

				{!showAll && playsCard.length > 6 && (
					<div className="flex justify-center my-8">
						<button
							onClick={() => setShowAll(true)}
							className="bg-primary text-dark rounded-full p-3 hover:bg-opacity-90 transition"
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
