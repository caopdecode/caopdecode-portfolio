import { motion } from "framer-motion";
import CamiloImg from "../assets/LinkdnProfile-noBg.png";
import { useInView } from "react-intersection-observer";
import { useEffect} from "react";

export default function About({onEnter}) {
   const { ref, inView } = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
    console.log("SECCIÓN EN VISTA");
    onEnter(); // cambia el fondo
  }
    }, [inView]);
    return(
        <motion.section
        ref={ref} 
        id="about"
        className="h-screen w-full flex items-center justify-center text-white px-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{once: false, amount: 0.3}}
        >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
            {/* Imagen */}
            <motion.div
            className="w-[325px] bg-[#174FA6] rounded-[25px] flex justify-center items-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            >
            <img
                src={CamiloImg} // asegúrate de que esté en la carpeta public
                alt="Foto de Camilo"
                className="rounded-[25px] w-[300px] md:w-[325px] object-cover"
            />
            </motion.div>

            {/* Texto */}
            <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
            >
            <h2 className="text-4xl font-bold text-[#3B82F6] mb-6">ABOUT ME</h2>
            <div className="bg-[#D6D6D6] text-[#174FA6] rounded-[20px] p-6 text-base md:text-lg shadow-lg">
                <p className="mb-4">
                I'm a final-year Multimedia Engineering student with a strong
                focus on software development.
                </p>
                <p className="mb-4">
                Over the past two years, I've built real-world applications—like a
                client management system for an insurance company—using Java,
                Spring Boot, AWS (S3, RDS), and React.
                </p>
                <p>
                I'm passionate about solving real problems through scalable
                systems, clean architecture, and better user experiences.
                </p>
            </div>
            </motion.div>
        </div>
        </motion.section>
    );
}