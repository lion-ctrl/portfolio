import React from "react";
import Project from "./Project";

import {projects} from "../../data/data"

const Projects = () => {

	return (
		<section className="projects section" id="projects">
			<h2 className="heading">Proyectos</h2>
			<div className="container grid three-col">
				{projects.map((project, index) => {
					return (
						<Project key={index} project={project} />
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
