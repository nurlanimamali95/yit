import React from "react";
import Image from "next/image";

export default function About() {
	return (
		<section className="mx-[3rem] md:mx-[5rem] my-[3rem] md:my-[15rem]">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
				<div className="flex flex-col justify-between h-full">
					<h2 className="text-3xl sm:text-2xl font-semibold text-gray-900 text-center my-[2rem] lg:mb-0">
						Why theatre?
					</h2>
					<div className="w-full overflow-hidden rounded-lg">
						<Image
							src="/about2.jpg"
							alt="Little Girl"
							width={500}
							height={500}
							className="w-full h-[37.5rem] object-contain object-center"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-[4rem] h-full">
					<div className="w-full overflow-hidden rounded-lg mb-[3rem]">
						<Image
							src="/about1.jpg"
							alt="Little boy"
							width={500}
							height={400}
							className="w-full h-[450px] object-contain object-top"
						/>
					</div>
					<p className="text-lg leading-relaxed text-justify">
						Theater cultivates <strong>empathy</strong> and understanding, it
						exposes children to diverse perspectives and experiences.
						Participating in theatre helps children build{" "}
						<strong>confidence</strong> and <strong>self-esteem</strong>.
						Performing on stage and receiving positive feedback from an audience
						boosts their self-belief and encourages them to take on new
						challenges! Theatre offers a <strong>safe space</strong> for
						children to explore their talents, conquer stage fright, develop
						public speaking skills, and much more...
					</p>
				</div>
			</div>
		</section>
	);
}
