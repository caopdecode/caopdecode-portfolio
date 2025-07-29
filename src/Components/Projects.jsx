import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Project1Img from '/ProjectsPics/Project1.jpg';

const projects = [
  {
    id: 1,
    title: "StarSystem",
    description: "Client management system for an insurance company. For privacy reasons I can't link to the project but there is a video that shows the functionality.",
    technologies: ["React", "Spring Boot", "AWS", "PostgreSQL"],
    link: "https://example.com/project-one",
    image: "/ProjectsPics/Project1.jpg", // Reemplazar luego
  },
  {
    id: 2,
    title: "Subscribly",
    description: "Subscribly is a backend Java application designed to simulate a subscription-based service. Built with Spring Boot, this project applies all SOLID principles in a real-world scenario including user management, plans, subscriptions, payments, and notifications.",
    technologies: ["Java", "Spring Boot"],
    link: "https://github.com/caopdecode/Subscribly",
    image: "path/to/image2.jpg",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    technologies: ["React", "AWS"],
    link: "https://example.com/project-three",
    image: "path/to/image3.jpg",
  },
];

export default function Projects({ onEnter }) {
  const [selected, setSelected] = useState(null);

   const { ref, inView } = useInView({ threshold: 0.3 });
  
      useEffect(() => {
          if (inView) {
      console.log("SECCIÓN EN VISTA");
      onEnter(); // cambia el fondo
    }
      }, [inView]);

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="h-screen w-full text-white flex flex-col px-8 py-16 overflow-hidden justify-center align-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className="text-5xl font-bold text-[#D6D6D6] mb-10 ml-25"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h2>

      <motion.div
        className="flex gap-6 overflow-x-auto scrollbar-hide justify-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelected(project)}
            className="relative w-[250px] h-[350px] flex-shrink-0 rounded-xl overflow-hidden cursor-pointer shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-10 flex items-center justify-center">
              <h3 className="text-white text-xl font-bold text-center">
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
            className="bg-[#232325] rounded-2xl p-8 text-white max-w-lg w-full relative shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              className="absolute top-4 right-4 text-[#9FE870] hover:text-white"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>
            <h3 className="text-2xl font-bold text-[#3B82F6] mb-4">
              {selected.title}
            </h3>
            <p className="mb-4">{selected.description}</p>
            <p className="mb-2 font-semibold text-[#3B82F6]">Technologies:</p>
            <ul className="mb-4 list-disc list-inside">
              {selected.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <a
              href={selected.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FE870] hover:underline"
            >
              View Project ↗
            </a>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}