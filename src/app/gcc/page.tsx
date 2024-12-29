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
				Global Citizenship Children
			</h2>

			<div className="flex flex-col gap-5 my-16 text-lg leading-relaxed max-w-[70%]">
				<p className="text-center">What is GCC?</p>

				<p>
					Global Citizenship Children consists of multiple, still separate
					modules. It is an online course comprising various modules, where we
					explore places of interest, cuisine, the world of theaters, museums,
					music, and poetry of the selected countries. I launched the project in
					July 2020 and it proved to be very successful among children from
					different countries ( Azerbaijan, Sweden, Latvia, Georgia, and
					Turkey).
				</p>
				<p>
					Each module includes six offline lessons or webinars, each lasting 120
					minutes (equivalent to two academic hours), with four of them focusing
					on the cultural heritage of four different countries.
				</p>
				<p>
					Education and Ecology also belong to the list of main topics of the
					project. The webinar N5 embodies a rehearsal, where a student ( or
					group of students, if they wish to work in a team) presents a
					&quot;defense&quot; of a chosen country to the mentor and other participants.
					The presentation covers topics of cultural heritage, education, and
					ecology of the selected country. It usually lasts for 4-5 minutes,
					including visual content, and a short video ( up to 1 minute). Lesson
					5 is launched to develop the critical thinking of participants by
					commenting, criticizing, and praising each other&apos;s presentations.
					Lesson 5 aims to help students identify the areas they need to work
					on. Together, we work on the informational part of the presentation,
					visual content, and performance to prepare each other for the final
					speech.
				</p>
				<p>
					The last 6th webinar is the DEFENSE DAY. Students are evaluated by
					three international judges and one GCC participant ( the winner of one
					of the modules) on the following criteria: information, creativity,
					and performance. Students may get 5 to 15 points on every criterion.
					Overall, 60 (sixty) points is the lowest score by all four judges, and
					180 (one hundred eighty points) is the highest score by all four
					judges, respectively. “Global Citizenship Children” is a community of
					talented and educated people: a consultant, a project coordinator,
					translators ( high school students from International schools), and
					guest speakers from all over the world.
				</p>
			</div>

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
