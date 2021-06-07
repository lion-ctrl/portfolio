import React, { useState } from "react";

const Projects = () => {
	const [projects] = useState([
		{
			img: "/img/projects/uptask.png",
			title: "UpTasks",
			description:
				"A small personal task manager, to have all the activities organized according to your project, where they can be marked as completed or not, delete them or delete the project if desired. This is done with NodeJS (Express), Pug template manager and MySQL database.",
			technologies: [
				"/img/express.png",
				"/img/nodejs.png",
				"/img/mysql.png",
				"/img/pug.png",
			],
			links: [{ title: "Code", link: "#" }],
		},
		{
			img: "/img/projects/devjobs.png",
			title: "Devjobs",
			description:
				"Jobs Platform for developers, it is made with NodeJS (Express), Handlebars template manager and MongoDB database.",
			technologies: [
				"/img/express.png",
				"/img/nodejs.png",
				"/img/mongo.png",
				"/img/hbs.png",
			],
			links: [
				{ title: "Demo", link: "https://node-devjobs.herokuapp.com/" },
				{ title: "Code", link: "#" },
			],
		},
        {
			img: "/img/projects/meeti.png",
			title: "Meeti",
			description:
				"Clone of the Meetup application, with almost all its functionality, is made with NodeJS (Express), the EJS template manager and the database in PostgreSQL, also implementing LeafletJS to display maps.",
			technologies: [
				"/img/express.png",
				"/img/nodejs.png",
				"/img/postgre.png",
				"/img/ejs.png",
			],
			links: [
				{ title: "Code", link: "#" },
			],
		},
	]);
	return (
		<section className="projects section" id="projects">
			<h2 className="heading">Projects</h2>
			<div className="container grid three-col">
				{projects.map((project, index) => {
					return (
						<div className="project" key={index}>
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
											className="btn success"
											key={index}
										>
											{link.title}
										</a>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
