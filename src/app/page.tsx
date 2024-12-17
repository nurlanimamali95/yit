import About from "@/components/about";
import HeroCarousel from "@/components/hero";
import Navbar from "@/components/navbar";
import Info from "@/components/info";
import TailoredProjects from "@/components/tailoredprojects";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<main>
			<Navbar />
			<HeroCarousel />
			<About />
			<Info />
			<TailoredProjects />
			<Footer />
		</main>
	);
}
