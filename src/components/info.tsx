import Image from "next/image";

export default function Info() {
	return (
		<section className="mx-[3rem] md:mx-[5rem] my-[3rem] md:my-[15rem]">
			<div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
				<div className="flex flex-col gap-[4rem]">
					<h2 className="text-3xl font-bold mb-6 md:mb-10">About me.</h2>
					<p className="text-lg leading-relaxed text-gray-700">
						I am a theater director, specializing in teaching drama and
						organizing school events, exhibitions, and field trips in
						International schools in Latvia, Azerbaijan, Sweden, and Georgia.
						Apart from teaching drama at schools, in 2016, I launched Youth
						Inclusive Theatre, where neurotypical children learn to support and
						communicate with children with special needs, whereas the latter
						(children with ADD, ADHD, OCD, selective mutism, mild autism
						spectrum disorder, Asperger&apos;s Syndrome, mild dyslexia, and
						social phobia) learn to work with patience, communication, and learn
						to overcome fears through love for drama and acting. Acting is not
						only about theater, it’s about improving such important skills as
						communication, collaboration, team building, critical thinking, and
						leadership.
					</p>
				</div>

				<div className="w-full overflow-hidden rounded-lg">
					<Image
						src="/profile.jpg"
						alt="profile"
						width={500}
						height={600}
						className="w-full h-[550px] object-cover rounded-lg"
					/>
				</div>
			</div>
		</section>
	);
}
