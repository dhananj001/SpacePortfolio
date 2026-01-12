import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import Testimonials from "@/components/main/Testimonials";
import Stats from "@/components/main/Stats";
import Pricing from "@/components/main/Pricing";
import CTA from "@/components/main/CTA";
import Contact from "@/components/main/Contact";

export default function Home() {
	return (
		<main className="h-full w-full overflow-x-hidden">
			<div className="flex flex-col gap-20">
				<Hero />
				<Stats />
				<Services />
				<About />
				<Projects />
				<Testimonials />
				<Skills />
				<Pricing />
				<CTA />
				<Contact />
			</div>
		</main>
	);
}  