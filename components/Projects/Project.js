import React from "react";

const Project = ({project}) => {
	return (
		<div className="project">
			<div className="project-img">
				<img src={project.img} alt="" />
			</div>
			<div className="project-content">
				<h3>{project.title}</h3>
				<p>{project.description}</p>
				<div className="project-technologies">
					{project.technologies.map((tecno, index) => (
						<img src={tecno} key={index} />
					))}
				</div>
				<div className="project-links">
					{project.links.map((link, index) => (
						<a
							href={link.link}
							target="_blank"
							rel="noopener noreferrer"
							className="btn success radius"
							key={index}
						>
							{link.title}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Project;
