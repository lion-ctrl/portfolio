import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Works from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Works />
			<Contact />
		</>
	);
}
