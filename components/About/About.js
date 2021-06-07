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
						Busco crecer dentro de la industria de la tecnología aportando mi
						conocimiento y creatividad para poder crear tecnología que cambie el
						mundo de una manera u otra. Mis habilidades blandas y de
						comunicación son bastante buenas, lo cual es bastante importante no
						solo en el lugar de trabajo, sino en todo momento.{" "}
					</p>
					<br />
					<p>
						Soy autodidacta, proactivo y una defensor de que la mejor
						manera de trabajar es trabajar de manera eficiente, no trabajar
						duro. Mis fundamentos en computación y arquitectura de software son
						bastante sólidos y amplios.
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
