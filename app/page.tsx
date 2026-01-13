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
				{/* 1. HOOK - Grab attention with pain point */}
				<Hero />
				{/* 2. AUTHORITY - Immediate credibility boost */}
				<Stats />
				{/* 3. SOLUTION - What we offer */}
				<Services />
				{/* 4. SOCIAL PROOF - Others trust us */}
				<Testimonials />
				{/* 5. PROOF OF WORK - Real results */}
				<Projects />
				{/* 6. DEPTH - Who we are & capabilities */}
				<About />
				<Skills />
				{/* 7. INVESTMENT - Transparent pricing */}
				<Pricing />
				{/* 8. URGENCY - Final push with scarcity */}
				<CTA />
				{/* 9. ACTION - Convert the lead */}
				<Contact />
			</div>
		</main>
	);
}  