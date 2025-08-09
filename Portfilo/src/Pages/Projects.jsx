import React from "react";
import fressh from "../assets/Screenshot 2025-08-07 181331.png";
import yummy from "../assets/Screenshot 2025-08-07 181952.png";
import daniels from "../assets/Screenshot 2025-08-07 185701.png";

// أيقونات
import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import { SiReactquery, SiAxios, SiTailwindcss } from "react-icons/si";

const techIcons = {
  React: <FaReact className="inline-block mr-1" />,
  "React Query": <SiReactquery className="inline-block mr-1" />,
  TailwindCSS: <SiTailwindcss className="inline-block mr-1" />,
  Bootstrap: <FaBootstrap className="inline-block mr-1" />,
  Axios: <SiAxios className="inline-block mr-1" />,
  HTML: <FaHtml5 className="inline-block mr-1" />,
  CSS: <FaCss3Alt className="inline-block mr-1" />,
  JavaScript: <FaJs className="inline-block mr-1" />,
  GitHub: <FaGithub className="inline-block mr-1" />,
};

const projects = [
  {
    title: "Fresh Cart",
    image: fressh,
    description:
      "E-commerce app for fresh products with cart & user authentication.",
    tech: ["React", "ReactQuery", "TailwindCSS", "Axios"],
    live: "https://fresh-cart-flax-pi.vercel.app/",
    code: "https://github.com/Darthdevv/Fresh-Cart",
  },
  {
    title: "Yummy Meals",
    image: yummy,
    description:
      "A responsive food recipe app using TheMealDB API with dynamic search and categories.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://yummy-bay.vercel.app/",
    code: "https://github.com/MohamedNagy465/yummy",
  },
  {
    title: "Daniels",
    image: daniels,
    description:
      "A portfolio template with smooth animations and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    live: "https://vercel.com/mahmoud-nagis-projects/daniels/9YREFPYgBSUtjCezfZwr1eCE2jTM",
    code: "https://github.com/MohamedNagy465/Daniels",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
      hover:scale-[1.03] hover:shadow-lg hover:shadow-purple-600 
      transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1"
            >
              {techIcons[tech]} {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="portfolio"
      className=" py-20 px-4 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
        <h2
          className="relative text-3xl font-bold text-gray-800 dark:text-white mb-6
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2
          after:w-24 after:h-1 after:bg-purple-600"
        >
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
