import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import {
  FaReact,
  FaJava,
  FaPython,
  FaPhp,
  FaAws,
} from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact size={40} color="#3B82F6" /> },
  { name: "Java", icon: <FaJava size={40} color="#3B82F6" /> },
  { name: "Spring Boot", icon: <SiSpringboot size={40} color="#3B82F6" /> },
  { name: "PHP", icon: <FaPhp size={40} color="#3B82F6" /> },
  { name: "Python", icon: <FaPython size={40} color="#3B82F6" /> },
  { name: "AWS", icon: <FaAws size={40} color="#3B82F6" /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#3B82F6" /> },
];

export default function Skills({ onEnter }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  
      useEffect(() => {
          if (inView) {
      console.log("SECCIÓN EN VISTA");
      onEnter(); // cambia el fondo
    }
      }, [inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      className="h-screen w-full flex flex-col items-center justify-center text-white px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className="text-5xl font-bold mb-10 text-[#D6D6D6]"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        SKILLS
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 bg-[#D6D6D6] text-center rounded-xl flex flex-col items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {skill.icon}
            <p className="text-xs font-semibold text-[#232325] mt-2">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}