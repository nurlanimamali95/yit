import About from "@/components/about";
import HeroCarousel from "@/components/hero";
import Navbar from "@/components/navbar";
import Info from "@/components/info";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroCarousel />
			<About />
			<Info />
		</main>
	);
}
