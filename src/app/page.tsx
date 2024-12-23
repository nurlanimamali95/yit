import About from "@/components/about";
import HeroCarousel from "@/components/hero";
import Info from "@/components/info";
import TailoredProjects from "@/components/tailoredprojects";
import MovingLogo from "@/components/movingLogo";

export default function Home() {
	return (
		<main>
			<HeroCarousel />
			<MovingLogo />
			<About />
			<Info />
			<TailoredProjects />
		</main>
	);
}
