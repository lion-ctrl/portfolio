import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/skills/Skills";
import Works from "../components/Projects/Projects";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Works />
		</>
	);
}
