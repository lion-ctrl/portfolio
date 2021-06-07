export const skills = [
	{
		name: "HTML5",
		description:
			"Crear una estructura de forma fácil de leer y escalar, anidamiento de etiquetas, implementación correcta para mejorar el SEO, crear atributos personalizados, etiquetas block, inline, inline-block, listas, tablas.",
		img: "/img/html.png",
	},
	{
		name: "JavaScript",
		description:
			"Conocimientos en el manejo del DOM, Consultar RESTApis, realizar diferentes tipos de eventos, diseñar y emplementar interfaces agradables para los usuarios, trabajo con diferentes APIS del navegador como: localStorage, IndexedDB, Fetch. Incluir Librerias de terceros como axios. Trabajar con Modulos y ejecutar diferentes patrones de diseño.",
		img: "/img/javascript.png",
	},
	{
		name: "CSS",
		description:
			"Implementar estilos escalables con la metodología BEM, trabajar con imágenes, animaciones, implementación de CSSFlexbox y CSSGrid, crear grillas personalizadas, manipular los elementos del DOM, utilizar pseudoclases, alineamientos, responsive web designs, implementar positions para las diferentes capas.",
		img: "/img/css.png",
	},
	{
		name: "PHP",
		description:
			"Crear aplicaciones MVC, conexiones de bases de datos SQL, creación de RESTApi's, encriptación de contraseñas, crear aplicaciones escalables, validación de formularios, implementar SPA con AJAX. proteger archivos.",
		img: "/img/php.png",
	},
	{
		name: "GIT",
		description:
			"Crear Ramas, uniones, tags, stash, rebase, resolución de conflictos, clonar repositorios, hacer pull, push, pull request, moverse en el tiempo, manejo de Issues, Milestones, agregar colaboradores.",
		img: "/img/git.png",
	},
	{
		name: "ReactJS",
		description:
			"Trabajar con múltiples componentes, actualizar states, carga condicional de componentes, realizar consultas a diferentes RESTApi, implementar Hooks personalizados, validaciones, utilizar useContext y useReducer para manejo de states globales, implementar Redux para manejo de State globales, aplicar estilos css con styled components, implementar NextJs para SSR.",
		img: "/img/react.png",
	},
	{
		name: "SASS",
		description:
			"Modularizar los estilos css, crear variables, utilizar mixins para mayor reutilización del código, condicionales, implementar código según cada componente que contenga la aplicación",
		img: "/img/sass.png",
	},
	{
		name: "NodeJS",
		description:
			"Crear aplicaciones complejas desde Cero utilizando el patrón de diseño MVC, realizar conexiones a diferentes tipos de base de datos, SQL: como PostgreSQL, MySQL implementado el ORM Eloquent. No-SQL: MongoDB implementado el ORM Mongoose, implementar librerías de terceros vía NPM, implementación de Middlewares, utilizar diferentes template engines como: EJS, Pug, Handlebars, crear RESApi's para consumirlas con ReactJS, autenticación con JWT.",
		img: "/img/nodejs.png",
	},
	{
		name: "Webpack",
		description:
			"Crear Bundles optimizados, transpilando el código con Babel. configurar estilos y código Javascript modularizados para que las aplicaciones sean escalables con el tiempo.",
		img: "/img/webpack.png",
	},
];

export const projects = [
	{
		img: "/img/projects/uptask.png",
		title: "UpTasks",
		description:
			"Un pequeño gestor de tareas personal, para tener todas las actividades organizadas según su proyecto, donde se pueden marcar como completadas o no, eliminarlas o eliminar el proyecto si se desea. Esta hecho con NodeJS (Express), gestor de plantillas Pug y base de datos MySQL.",
		technologies: [
			"/img/express.png",
			"/img/nodejs.png",
			"/img/mysql.png",
			"/img/pug.png",
		],
		links: [{ title: "Codigo", link: "https://github.com/lion-ctrl/UpTasks" }],
	},
	{
		img: "/img/projects/devjobs.png",
		title: "Devjobs",
		description:
			"Plataforma de Empleos para desarrolladores, esta hecha con NodeJS (Express), gestor de plantillas Handlebars y base de datos MongoDB.",
		technologies: [
			"/img/express.png",
			"/img/nodejs.png",
			"/img/mongo.png",
			"/img/hbs.png",
		],
		links: [
			{ title: "Demo", link: "https://node-devjobs.herokuapp.com/" },
			{ title: "Codigo", link: "https://github.com/lion-ctrl/devjobs" },
		],
	},
	{
		img: "/img/projects/meeti.png",
		title: "Meeti",
		description:
			"Clon de la aplicación Meetup, con casi toda su funcionalidad, esta hecha con NodeJS (Express), el gestor de plantillas EJS y la base de datos en PostgreSQL, implementando también LeafletJS para mostrar mapas.",
		technologies: [
			"/img/express.png",
			"/img/nodejs.png",
			"/img/postgre.png",
			"/img/ejs.png",
		],
		links: [
			{ title: "Codigo", link: "https://github.com/lion-ctrl/clon-meetup" },
		],
	},
];

export const textArray = [
	"React.JS 🚀",
	"SASS",
	"Node.JS 💻",
	"PHP 🐘",
	"GraphQL",
	"ECMAS6",
	"Back End",
	"Front End",
];
