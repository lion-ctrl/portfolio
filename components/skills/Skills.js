import React, { useState } from "react";

const Skills = () => {
	const [skills] = useState([
		{
			name: "HTML5",
			description:
				"Create a structure in an easy-to-read and scalar way, tag nesting, correct implementation to improve SEO, create custom attributes, block tags, inline, inline-block, lists, tables.",
            img: '/img/html.png'
		},
        {
			name: "JavaScript",
			description:
				"Knowledge in the management of the DOM, Consult RESTApis, perform different types of events, design and use pleasant interfaces for users, work with different browser APIs such as: localStorage, IndexedDB, Fetch. Include third-party libraries such as axios. Work with Modules and execute different design patterns.",
            img: '/img/javascript.png'
		},
        {
			name: "CSS",
			description:
				"Implement scalable styles with the BEM methodology, work with images, animations, implementation of CSSFlexbox and CSSGrid, create custom grids, manipulate the elements of the DOM, use pseudoclasses, alignments, responsive web designs, implement positions for the different layers.",
            img: '/img/css.png'
		},
        {
			name: "PHP",
			description:
				"Create MVC applications, SQL database connections, create RESTApi's, encrypt passwords, create scalable applications, form validation, implement SPA with AJAX. protect files.",
            img: '/img/php.png'
		},
        {
			name: "GIT",
			description:
				"Create Branches, joins, tags, stash, overshoot, conflict resolution, clone repositories, pull, push, pull request, move in time, manage Issues, Milestones, add collaborators.",
            img: '/img/git.png'
		},
        {
			name: "ReactJS",
			description:
				"Work with multiple components, update states, conditional load of components, perform queries to different RESTApi, implement custom Hooks, validations, use UseContext and useReducer for handling global states, implement Redux for handling global State, apply css styles with styled components, implement NextJs for SSR.",
            img: '/img/react.png'
		},
        {
			name: "SASS",
			description:
				"Modularize css styles, create variables, use mixins for greater reuse of code, conditionals, implement code according to each component that contains the application.",
            img: '/img/sass.png'
		},
        {
			name: "NodeJS",
			description:
				"Create complex applications from Scratch using the MVC design pattern, make connections to different types of database, SQL: such as PostgreSQL, MySQL implemented the Orm Eloquent. Non-SQL: MongoDB implemented the Mongoose ORM, implement third-party libraries via NPM, implementation of Middlewares, use different template engines such as: EJS, Pug, Handlebars, create RESApi's to consume them with ReactJS, authentication with JWT.",
            img: '/img/nodejs.png'
		},
        {
			name: "Webpack",
			description:
				"Create optimized Bundles, transpiling the code with Babel. configure modularized Javascript code and styles so that applications are scalable over time.",
            img: '/img/webpack.png'
		},
	]);
	return (
		<section className="skills section">
			<h2 className="heading white">My Skills</h2>
			<div className="container grid three-col">
                {skills.map((skill,index) => (
                    <div className="skill" key={index}>
                        <div className="skill__img">
                            <img src={skill.img} alt={skill.name} />
                        </div>
                        <h3>{skill.name}</h3>
                        <p>
                            {skill.description}
                        </p>
                    </div>
                ))}
			</div>
		</section>
	);
};

export default Skills;
