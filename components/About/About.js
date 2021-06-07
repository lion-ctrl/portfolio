import React from "react";

const About = () => {
	return (
		<section className="about section container" id="about">
			<h2 className="heading">About Me</h2>
			<div className="grid two-col">
				<div className="about__text">
					<p>
                        I'm a Junior Software Engineer using technologies like Typescript,
						Tailwind CSS, React Hooks, GraphQL, Nodejs, PHP, CSS, HTML, etc.
					</p>
					<br />
					<p>
						I seek to grow within the technology industry by contributing my
						knowledge and creativity to be able to create technology that
						changes the world in one way or another. My soft skills and
						communication skills are pretty good, which is pretty important not
						only in the workplace, but at all times.{" "}
					</p>
					<br />
					<p>
						I am self-taught, proactive and a loyal advocate that the best way
						to work is to work efficiently, not work hard. My fundamentals in
						computing and software architecture are pretty solid and broad.
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
