import React from "react";

const About = () => {
	return (
		<section className="about section container" id="about">
			<h2 className="heading">Sobre Mí</h2>
			<div className="grid two-col">
				<div className="about__text">
					<p>
						Soy Ingeniero de software junior que usa tecnologías como
						Typescript, Tailwind CSS, React Hooks, GraphQL, Nodejs, PHP, CSS,
						HTML, etc.
					</p>
					<br />
					<p>
						Busco crecer dentro de la industria de la tecnología aportando mis
						conocimientos y creatividad. Mis habilidades blandas y comunicación
						son muy buenas, lo cual es importante no solo en el lugar de
						trabajo, sino en todo momento.{" "}
					</p>
					<br />
					<p>
						Soy autodidacta, proactivo y defensor de que la mejor manera de
						trabajar es de manera eficiente, no trabajar duro. Mis fundamentos
						en informática y arquitectura de software son sólidos y amplios.
					</p>
				</div>
				<div className="about__img">
					<img src="/img/about.jpg" alt="about" />
				</div>
			</div>
		</section>
	);
};

export default About;