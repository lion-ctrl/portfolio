import React from "react";
import { skills } from "../../data/data";

const Skills = () => {
	return (
		<section className="skills section" id="skills">
			<h2 className="heading white">My Skills</h2>
			<div className="container grid three-col">
				{skills.map((skill, index) => (
					<div className="skill" key={index}>
						<div className="skill__img">
							<img src={skill.img} alt={skill.name} />
						</div>
						<h3>{skill.name}</h3>
						<p>{skill.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
