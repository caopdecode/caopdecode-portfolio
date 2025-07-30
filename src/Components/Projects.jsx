import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import BackToTopButton from "./BackToTopButton";
import { useInView } from "react-intersection-observer";
import Project1Img from '/ProjectsPics/Project1.jpg';

const projects = [
  {
    id: 1,
    title: "StarSystem",
    description: "Client management system for an insurance company. For privacy reasons I can't link to the project but there are a slides that shows the functionality.",
    technologies: ["React", "Spring Boot", "AWS", "PostgreSQL"],
    link: "https://www.canva.com/design/DAGurckeVhc/GivMtM7iVxuz6-1bKvFzqQ/view?utm_content=DAGurckeVhc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6712cad7af",
    image: "/ProjectsPics/Project1.jpg", // Reemplazar luego
  },
  {
    id: 2,
    title: "Subscribly",
    description: "Subscribly is a backend Java application designed to simulate a subscription-based service. Built with Spring Boot, this project applies all SOLID principles in a real-world scenario including user management, plans, subscriptions, payments, and notifications.",
    technologies: ["Java", "Spring Boot"],
    link: "https://github.com/caopdecode/Subscribly",
    image: "/ProjectsPics/Project2.jpg",
  },
];

export default function Projects({ onEnter }) {
  const [selected, setSelected] = useState(null);

  /* const { ref, inView } = useInView({ threshold: 0.3 });
  
      useEffect(() => {
          if (inView) {
      console.log("SECCIÓN EN VISTA");
      onEnter(); // cambia el fondo
    }
      }, [inView]);*/

  return (
    <motion.section
      //ref={ref}
      id="projects"
      className="relative h-screen w-full text-white flex flex-col px-8 py-16 overflow-hidden justify-center align-center bg-[#121212]"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className="text-5xl font-bold text-[#F2F2F2] mb-5 sm:mb-10 sm:ml-25 text-center sm:text-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h2>

      <motion.div
        className="flex sm:flex-row flex-col sm:overflow-x-auto overflow-y-auto gap-6 justify-center items-center sm:h-auto h-[70vh] sm:scrollbar-hide px-2"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="relative sm:w-[250px] sm:h-[350px] w-[70vw] h-[180px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
              <h3 className="text-[#F2F2F2] text-xl font-bold text-center">
                {project.title}
              </h3>
            </div>
            {/* Aquí puedes poner la imagen de fondo con CSS */}
            
          </div>
        ))}
      </motion.div>

      {selected && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#121212] rounded-2xl p-6 sm:p-8 text-[#F2F2F2] w-[90%] sm:max-w-lg relative shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-[#F2F2F2] hover:text-[#EA30FF] transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>
            <h3 className="text-2xl font-bold text-[#EA30FF] mb-4">
              {selected.title}
            </h3>
            <p className="mb-4 text-justify">{selected.description}</p>
            <p className="mb-2 font-semibold text-[#EA30FF]">Technologies:</p>
            <ul className="mb-4 list-disc list-inside">
              {selected.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#30FF36] hover:underline"
            >
              View Project ↗
            </a>
          </motion.div>
        </motion.div>
      )}
      <BackToTopButton />
    </motion.section>
  );
}