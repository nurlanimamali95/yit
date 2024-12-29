"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export default function HeroCarousel() {
	const responsive = {
		desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
		tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
		mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
	};

	return (
		<section className="relative w-full h-screen flex items-center justify-center">
			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={5000}
				showDots={true}
				arrows={true}
				className="w-full"
			>
				<div className="relative w-full h-screen overflow-hidden">
					<Image
						src="/slide1-1.jpg"
						alt="Slide 1"
						layout="fill"
						objectFit="cover"
						priority
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-10">
						<div className="max-w-3xl text-center">
							<h1 className="text-3xl md:text-5xl font-bold mb-2">
								Learn English Through Drama
							</h1>
							<p className="text-lg md:text-xl font-medium mt-5">
								<span className="px-2 py-1 bg-black text-white rounded-lg">
									<span className="text-blue-400 font-semibold">Explore</span>,{" "}
									<span className="text-green-400 font-semibold">Create</span>,{" "}
									<span className="text-yellow-400 font-semibold">
										Communicate!
									</span>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className="relative w-full h-screen overflow-hidden">
					<Image
						src="/slide2-1.jpg"
						alt="Slide 2"
						layout="fill"
						objectFit="cover"
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-6">
						<div className="max-w-3xl text-center">
							<h1 className="text-3xl md:text-5xl font-bold mb-2">
								Unlock Creativity
							</h1>
							<p className="text-lg md:text-xl font-medium mt-5">
								<span className="px-2 py-1 bg-black text-white rounded-lg">
									<span className="text-pink-400 font-semibold">Empower</span>,{" "}
									<span className="text-purple-400 font-semibold">Express</span>
									,{" "}
									<span className="text-teal-400 font-semibold">Innovate!</span>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div className="relative w-full h-screen overflow-hidden">
					<Image
						src="/slide3-1.jpg"
						alt="Slide 3"
						layout="fill"
						objectFit="cover"
					/>
					<div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white px-6">
						<div className="max-w-3xl text-center">
							<h1 className="text-3xl md:text-5xl font-bold mb-2">
								Join Us Today
							</h1>
							<p className="text-lg md:text-xl font-medium mt-5">
								<span className="px-2 py-1 bg-black text-white rounded-lg">
									<span className="text-orange-400 font-semibold">Inspire</span>
									, <span className="text-red-400 font-semibold">Nurture</span>,{" "}
									<span className="text-indigo-400 font-semibold">Thrive!</span>
								</span>
							</p>
						</div>
					</div>
				</div>
			</Carousel>
		</section>
	);
}
