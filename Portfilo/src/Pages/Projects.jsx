import React from "react";  
import fressh from "../assets/Screenshot 2025-08-07 181331.png";
import yummy from "../assets/Screenshot 2025-08-07 181952.png";
import daniels from "../assets/Screenshot 2025-09-04 114654.png";
import todList from "../assets/Screenshot 2025-10-19 143613.png";
import foodDel from "../assets/Screenshot 2025-10-19 143116.png";
import yourService from "../assets/Screenshot 2025-10-19 143517.png";

import {
  FaReact,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiReactquery,
  SiAxios,
  SiTailwindcss,
  SiRedux,
  SiSwiper,
  SiFramer,
} from "react-icons/si";
import { MdAnimation, MdDashboard } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";

const techIcons = {
  React: <FaReact className="inline-block" />,
  RQuery: <SiReactquery className="inline-block" />,
  TailwindCSS: <SiTailwindcss className="inline-block" />,
  Bootstrap: <FaBootstrap className="inline-block" />,
  Axios: <SiAxios className="inline-block" />,
  HTML: <FaHtml5 className="inline-block" />,
  CSS: <FaCss3Alt className="inline-block" />,
  JavaScript: <FaJs className="inline-block" />,
  GitHub: <FaGithub className="inline-block" />,
  Aos: <MdAnimation className="inline-block" />,
  Redux: <SiRedux className="inline-block" />,
  Swiper: <SiSwiper className="inline-block" />,
  Context: <FaReact className="inline-block" />,
  "framer-motion": <SiFramer className="inline-block" />,
  ReducToolkit: <TbBrandRedux className="inline-block" />,
  Dashboard: <MdDashboard className="inline-block" />,
};

const projects = [
  {
    title: "Fresh Cart",
    image: fressh,
    description:
      "E-commerce app for fresh products with cart & user authentication.",
    tech: ["React", "RQuery", "TailwindCSS", "Axios"],
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
    title: "Moves App",
    image: daniels,
    description:
      "A portfolio template with smooth animations and responsive design.",
    tech: ["React", "RQuery", "TailwindCSS", "Aos"],
    live: "https://moves-app.vercel.app/",
    code: "https://github.com/MohamedNagy465/movesApp",
  },
  {
    title: "Food Del",
    image: foodDel,
    description:
      "Food delivery web app with Admin Dashboard using Context API, TailwindCSS, and Aos.",
    tech: ["React", "Context", "TailwindCSS", "Aos", "Dashboard"],
    live: "https://food-app-fawn-beta.vercel.app/",
    code: "https://github.com/MohamedNagy465/food-app",
  },
  {
    title: "Todo List",
    image: todList,
    description:
      "Task management app built with React, Redux, and TailwindCSS.",
    tech: ["React", "Redux", "TailwindCSS", "framer-motion", "ReducToolkit"],
    live: "https://todlist-xi.vercel.app/",
    code: "https://github.com/MohamedNagy465/Todlist",
  },
  {
    title: "Your Service",
    image: yourService,
    description:
      "Responsive landing page built with Swiper.js animations.",
    tech: ["HTML", "JavaScript", "CSS", "Aos", "Swiper", "Bootstrap"],
    live: "https://your-service-puce.vercel.app/",
    code: "https://github.com/MohamedNagy465/yourService",
  },
];

function ProjectCard({ project }) {
  return (
    <div
      className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-md 
      overflow-hidden transition-transform duration-300 hover:scale-[1.03] 
      hover:shadow-purple-500/50 hover:shadow-lg "
      data-aos="fade-up"
      data-aos-delay="150"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="flex flex-col  text-start flex-grow p-4">
        <h3 className="text-lg text-start font-semibold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 dark:bg-purple-800 
              dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded flex items-center gap-1"
            >
              {techIcons[tech] && <span className="text-base">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-indigo-600 text-white py-1.5 rounded 
            hover:bg-indigo-700 transition"
          >
            Live Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center bg-gray-600 text-white py-1.5 rounded 
            hover:bg-gray-700 transition"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-900 ">
      <div
        className="container mx-auto text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2
          className="relative text-3xl font-bold text-gray-800 dark:text-white mb-6
          after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 
          after:-translate-x-1/2 after:w-24 after:h-1 after:bg-purple-600"
        >
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion
          for development.
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
