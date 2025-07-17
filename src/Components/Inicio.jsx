import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useEffect} from "react";
import {
  UserIcon,
  BriefcaseIcon,
  WrenchIcon,
  MessageCircleIcon,
} from "lucide-react";



const buttonStyles =
  "flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#3B82F6] text-[#232325] font-semibold hover:bg-[#9FE870] transition-colors duration-300 shadow-lg";

export default function Inicio({onEnter}) {
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
      className="h-screen w-full flex flex-col items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      viewport={{once: false, amount: 0.3}}
    >
      {/* Logo */}
      <motion.div
        className="mb-8 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-8xl font-bold text-[#3B82F6]">CAOPDECODE</h1>
      </motion.div>

      {/* Botones de navegación */}
      <motion.div
        className="grid grid-cols-5 gap-1 items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        >
        <div className="flex justify-center">
            <ScrollLink to="about" smooth={true} duration={800} className={buttonStyles}>
                <UserIcon color="#9FE870" />
            </ScrollLink>
        </div>
        <div className="flex justify-center">
            <ScrollLink to="projects" smooth={true} duration={800} className={buttonStyles}>
                 <BriefcaseIcon color="#9FE870" />
            </ScrollLink>
        </div>
        <div className="flex justify-center">
            <ScrollLink to="skills" smooth={true} duration={800} className={buttonStyles}>
                <WrenchIcon color="#9FE870" />
            </ScrollLink>
        </div>
        <div className="flex justify-center">
            <ScrollLink to="contact" smooth={true} duration={800} className={buttonStyles}>
                <MessageCircleIcon color="#9FE870" />
            </ScrollLink>
        </div>
        <div className="flex justify-center">
            <p className="text-[#D6D6D6] text-3xl font-semibold text-center">
            Portfolio
            </p>
        </div>
        </motion.div>
    </motion.section>
  );
}