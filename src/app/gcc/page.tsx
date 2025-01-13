"use client";

import { gccData } from "@/app/gcc/gccCardData";
import GccCard from "@/components/gccCard";
import Image from "next/image";

export default function Projects() {
	return (
		<div className="flex flex-col items-center">
			<h2 className="mt-[8rem] text-center text-3xl sm:text-2xl font-semibold">
				Global Citizenship Children
			</h2>

			<div className="flex flex-col gap-5 my-16 text-lg  max-w-[70%] text-justify">
				<p className="text-center font-semibold">What is GCC?</p>
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
					Each module includes six offline lessons or webinars, each lasting 90
					minutes, with four of them focusing on the cultural heritage of four
					different countries.
				</p>
				<p>
					Education and Ecology also belong to the list of main topics of the
					project. The webinar N5 embodies a rehearsal, where a student ( or
					group of students, if they wish to work in a team) presents a
					&quot;defense&quot; of a chosen country to the mentor and other
					participants. The presentation covers topics of cultural heritage,
					education, and ecology of the selected country. It usually lasts for
					4-5 minutes, including visual content, and a short video ( up to 1
					minute). Lesson 5 is launched to develop the critical thinking of
					participants by commenting, criticizing, and praising each
					other&apos;s presentations. Lesson 5 aims to help students identify
					the areas they need to work on. Together, we work on the informational
					part of the presentation, visual content, and performance to prepare
					each other for the final speech.
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
				<div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-5">
					<div className="flex-1 flex justify-center items-center">
						<Image src={"/gcc/image7.png"} alt="gcc" width={500} height={500} />
					</div>
					<div className="flex-1">
						<h3 className="font-semibold text-center my-4">
							Why is this course special?
						</h3>
						<p>
							A guest speaker from each country joins our lessons/webinars to
							share the experience of living, studying, and working in the
							country of their residence. * We cover topics of sustainable
							development, ecology, and education. * We develop critical
							thinking and social responsibility in students by
							commenting/criticizing/ praising each other&apos;s work. * Every
							student does his research on the chosen country and thus develops
							a global perspective. Every GCC is a Module of six webinars, once
							a week, on Thursdays. We run seven online modules within the year,
							from September to June. Residents join us within a year to become
							a Global Citizen.
						</p>
					</div>
				</div>
				<div className="w-full mt-2">
					<ul>
						<li>2:45 to 4 pm CET - GCC Younger group (7-11 yo).</li>
						<li>4 pm to 5:30 CET - GCC Older group (12-16 yo)</li>
						<li>Discounts:</li>
						<p>
							20% for families with 3+ children, single-parent families, and
							children with special needs.
						</p>
						<p>30% for YIT Since1997.</p>
						<p>Join us within a year to become a Global Citizen</p>
					</ul>
				</div>
			</div>

			<div className="flex justify-center items-center flex-wrap gap-5 md:mx-[10rem] my-10">
				{gccData.map((card) => (
					<GccCard
						key={card.id}
						image={card.image}
						name={card.name}
						description={card.description}
					/>
				))}
			</div>
		</div>
	);
}
