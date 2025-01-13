import Image from "next/image";

export default function Info() {
	return (
		<section className="mx-[3rem] md:mx-[5rem] my-[3rem] md:my-[15rem]">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<div className="flex flex-col gap-[4rem]">
					<h2 className="text-3xl text-center font-bold mb-6 md:mb-10">
						About me.
					</h2>
					<p className="text-lg leading-relaxed text-justify">
						Hello! My name is Ilaya Faiq. I am a theater director, specializing
						in teaching drama and organizing school events, exhibitions, and
						field trips in International schools in Latvia, Azerbaijan, Sweden,
						and Georgia. It all started back in 1997 when I moved from the cozy
						magical Riga, the capital of Latvia to the city of the future, the
						city of flame and winds, Baku, Azerbaijan. Initially, there was just
						one group of children, but within three months, it grew to four
						groups, each with over 25 students. As a result, I became the art
						director of the dance theater “Young Stars.” In 2003, I applied for
						a drama teacher position at Baku- Oxford School ( Cambridge
						curriculum) and worked there until 2018, along with my theatre
						projects with international schools in Azerbaijan and Georgia. In
						2016, I launched Youth Inclusive Theatre ( English Children
						Theatre), where neurotypical children got to learn to support and
						communicate with children with special needs, whereas the latter (
						children with ADD, ADHD, OCD, selective mutism, mild autism spectrum
						disorder, Asperger&apos;s Syndrome, mild dyslexia, and social
						phobia) learn to work with patience, communication, and learn to
						overcome fears through love for drama and acting. Acting is not only
						about theatre, it’s about improving such important skills as
						communication, collaboration, team building, critical thinking, and
						leadership.
					</p>
				</div>

				<div className="w-full overflow-hidden rounded-lg">
					<Image
						src="/profile1.jpg"
						alt="profile"
						width={500}
						height={600}
						className="w-full h-[700px] object-contain rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
}
